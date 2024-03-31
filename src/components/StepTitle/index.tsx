"use client";

import React from "react";

import "./style.scss";

import { IStepTitle } from "./StepTitle";

const StepTitle: React.FC<IStepTitle.Props> = ({
  title,
  stepLength,
  activeStep,
}) => {
  return (
    <div className="stepTitle">
      <b>{title}</b>
      <span>
        {activeStep}/{stepLength}
      </span>
    </div>
  );
};

export default StepTitle;
