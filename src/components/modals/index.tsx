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
		<Modal
			isOpen={modalState.isOpen}
			onClose={() => { dispatch(onCloseModal()) }}
			scrollBehavior="inside"
			size="2xl"
			classNames={{
				base: "bg-[#070B17] text-[#fff]",
				header: "border-b border-white/10 text-[#fff]",
				body: "text-[#fff]",
				closeButton: "text-[#fff] hover:bg-white/10 active:bg-white/20",
			}}
		>
			<ModalContent className="bg-[#070B17] text-[#fff]">
				{() => (
					<>
						<ModalHeader className="flex flex-col gap-1 text-[#fff]">{modalState.title}</ModalHeader>
						<ModalBody className="text-[#fff]">
							{modalState.component}
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	}</>;
};
