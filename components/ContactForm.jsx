import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    title: "",      // Subject/title for auto-reply
    message: "",
  });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setError(""); // Clear error on type
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!fields.email.trim() || !fields.message.trim()) {
      setError("Podaj e-mail i treść wiadomości.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        "", //service id
        "template_1fcg4ck", //template id
        {
          email: fields.email,
          title: fields.title,
          message: fields.message,
        },
        "YOUR_PUBLIC_KEY" //public key
      );
      setSent(true);
      setFields({ email: "", title: "", message: "" });
    } catch (err) {
      setError("Coś poszło nie tak. Spróbuj ponownie później.");
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
      <input
        className="p-3 rounded-md border border-[#e7eaeb] focus:border-[#ce160e] outline-none text-base transition-all"
        type="text"
        name="title"
        placeholder="Temat wiadomości"
        value={fields.title}
        onChange={handleChange}
        autoComplete="off"
      />
      <textarea
        className="p-3 rounded-md border border-[#e7eaeb] focus:border-[#ce160e] outline-none text-base min-h-[100px] transition-all"
        name="message"
        placeholder="Twoja wiadomość"
        value={fields.message}
        onChange={handleChange}
        required
      />
      {error && (
        <div className="text-red-600 text-sm font-semibold">{error}</div>
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
