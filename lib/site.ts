const phone = "+48888399666";
const address = {
  street: "11 Pułku Piechoty 20a",
  postalCode: "78-500",
  city: "Drawsko Pomorskie",
};
const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`;

export const site = {
  name: "Papis Parts",
  url: "https://www.papisparts.com",
  email: "papisparts@gmail.com",
  phone: {
    display: "888 399 666",
    href: `tel:${phone}`,
    e164: phone,
  },
  address,
  fullAddress,
  openingHours: [
    {
      days: "weekdays",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:30",
    },
    {
      days: "saturday",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  onlineHours: "24/7",
  google: {
    name: "Auto Części Drawsko Pomorskie ∴ PapisParts",
    profile: "https://share.google/MKinuU64jeFVunsAD",
    rating: { value: 4.7, count: 15 },
  },
  maps: {
    link: `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`,
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2298.2209148758677!2d15.81248121606998!3d53.53288205088895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700e3ec24f5c9e1%3A0xc23e4dc3328b1b0b!2s11%20Pu%C5%82ku%20Piechoty%2020A%2C%2078-500%20Drawsko%20Pomorskie!5e0!3m2!1spl!2spl!4v1718302670227!5m2!1spl!2spl",
  },
} as const;

export const navigation = [
  { id: "uslugi", label: "services" },
  { id: "mechanik", label: "mechanic" },
  { id: "dlaczego-my", label: "whyUs" },
  { id: "lokalizacja", label: "location" },
  { id: "kontakt", label: "contact" },
  { id: "opinie", label: "reviews" },
] as const;

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${phone.slice(1)}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
