import React from 'react';
import { ModalContext } from './context';

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modal, setModal] = React.useState(false);

  function toggleModal(action: boolean) {
    setModal(action);
  }

  return <ModalContext.Provider value={{ modal, toggleModal }}>{children}</ModalContext.Provider>;
};
