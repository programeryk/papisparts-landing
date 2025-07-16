import { useState } from "react";

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setError(""); // Clear error on type
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simple validation
    if (!fields.email.trim() || !fields.message.trim()) {
      setError("Podaj e-mail i treść wiadomości.");
      return;
    }
    // Here: send mail logic goes (API, EmailJS, etc.)
    setSent(true);
    setFields({ name: "", email: "", message: "" });
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
      <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-2">Formularz kontaktowy</h3>
      <input
        className="p-3 rounded-md border border-[#e7eaeb] focus:border-[#ce160e] outline-none text-base transition-all"
        type="text"
        name="name"
        placeholder="Imię (opcjonalnie)"
        value={fields.name}
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        className="p-3 rounded-md border border-[#e7eaeb] focus:border-[#ce160e] outline-none text-base transition-all"
        type="email"
        name="email"
        placeholder="E-mail"
        value={fields.email}
        onChange={handleChange}
        autoComplete="email"
        required
      />
      <textarea
        className="p-3 rounded-md border border-[#e7eaeb] focus:border-[#ce160e] outline-none text-base min-h-[100px] transition-all"
        name="message"
        placeholder="Twoja wiadomość"
        value={fields.message}
        onChange={handleChange}
        required
      />
      {error && <div className="text-red-600 text-sm font-semibold">{error}</div>}
      <button
        type="submit"
        className="mt-2 px-6 py-3 rounded-md font-semibold bg-[#ce160e] text-white hover:bg-[#a80d0d] transition-all text-base"
      >
        Wyślij
      </button>
    </form>
  );
}
