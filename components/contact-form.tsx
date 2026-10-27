"use client";

import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { format } from "@/i18n/format";
import type { Messages } from "@/i18n/messages";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

type Fields = { email: string; title: string; message: string };
type ErrorKey = keyof Messages["form"]["errors"];
type FieldErrors = Partial<Record<"email" | "message", ErrorKey>>;
type Status = "idle" | "sending" | "sent" | "error";

const emptyFields: Fields = { email: "", title: "", message: "" };

function validate({ email, message }: Fields): FieldErrors {
  const errors: FieldErrors = {};
  if (!email.trim()) errors.email = "emailRequired";
  else if (!EMAIL_PATTERN.test(email.trim())) errors.email = "emailInvalid";

  if (!message.trim()) errors.message = "messageRequired";
  else if (message.trim().length < MIN_MESSAGE_LENGTH)
    errors.message = "messageTooShort";
  return errors;
}

const inputClass =
  "w-full rounded-lg border bg-white p-3 text-base outline-none transition-colors placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/15";

export function ContactForm({ m }: { m: Messages["form"] }) {
  const id = useId();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState<ErrorKey>("generic");

  const errorText = (key: ErrorKey) =>
    format(m.errors[key], { min: MIN_MESSAGE_LENGTH });

  function update(name: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
    if (name !== "title" && errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (new FormData(form).get("_gotcha")) {
      setStatus("sent");
      return;
    }

    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS is not configured: missing NEXT_PUBLIC_EMAILJS_* env vars",
      );
      setSubmitError("unavailable");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const { send } = await import("@emailjs/browser");
      await send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          email: fields.email.trim(),
          title: fields.title.trim(),
          message: fields.message.trim(),
        },
        {
          publicKey: PUBLIC_KEY,
          blockHeadless: true,
          limitRate: { id: "contact-form", throttle: 10_000 },
        },
      );
      setFields(emptyFields);
      setStatus("sent");
    } catch (error) {
      const rateLimited =
        error instanceof Object && "status" in error && error.status === 429;
      setSubmitError(rateLimited ? "rateLimited" : "generic");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-xl border border-line bg-surface p-10 text-center"
      >
        <CircleCheck className="size-12 text-brand" aria-hidden="true" />
        <p className="text-lg font-bold text-ink">{m.sentTitle}</p>
        <p className="text-gray-600">{m.sentText}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand underline-offset-4 hover:underline"
        >
          {m.sendAnother}
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={`${id}-title`}
      className="relative flex w-full flex-col gap-5 rounded-xl border border-line bg-surface p-6 sm:p-8"
    >
      <h3 id={`${id}-title`} className="text-2xl font-extrabold text-ink">
        {m.title}
      </h3>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`${id}-email`}
          className="text-sm font-semibold text-gray-800"
        >
          {m.email}
        </label>
        <input
          id={`${id}-email`}
          type="email"
          name="email"
          autoComplete="email"
          placeholder={m.emailPlaceholder}
          value={fields.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${id}-email-error` : undefined}
          className={`${inputClass} ${errors.email ? "border-red-500" : "border-line"}`}
        />
        {errors.email && (
          <p id={`${id}-email-error`} className="text-sm text-red-600">
            {errorText(errors.email)}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`${id}-title-input`}
          className="text-sm font-semibold text-gray-800"
        >
          {m.subject}{" "}
          <span className="font-normal text-gray-500">{m.optional}</span>
        </label>
        <input
          id={`${id}-title-input`}
          type="text"
          name="title"
          autoComplete="off"
          placeholder={m.subjectPlaceholder}
          value={fields.title}
          onChange={(event) => update("title", event.target.value)}
          className={`${inputClass} border-line`}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`${id}-message`}
          className="text-sm font-semibold text-gray-800"
        >
          {m.message}
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          placeholder={m.messagePlaceholder}
          value={fields.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={`${inputClass} resize-y ${errors.message ? "border-red-500" : "border-line"}`}
        />
        {errors.message && (
          <p id={`${id}-message-error`} className="text-sm text-red-600">
            {errorText(errors.message)}
          </p>
        )}
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor={`${id}-gotcha`}>{m.honeypot}</label>
        <input
          id={`${id}-gotcha`}
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-700"
        >
          {errorText(submitError)}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-base font-bold text-white transition-colors hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70"
      >
        {sending ? (
          <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-5" aria-hidden="true" />
        )}
        {sending ? m.sending : m.send}
      </button>
    </form>
  );
}
