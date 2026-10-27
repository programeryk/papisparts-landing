import type { Locale } from "./config";

type Values = Record<string, string | number>;
type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & {
  other: string;
};

export function format(template: string, values: Values) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export function plural(
  locale: Locale,
  count: number,
  forms: PluralForms,
  values: Values = {},
) {
  const rule = new Intl.PluralRules(locale).select(count);
  return format(forms[rule] ?? forms.other, { ...values, count });
}

export function formatDecimal(locale: Locale, value: number) {
  return new Intl.NumberFormat(locale, { minimumFractionDigits: 1 }).format(
    value,
  );
}
