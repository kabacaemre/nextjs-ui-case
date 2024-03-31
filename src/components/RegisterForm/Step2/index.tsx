"use client";

import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SlInfo } from "react-icons/sl";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Step2SchemaType, Step2Schema } from "@/validations/Step2";
import { IStep2 } from "./Step2";

const Step1: React.FC<IStep2.Props> = ({ data, updateFields, prevStep }) => {
  const {
    watch,
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2SchemaType>({
    mode: "onChange",
    resolver: yupResolver(Step2Schema),
  });

  const onSubmit = async (payload: Step2SchemaType) => {
    const result = await updateFields({ ...data, ...payload });
    console.log("Backend servisine gönderilecek data", result);
    toast.success("Başvurunuz Tamamlandı", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.amazonUrl || value.hepsiburadaUrl || value.trendyolUrl) {
        clearErrors();
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="formWrapper">
      <h2 className="heading">E-Platform Bilgileri</h2>
      <p className="description">
        Son Adım!! Kayıt işlemini tamamlamak için Amazon, HepsiBurada veya
        Trendyol hesaplarınızı giriniz.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputField">
          <label>
            <i
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Amazon hesabınız varsa, HepsiBurada ve Trendyol alanlarını boş bırakabilirsiniz."
            >
              <SlInfo color="red" />
            </i>
            Amazon
          </label>
          <input
            type="text"
            placeholder="Amazon adresinizi giriniz"
            {...register("amazonUrl")}
          />
          {errors.amazonUrl && (
            <span className="textError">{errors.amazonUrl.message}</span>
          )}
        </div>
        <div className="inputField">
          <label>
            <i
              data-tooltip-id="my-tooltip"
              data-tooltip-content="HepsiBurada hesabınız varsa, Amazon ve Trendyol alanlarını boş bırakabilirsiniz."
            >
              <SlInfo color="red" />
            </i>
            HepsiBurada
          </label>
          <input
            type="text"
            placeholder="HepsiBurada adresinizi giriniz"
            {...register("hepsiburadaUrl")}
          />
          {errors.hepsiburadaUrl && (
            <span className="textError">{errors.hepsiburadaUrl.message}</span>
          )}
        </div>
        <div className="inputField">
          <label>
            <i
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Trendyol hesabınız varsa, Amazon ve HepsiBurada alanlarını boş bırakabilirsiniz."
            >
              <SlInfo color="red" />
            </i>
            Trendyol
          </label>
          <input
            type="text"
            placeholder="Trendyol adresinizi giriniz"
            {...register("trendyolUrl")}
          />
          {errors.trendyolUrl && (
            <span className="textError">{errors.trendyolUrl.message}</span>
          )}
        </div>
        <div className="formActions">
          <button className="formBtn prevBtn" onClick={() => prevStep()}>
            <FaArrowLeft /> Geri
          </button>
          <button className="formBtn">
            Gönder <FaArrowRight />
          </button>
        </div>
      </form>
      <Tooltip id="my-tooltip" className={"step2Tooltip"} />
    </div>
  );
};

export default Step1;
