import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    setToast({
      show: true,
      message: "Message sent successfully!\nI will contact you soon!",
      type: "success",
    });

    reset();

    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  const onError = () => {
    setToast({
      show: true,
      message: "Please fill all required fields!",
      type: "error",
    });

    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  return (
    <>
  {/* Toast */}
  {toast.show && (
    <div
      className={`fixed top-1/2 left-1/2 z-50 px-6 py-4 rounded-2xl shadow-xl text-sm font-medium text-center whitespace-pre-line backdrop-blur-xl border
      -translate-x-1/2 -translate-y-1/2
      ${
        toast.type === "success"
          ? "bg-white/90 border-green-200 text-green-700"
          : "bg-white/90 border-red-200 text-red-700"
      }`}
    >
      {toast.message}
    </div>
  )}

  <form
    onSubmit={handleSubmit(onSubmit, onError)}
    className="w-full max-w-lg mx-auto"
  >
    {/* EMAIL */}
    <label className="block text-white font-medium mb-2">
      Vas mejl
    </label>

    <input
      type="email"
      {...register("email", { required: true })}
      placeholder="mejl@gmail.com"
      className="w-full p-3 mb-6 rounded-xl bg-white/100 border border-white/20 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
    />

    {/* MESSAGE */}
    <label className="block text-white font-medium mb-2">
      Vasa poruka
    </label>

    <textarea
      rows={4}
      {...register("message", { required: true })}
      placeholder="Napisite o vasem projektu..."
      className="w-full p-3 mb-6 rounded-xl bg-white/100 border border-white/20 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
    />

    {/* BUTTON */}
    <button
      type="submit"
      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#4f6cff] to-[#6aa9ff] text-white font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transition"
    >
      Posalji
    </button>
  </form>
</>
  );
}

export default ContactForm;