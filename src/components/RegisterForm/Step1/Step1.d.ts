import { IRegisterForm } from "../RegisterForm";
import { Step1Schema } from "@/validations/Step1";

export declare module IStep1 {
  export interface Props {
    data: IRegisterForm.FormData;
    updateFields: (data: Step1Schema) => void;
    nextStep: () => void;
  }
}
