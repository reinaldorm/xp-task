import React from 'react';

export interface ModalContextProps {
  modal: boolean;
  toggleModal: (action: boolean) => void;
}

export const ModalContext = React.createContext<ModalContextProps | null>(null);

export const useModal = () => React.useContext(ModalContext) as ModalContextProps;
