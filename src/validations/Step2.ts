import * as yup from "yup";

export const Step2Schema = yup.object().shape(
  {
    amazonUrl: yup
      .string()
      .when(
        ["hepsiburadaUrl", "trendyolUrl"],
        ([hepsiburadaUrl, trendyolUrl]: any | any[], yup: yup.AnySchema) => {
          return hepsiburadaUrl !== "" || trendyolUrl !== ""
            ? yup.notRequired()
            : yup.required("Amazon Url adresi giriniz");
        }
      ),
    hepsiburadaUrl: yup
      .string()
      .when(
        ["amazonUrl", "trendyolUrl"],
        ([amazonUrl, trendyolUrl]: any | any[], yup: yup.AnySchema) => {
          return amazonUrl !== "" || trendyolUrl !== ""
            ? yup.notRequired()
            : yup.required("HepsiBurada Url adresi giriniz");
        }
      ),
    trendyolUrl: yup
      .string()
      .when(
        ["amazonUrl", "hepsiburadaUrl"],
        ([amazonUrl, hepsiburadaUrl]: any | any[], yup: yup.AnySchema) => {
          return amazonUrl !== "" || hepsiburadaUrl !== ""
            ? yup.notRequired()
            : yup.required("Trendyol Url adresi giriniz");
        }
      ),
  },
  [
    ["hepsiburadaUrl", "trendyolUrl"],
    ["amazonUrl", "trendyolUrl"],
    ["amazonUrl", "hepsiburadaUrl"],
  ]
);
export type Step2SchemaType = yup.InferType<typeof Step2Schema>;
