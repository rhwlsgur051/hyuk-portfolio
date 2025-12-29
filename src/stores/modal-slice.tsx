import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ReactNode } from "react";

interface ModalState {
  isOpen?: boolean
  title: string;
  component: any;
  children?: ReactNode;
  callback?: () => any;
}

const initialState: ModalState = {
  title: '',
  component: null,
};

export const modalSlice = createSlice({
  name: "modalState",
  initialState: initialState,
  reducers: {
    onOpenModal: (state, action) => {
      const { title, component } = action.payload;
      state.title = title;
      state.component = component;
      state.isOpen = true;
    },
    onCloseModal: (state) => {
      state.title = '';
      state.component = null;
      state.isOpen = false;
    },
  },
});

export const { onOpenModal, onCloseModal } = modalSlice.actions;
export const selectModal = (state: RootState) => state.modal;

const counterReducer = modalSlice.reducer;
export default counterReducer;