'use client';
import { useAppSelector } from '@/stores/hooks';
import { selectModal } from '@/stores/modal-slice';
import { useEffect } from 'react';

export const ModalContainer = () => {
	const modalState = useAppSelector(selectModal);
	const TargetModal = modalState.component;

	useEffect(() => { }, [modalState.component]);
	return <>{modalState.isOpen && TargetModal}</>;
};
