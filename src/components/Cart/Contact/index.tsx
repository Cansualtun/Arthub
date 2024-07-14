"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// Ürün tipi tanımlama
type Product = {
  id: string;
  name: string;
  collectionId: string;
  image: string;
};

const ContactForm = () => {
  const [cookieProducts, setCookieProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsFromCookie = Cookies.get("cartItems");
    if (productsFromCookie) {
      setCookieProducts(JSON.parse(productsFromCookie));
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().required("Required"),
      company: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // Cookie ürünlerini istenen formata dönüştürme
      const formattedProducts = cookieProducts.map((product) => ({
        ad: product.name,
        miktar: 1, // Ürün miktarını buradan ayarlayabilirsiniz
      }));

      const payload = {
        username: "ozkamci",
        password: "ozkamci123!!",
        data: {
          ad: values.firstName,
          soyad: values.lastName,
          firma: values.company,
          mail: values.email,
          tel: values.phone,
          mesaj: values.message,
          urunler: formattedProducts,
        },
      };

      try {
        const response = await fetch("http://send.pixem.org/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        if (response.ok) {
          toast.success("Siparişiniz iletildi! Sizinle iletişime geçilecek");

          // 3 saniye bekleyip sayfayı yenile
          setTimeout(() => {
            Cookies.remove("cartItems");
            setCookieProducts([]);
            resetForm();
            window.location.reload();
          }, 3000);
        } else {
          toast.error("Form gönderilemedi. Lütfen tekrar deneyin.");
        }
      } catch (error) {
        console.error("Error submitting form", error);
        toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 w-[400px]"
    >
      <div className="h-24 bg-primary-main rounded-md">
        <p className="text-3xl flex items-center justify-center h-full">
          İLETİŞİM BİLGİLERİ
        </p>
      </div>

      <div>
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Adınız
        </label>
        <input
          id="firstName"
          type="text"
          className={`bg-gray-50 border ${
            formik.touched.firstName && formik.errors.firstName
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="John"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Soyadınız
        </label>
        <input
          id="lastName"
          type="text"
          className={`bg-gray-50 border ${
            formik.touched.lastName && formik.errors.lastName
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="Doe"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          E-Posta Adresiniz
        </label>
        <input
          id="email"
          type="email"
          className={`bg-gray-50 border ${
            formik.touched.email && formik.errors.email
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="john.doe@example.com"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Telefon Numaranız
        </label>
        <input
          id="phone"
          type="text"
          className={`bg-gray-50 border ${
            formik.touched.phone && formik.errors.phone
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="555-555-5555"
          {...formik.getFieldProps("phone")}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="company"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Firma Adı
        </label>
        <input
          id="company"
          type="text"
          className={`bg-gray-50 border ${
            formik.touched.company && formik.errors.company
              ? "border-red-500"
              : "border-gray-300"
          } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="Company Name"
          {...formik.getFieldProps("company")}
        />
        {formik.touched.company && formik.errors.company ? (
          <div className="text-red-500 text-sm">{formik.errors.company}</div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          className={`block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${
            formik.touched.message && formik.errors.message
              ? "border-red-500"
              : "border-gray-300"
          } focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="Write your thoughts here..."
          {...formik.getFieldProps("message")}
        ></textarea>
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        ) : null}
      </div>

      <div className="flex flex-row gap-5">
        <button
          type="button"
          onClick={formik.handleReset}
          className="mt-8 focus:outline-none text-white bg-primary-main focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Temizle
        </button>
        <button
          type="submit"
          className="mt-8 focus:outline-none text-white bg-primary-main focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          disabled={formik.isSubmitting}
        >
          Gönder
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
