'use client';
import memberState from '@/recoil/member';
import messageState from '@/recoil/message';
import { CubeMessageResponse } from '@/types/cube-message-response';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

// @ts-ignore
import SockJS from 'sockjs-client';
// @ts-ignore
import Stomp, { Client } from 'webstomp-client';

const socketUrl = `${process.env.NEXT_PUBLIC_API_URL}/ws`;
export default function useSocket() {
	const member = useRecoilValue(memberState);
	/** 소켓 최대 재접속 시도 */
	const MAX_RECONNECT_COUNT = 15;

	/** 소켓 재접속 시도 수 */
	const [reconnectCount, setReconnectCount] = useState(0);
	const [socket, setSocket] = useState(null);
	const [stompClient, setStompClient] = useState<Client>();

	/** 알림 메시지 목록 */
	const [_, setCubeMessages] = useRecoilState<CubeMessageResponse[]>(messageState);

	/** 소켓 연결 */
	const connect = () => {
		setSocket(new SockJS(socketUrl));
	};

	const [lastMemberNo, setLastMemberNo] = useState<number>();

	useEffect(() => {
		if (member) {
			if (lastMemberNo !== member.memberNo) {
				setLastMemberNo(member.memberNo);
				connect();
			}
		} else {
			disconnect();
		}
		return () => {
			disconnect();
		};
	}, [member]);

	useEffect(() => {
		connect();
	}, [reconnectCount]);

	useEffect(() => {
		if (socket) {
			setStompClient(Stomp.over(socket));
		}
	}, [socket]);

	useEffect(() => {
		if (stompClient && member) {
			stompClient.connect(
				{ messageType: 'cube', memberNo: member.memberNo },
				() => {
					setReconnectCount(0); // 접속 성공 시 재연결 시도 횟수 초기화
					stompClient?.subscribe(`/sub/${member.memberNo}`, (frame: any) => {
						if (frame.body) {
							const data = JSON.parse(frame.body);
							setCubeMessages((prev) => {
								return [data, ...prev];
							});
						}
					});
				},
				() => {
					connectionErrorHandler();
				},
			);
		}
	}, [stompClient]);

	/** 소켓 에러 핸들러 (Reconnection) */
	const connectionErrorHandler = () => {
		stompClient?.disconnect(() => {
			if (reconnectCount < MAX_RECONNECT_COUNT) {
				setTimeout(() => {
					setReconnectCount(reconnectCount + 1);
				}, 4000);
			}
		});
	};

	/** 소켓 끊기 */
	const disconnect = () => {
		stompClient?.disconnect(() => {
			setLastMemberNo(undefined);
			setSocket(null);
			setStompClient(undefined);
		});
	};

	/** [DEBUG] 임시 메세지 보내기 */
	//   forceSend() {
	//     this.stompClient?.send(`/pub/direct`, JSON.stringify({ message: 'asdfasfas', receiverNo: '198', senderNo: '197' }));
	//   }

	return [socket];
}
