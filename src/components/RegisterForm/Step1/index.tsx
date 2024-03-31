"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaArrowRight } from "react-icons/fa";
import { Step1SchemaType, Step1Schema } from "@/validations/Step1";

import { IStep1 } from "./Step1";

const Step1: React.FC<IStep1.Props> = ({ data, updateFields, nextStep }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1SchemaType>({
    resolver: yupResolver(Step1Schema),
  });

  const onSubmit = async (payload: Step1SchemaType) => {
    await updateFields({ ...data, ...payload });
    return nextStep();
  };

  return (
    <div className="formWrapper">
      <h2 className="heading">Kullanıcı Bilgileri</h2>
      <p className="description">
        Ad, Soyad, Email ve Telefon alanlarını doldurarak bir sonraki adıma
        geçiniz.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputField">
          <label>
            Ad <sup>*</sup>
          </label>
          <input
            type="text"
            placeholder="Adınızı giriniz"
            {...register("name")}
          />
          {errors.name && (
            <span className="textError">{errors.name.message}</span>
          )}
        </div>
        <div className="inputField">
          <label>
            Soyad <sup>*</sup>
          </label>
          <input
            type="text"
            placeholder="Soyadınızı giriniz"
            {...register("surname")}
          />
          {errors.surname && (
            <span className="textError">{errors.surname.message}</span>
          )}
        </div>
        <div className="inputField">
          <label>
            Email <sup>*</sup>
          </label>
          <input
            type="email"
            placeholder="Email adresinizi giriniz"
            {...register("email")}
          />
          {errors.email && (
            <span className="textError">{errors.email.message}</span>
          )}
        </div>
        <div className="inputField">
          <label>
            Telefon <sup>*</sup>
          </label>
          <input
            type="hidden"
            placeholder="Telefon numaranızı giriniz"
            {...register("phone")}
          />
          <PatternFormat
            format="+90 (###) ### ## ##"
            allowEmptyFormatting
            mask="_"
            onValueChange={(values) => {
              return setValue("phone", values.value);
            }}
          />
          {errors.phone && (
            <span className="textError">{errors.phone.message}</span>
          )}
        </div>
        <div className="formActions">
          <button className="formBtn nextBtn">
            İleri <FaArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
