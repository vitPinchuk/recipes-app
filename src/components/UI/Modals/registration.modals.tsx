"use client";

import RegistrationForm from "@/app/forms/registration.form";
import ModalWindow from "@/components/Common/Modal";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: IProps) => {
  return (
    <ModalWindow isOpen={isOpen} onClose={onClose} title="Create account">
      <RegistrationForm onClose={onClose} />
    </ModalWindow>
  );
};

export default RegistrationModal;
