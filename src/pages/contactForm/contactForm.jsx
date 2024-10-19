// ContactForm.js

import React, { useState } from "react";
import './contactForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Circles } from 'react-loader-spinner';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Button from "../../components/button/button";
import ConfirmationMessage from "../../components/confirmationMessage/confirmationMessage";
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

// ------------ FORM COMPONENTS ------------

const InputField = ({ label, type, name, value, onChange, onBlur, error }) => {
  return (
    <div className="inputFieldContainer">
      <input
        className="imputFieldInput"
        type={type}
        name={name}
        value={value}
        placeholder={label}
        onChange={onChange}
        onBlur={onBlur}
        style={error ? { borderColor: 'red', marginBottom: '5px' } : {}}
      />
      {error && <p className="errorInput">{error}</p>}
    </div>
  );
};

const Textarea = ({ label, name, value, onChange, onBlur, error }) => {
  return (
    <div className="inputFieldContainer flex flex-col">
      <label className="imputFieldLabel">{label}</label>
      <textarea
        className="imputFieldInput textArea"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={error ? { borderColor: 'red', marginBottom: '5px' } : {}}
      ></textarea>
      {error && <p className="errorInput">{error}</p>}
    </div>
  );
};

// ------------ FORM ------------

const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enquiry: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const options = [
    { label: t('CONTACT_FORM_OPTION_GENERAL'), value: t('CONTACT_FORM_OPTION_GENERAL') },
    { label: t('CONTACT_FORM_OPTION_FREELANCE'), value: t('CONTACT_FORM_OPTION_FREELANCE') },
    { label: t('CONTACT_FORM_OPTION_JOB'), value: t('CONTACT_FORM_OPTION_JOB') },
  ];

  const handleOptionClick = (option) => {
    setFormData({
      ...formData,
      enquiry: option,
    });
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "name" || name === "enquiry") {
      if (!value) {
        error = t('CONTACT_FORM_ERROR_REQUIRED');
      }
    }
    if (name === "email") {
      if (!value) {
        error = t('CONTACT_FORM_ERROR_REQUIRED');
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = t('CONTACT_FORM_ERROR_INVALID_EMAIL');
      }
    }
    if (name === "message") {
      if (!value) {
        error = t('CONTACT_FORM_ERROR_REQUIRED');
      } else if (value.length < 25) {
        error = t('CONTACT_FORM_ERROR_MIN_LENGTH');
      }
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    const error = validateField(name, value);
    const errorEnquiry = validateField("enquiry", formData['enquiry']);
    setErrors({
      ...errors,
      [name]: error,
      enquiry: errorEnquiry,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    for (let field in formData) {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      message: true,
      enquiry: true,
    });

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      emailjs.sendForm('service_m4ovdyr', 'template_v5kmcpd', e.target, '5fKIGyTgFAiUTaRwL')
        .then((result) => {
          setIsLoading(false);
          setFormSent(true);
          setFormData({
            name: "",
            email: "",
            enquiry: "",
            message: "",
          });
          setErrors({});
          setTouched({});
        }, (error) => {
          setIsLoading(false);
          toast.error(t('CONTACT_FORM_ERROR_EMAILJS'));
        });
    }
  };

  return (
    <>
      <Header />
      <main className="contactFormMainContainer flexCenter maxWidth">
        <div className="contactFormInfoCntainer flexColumnCenter">
          <div>
            <h1 className="title" dangerouslySetInnerHTML={{ __html: t('CONTACT_FORM_TITLE') }}></h1>
          </div>
          <div className="contactFormInfo flexColumnCenter">
            <div className="email flex gap-3.5 items-center">
              <img src="/img/contact/emailIcon.svg" alt="" />
              <p className="text21">{t('CONTACT_FORM_EMAIL')}</p>
            </div>
            <div className="ubicacion flex gap-3.5 items-center">
              <img src="/img/contact/gpsIcon.svg" alt="" />
              <p className="text21">{t('CONTACT_FORM_LOCATION')}</p>
            </div>
            <Button
              text={t('CONTACT_FORM_SCHEDULE_MEETING')}
              link={'https://calendly.com/martin-sanchez0653/30min'}
              className={'bookingButton'}
              blank={true}
            />
          </div>
        </div>
        <div className="formMainContainer">
          <div className="flex flex-col gap-7">
            <p>{t('CONTACT_FORM_INTERESTED_IN')}</p>
            <div>
              <div className="contactFormOptions flex justify-between">
                {options.map((option) => (
                  <p
                    key={option.value}
                    className={`option flex justify-center items-center ${formData.enquiry === option.value ? "selected" : ""} ${errors.enquiry && "error"}`}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    {option.label}
                  </p>
                ))}
              </div>
              {errors.enquiry && <p className="errorInput">{errors.enquiry}</p>}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contactForm flex flex-col justify-between items-start">
            <div className="inputsMainContainer">
              <InputField
                label={t('CONTACT_FORM_NAME_LABEL')}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
              />
              <InputField
                label={t('CONTACT_FORM_EMAIL_LABEL')}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
              />
              <input type="hidden" value={formData.enquiry} name="enquiry" className="enquiry" />
              <Textarea
                label={t('CONTACT_FORM_MESSAGE_LABEL')}
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.message}
              />
            </div>
            <button
              disabled={isLoading}
              className="button flex justify-center items-center gap-2"
              type="submit"
            >
              {isLoading ? (
                <Circles
                  height={20}
                  width={20}
                  color="#fff"
                  ariaLabel="loading"
                />
              ) : (
                <>
                  <img src="/img/contact/sendFormIcon.svg" alt="" />
                  {t('CONTACT_FORM_SEND_BUTTON')}
                </>
              )}
            </button>
            <ToastContainer />
          </form>
        </div>
      </main>
      {formSent && <ConfirmationMessage />}
      <Footer />
    </>
  );
};

export default ContactForm;
