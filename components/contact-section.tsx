import { Clock, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { getI18n } from "@/i18n/messages";
import { site, whatsappLink } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { ContactForm } from "./contact-form";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const channels = [
  { icon: Phone, label: site.phone.display, href: site.phone.href },
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
] as const;

export async function ContactSection() {
  const { m } = await getI18n();

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <SectionHeading
          id="kontakt-title"
          title={m.contact.title}
          lead={m.contact.lead}
        />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <Image
              src="/images/shop-window.jpg"
              alt={m.contact.imageAlt}
              width={1600}
              height={900}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[16/9] w-full rounded-xl object-cover shadow-sm"
            />
            <ul className="flex flex-col gap-3">
              {channels.map(({ icon: Icon, label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center gap-4 text-xl font-semibold text-gray-800 transition-colors hover:text-brand"
                  >
                    <span className="grid size-11 place-items-center rounded-lg bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-2 text-gray-600">
              <Clock className="size-5 text-brand" aria-hidden="true" />
              {m.contact.onlineHours}
              <span className="font-semibold text-gray-800">
                {site.onlineHours}
              </span>
            </p>
            <ButtonLink
              href={whatsappLink()}
              external
              variant="whatsapp"
              className="self-start"
            >
              <WhatsAppIcon className="size-5" />
              {m.common.writeWhatsapp}
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm m={m.form} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
