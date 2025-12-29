'use client';

import { useCallback, useEffect } from 'react';

export interface PassResponseType {
	ci: string;
	di: string;
	memberMobile: string;
	agency: string;
	memberBirthYmd: string;
	citizens: string;
	memberGender: string;
	memberName: string;
}

// TEST: ----------------------------------------------------------------------
// ENV 에 NEXT_PUBLIC_PASS_DATA(pass response - string)를 추가해주세요.
const test = (data: any) => {
	const originData = data?.split('|') ?? [];
	const year = originData[4].substring(0, 4);
	const month = originData[4].substring(4, 6);
	const day = originData[4].substring(6, 8);
	const memberBirthYmd = `${year}-${month}-${day}`;

	const passData = {
		ci: originData[0],
		di: originData[1],
		memberMobile: originData[2],
		agency: originData[3],
		memberBirthYmd,
		citizens: originData[5],
		memberGender: originData[6],
		memberName: decodeURIComponent(originData[7]),
	};

	return passData as unknown as PassResponseType;
};
// ----------------------------------------------------------------------
export default function usePass(callback: (data: PassResponseType) => Promise<any>) {
	/** PASS 인증 팝업 */
	const openPassPopup = () => {
		window.open(
			'https://cert-user.ikoob.com/cert.php',
			'popup',
			'width=425, height=550, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=435, top=250',
		);

		// TEST:
		// callback(test());
	};

	/** MessageEvent */
	const onMessagePopup = useCallback(
		(event: any) => {
			if (event.origin === 'https://cert-user.ikoob.com') {
				if (!event.data) return;
				const originData = event.data.split('|');

				const year = originData[4].substring(0, 4);
				const month = originData[4].substring(4, 6);
				const day = originData[4].substring(6, 8);
				const memberBirthYmd = `${year}-${month}-${day}`;

				const passData = {
					ci: originData[0],
					di: originData[1],
					memberMobile: originData[2],
					agency: originData[3],
					memberBirthYmd,
					citizens: originData[5],
					memberGender: originData[6],
					memberName: decodeURIComponent(originData[7]),
				};

				callback(passData);
			}
		},
		[callback],
	);

	useEffect(() => {
		window.addEventListener('message', onMessagePopup);
		return () => window.removeEventListener('message', onMessagePopup);
	}, [onMessagePopup]);

	return { openPassPopup };
}
