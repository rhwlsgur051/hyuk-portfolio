'use client';
import { useAppSelector } from '@/stores/hooks';
import { selectModal, onCloseModal } from '@/stores/modal-slice';
import { useEffect } from 'react';
import { ModalHeader, Modal, ModalContent, ModalBody } from '@heroui/react';
import { useDispatch } from 'react-redux';

export const ModalContainer = () => {
	const modalState = useAppSelector(selectModal);
	const dispatch = useDispatch();
	useEffect(() => { }, [modalState.component]);
	return <>{modalState.isOpen &&
		<Modal isOpen={modalState.isOpen} onClose={() => { dispatch(onCloseModal()) }} scrollBehavior="inside" size='2xl' >;
			<ModalContent>
				{() => (
					<>
						<ModalHeader className="flex flex-col gap-1">{modalState.title}</ModalHeader>
						<ModalBody>
							{modalState.component}
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	}</>;
};
