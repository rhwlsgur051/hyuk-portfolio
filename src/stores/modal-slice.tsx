import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { ReactNode } from "react";

interface ModalState {
  isOpen?: boolean
  component: any;
  children?: ReactNode;
  callback?: () => any;
}

const initialState: ModalState = {
  component: null,
};

export const modalSlice = createSlice({
  name: "modalState",
  initialState: initialState,
  reducers: {
    onOpenModal: (state, action) => {
      const { component } = action.payload;
      state.component = component;
      state.isOpen = true;
    },
    onCloseModal: (state) => {
      state.component = null;
      state.isOpen = false;
    },
  },
});

export const { onOpenModal, onCloseModal } = modalSlice.actions;
export const selectModal = (state: RootState) => state.modal;

const counterReducer = modalSlice.reducer;
export default counterReducer;