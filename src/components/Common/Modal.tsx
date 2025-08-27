"use client";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import { ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const ModalWindow = ({
  isOpen,
  onClose,
  title,
  children,
  size = "xs",
}: IProps) => {
  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="border-b">
          <h3 className="text-xl text-black font-semibold">{title}</h3>
        </ModalHeader>
        <ModalBody className="space-y-4 py-6">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWindow;
