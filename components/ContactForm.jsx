import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [fields, setFields] = useState({
    email: "",
    title: "", // Subject/title for auto-reply
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    // Clear specific field error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  }

  function validateForm() {
    const newErrors = {};
    
    if (!fields.email.trim()) {
      newErrors.email = "E-mail jest wymagany";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = "Podaj poprawny adres e-mail";
    }
    
    if (!fields.message.trim()) {
      newErrors.message = "Wiadomość jest wymagana";
    } else if (fields.message.trim().length < 10) {
      newErrors.message = "Wiadomość musi mieć co najmniej 10 znaków";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID, //template id
        {
          email: fields.email,
          title: fields.title,
          message: fields.message,
        },
        PUBLIC_KEY //public key
      );
      setSent(true);
      setFields({ email: "", title: "", message: "" });
      setErrors({});
    } catch (err) {
      setErrors({ submit: "Coś poszło nie tak. Spróbuj ponownie później." });
    }
    setLoading(false);
  }

  if (sent)
    return (
      <div className="bg-white rounded-xl shadow border border-[#e7eaeb] p-6 text-center text-[#ce160e] font-semibold transition-all">
        Dziękujemy za wiadomość! Odezwiemy się wkrótce.
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow border border-[#e7eaeb] p-6 w-full max-w-md mx-auto flex flex-col gap-5"
      style={{ minWidth: 320 }}
    >
      <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-2">
        Formularz kontaktowy
      </h3>
      <div>
        <input
          className={`p-3 rounded-md border outline-none text-base transition-all w-full ${
            errors.email 
              ? "border-red-500 focus:border-red-500" 
              : "border-[#e7eaeb] focus:border-[#ce160e]"
          }`}
          type="email"
          name="email"
          placeholder="E-mail"
          value={fields.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
        {errors.email && (
          <div className="text-red-600 text-sm mt-1">{errors.email}</div>
        )}
      </div>
      <div>
        <input
          className="p-3 rounded-md border border-[#e7eaeb] focus:border-[#ce160e] outline-none text-base transition-all w-full"
          type="text"
          name="title"
          placeholder="Temat wiadomości (opcjonalnie)"
          value={fields.title}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div>
        <textarea
          className={`p-3 rounded-md border outline-none text-base min-h-[100px] transition-all w-full ${
            errors.message 
              ? "border-red-500 focus:border-red-500" 
              : "border-[#e7eaeb] focus:border-[#ce160e]"
          }`}
          name="message"
          placeholder="Twoja wiadomość (minimum 10 znaków)"
          value={fields.message}
          onChange={handleChange}
          required
        />
        {errors.message && (
          <div className="text-red-600 text-sm mt-1">{errors.message}</div>
        )}
      </div>
      {errors.submit && (
        <div className="text-red-600 text-sm font-semibold bg-red-50 p-3 rounded-md">
          {errors.submit}
        </div>
      )}
      <button
        type="submit"
        className="mt-2 px-6 py-3 rounded-md font-semibold bg-[#ce160e] text-white hover:bg-[#a80d0d] transition-all text-base"
        disabled={loading}
      >
        {loading ? "Wysyłanie..." : "Wyślij"}
      </button>
    </form>
  );
}
