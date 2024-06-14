import { FC } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";

import * as Yup from "yup";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface Props {}

interface FormValues {
  doc_type: string;
  doc_number: string;
  phone: string;
  accept_privacy_terms: boolean;
  accept_communications: boolean;
}

const initialValues = {
  doc_type: "DNI",
  doc_number: "",
  phone: "",
  accept_privacy_terms: false,
  accept_communications: false,
};

const validationSchema = Yup.object().shape({
  doc_type: Yup.string().oneOf(["DNI", "CE"]),
  doc_number: Yup.string().required("Campo requerido"),
  phone: Yup.string().required("Campo requerido"),
  accept_privacy_terms: Yup.boolean().oneOf(
    [true],
    "Debes aceptar las políticas de privacidad",
  ),
  accept_communications: Yup.boolean().oneOf(
    [true],
    "Debes aceptar la Política de Comunicaciones Comerciales",
  ),
});

const JoinForm: FC<Props> = () => {
  function submitForm(values: FormValues) {
    console.log(values);
  }

  return (
    <div>
      <p className="font-semibold text-sm tracking-[0.2px] text-[#03050F]">
        Tú eliges cuando pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría, 100% online.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col">
          <div className="my-6">
            <div className="flex flex-row w-full h-14">
              <div className="flex flex-col relative">
                <Field
                  name="doc_type"
                  as="select"
                  className="flex w-[140px] h-14 border border-[#5E6488] bg-white p-4 items-center justify-center align-middle rounded-l-lg"
                >
                  <option value="DNI">DNI</option>
                  <option value="CE">Carné de extranjería</option>
                </Field>
                <ChevronDownIcon className="bg-white absolute right-2 size-5 top-4 text" />
              </div>
              <div className="relative">
                <label
                  htmlFor="documentNumber"
                  className="absolute left-4 text-[12px] font-normal top-1.5 text-[#5E6488]"
                >
                  Nro. de documento
                </label>
                <Field
                  name="doc_number"
                  type="text"
                  className="flex w-full h-14 border-t border-r border-b border-[#5E6488] bg-transparent pl-4 pt-5 items-center justify-center align-middle rounded-r-lg z-10"
                />
                <ErrorMessage
                  name="doc_number"
                  component="div"
                  className="absolute text-red-500 text-sm top-[26px] left-4 -z-10"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-row h-14 w-full">
              <div className="relative w-full">
                <label
                  htmlFor="phone"
                  className="absolute left-4 text-[12px] font-normal top-1.5 text-[#5E6488]"
                >
                  Celular
                </label>
                <Field
                  name="phone"
                  type="text"
                  className="flex w-full h-14 border border-[#5E6488] bg-transparent pl-4 pt-5 items-center justify-center align-middle rounded-lg z-10"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="absolute text-red-500 text-sm top-[26px] left-4 -z-10"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 mb-6">
            <div>
              <div className="flex flex-row items-center">
                <Field
                  name="accept_privacy_terms"
                  type="checkbox"
                  className="size-5 rounded border-gray-300 text-[#0A051E] focus:ring-0"
                />
                <label
                  htmlFor="accept_privacy_terms"
                  className="ml-3 !text-[#0A051E] font-normal leading-6 text-[14px]"
                >
                  Acepto la Política de Privacidad
                </label>
              </div>
              <ErrorMessage
                name="accept_privacy_terms"
                component="div"
                className="text-red-500 block ml-8 text-sm mb-2 -mt-1"
              />
            </div>
            <div>
              <div className="flex flex-row items-center">
                <Field
                  name="accept_communications"
                  type="checkbox"
                  className="size-5 rounded border-gray-300 text-[#0A051E] focus:ring-0"
                />
                <label
                  htmlFor="accept_privacy_terms"
                  className="ml-3 !text-[#0A051E] font-normal leading-6 text-[14px]"
                >
                  Acepto la Política de Comunicaciones Comerciales
                </label>
              </div>
              <ErrorMessage
                name="accept_communications"
                component="div"
                className="text-red-500 block ml-8 text-sm mb-2 -mt-1"
              />
            </div>
            <a
              href="#"
              className="text-[#03050F] font-semibold text-[12px] underline tracking-[0.3px]"
            >
              Aplican términos y condiciones.
            </a>
          </div>
          <div>
            <button type="submit" className="bg-[#03050F] py-[18px] px-10 text-white font-bold w-full rounded-[40px] tracking-[0.6px]">
              Cotiza aquí
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default JoinForm;
