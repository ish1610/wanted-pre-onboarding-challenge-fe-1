import React from "react";

export type signUpInputValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export interface ISignUpProps {
  signUpFeedbackMessage: string;
  isEmailVaild: boolean;
  isPasswordVaild: boolean;
  isPasswordConfirmVaild: boolean;
  signUpInputValues: signUpInputValues;
  children?: React.ReactNode;
  onChangeEmailValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassworeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangepasswordConfirmValue: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onSubmitSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type SignUpInfoValues = Pick<signUpInputValues, "email" | "password">;
export type MoveHomeCb = (route: string) => void;

export type SignUpAPI = {
  signUp: (signUpInfo: SignUpInfoValues) => Promise<string | undefined>;
};

export type SignUpSliceState = {
  feedbackMessage: string;
};
