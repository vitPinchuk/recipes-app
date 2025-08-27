"use client";

import { registerUser } from "@/actions/register";
import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const RegistrationForm = ({ onClose }: IProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await registerUser(formData);

    onClose();
  };

  return (
    <Form className="w-full" onSubmit={handleSubmit}>
      <Input
        aria-label="Email"
        isRequired
        name="email"
        placeholder="Enter email"
        type="email"
        value={formData.email}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none ",
        }}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        validate={(value) => {
          if (!value) return "Email is required";
          if (!validateEmail(value)) return "Wrong email";
          return null;
        }}
      />
      <Input
        isRequired
        name="password"
        placeholder="Please, enter the password"
        type="password"
        value={formData.password}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none ",
        }}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        validate={(value) => {
          if (!value) return "Password is required";
          if (value.length < 6) return "Password should be at least 6 symbols";
          return null;
        }}
      />
      <Input
        isRequired
        name="confirmPassword"
        placeholder="Repeat password"
        type="password"
        value={formData.confirmPassword}
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm focus:outline-none ",
        }}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        validate={(value) => {
          if (!value) return "Password is required";
          if (value !== formData.password) return "Mismatch passwords";
          return null;
        }}
      />

      <div className="flex w-[100%]  gap-4 items-center pt-8 justify-end">
        <Button variant="light" onPress={onClose}>
          Cancel
        </Button>
        <Button color="primary" type="submit">
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
