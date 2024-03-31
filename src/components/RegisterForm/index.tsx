"use client";

import React, { useState } from "react";

import StepTitle from "@/components/StepTitle";
import Step1 from "./Step1";
import Step2 from "./Step2";

import { IRegisterForm } from "./RegisterForm";

import "./style.scss";

const RegisterForm: React.FC = () => {
  const INITIAL_DATA: IRegisterForm.FormData = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    amazonUrl: "",
    hepsiburadaUrl: "",
    trendyolUrl: "",
  };

  const [data, setData] = useState<IRegisterForm.FormData>(INITIAL_DATA);
  const [activeStep, setActiveStep] = useState(1);

  const handlePrev = async () => {
    return setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = async () => {
    return setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const updateFields = (payload: IRegisterForm.FormData) => {
    setData((prev) => {
      return { ...prev, ...payload };
    });
    return data;
  };

  return (
    <div className="registerFormSection">
      <StepTitle
        title="Hadi Başlıyalım"
        stepLength={2}
        activeStep={activeStep}
      />
      {activeStep === 1 && (
        <Step1 data={data} updateFields={updateFields} nextStep={handleNext} />
      )}
      {activeStep === 2 && (
        <Step2 data={data} updateFields={updateFields} prevStep={handlePrev} />
      )}
    </div>
  );
};

export default RegisterForm;
