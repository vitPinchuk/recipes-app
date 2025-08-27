"use client";

import LoginForm from "@/app/forms/login.form";
import ModalWindow from "@/components/Common/Modal";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: IProps) => {
  return (
    <ModalWindow isOpen={isOpen} onClose={onClose} title="Login">
      <LoginForm onClose={onClose} />
    </ModalWindow>
  );
};

export default LoginModal;
