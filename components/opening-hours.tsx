import { getI18n } from "@/i18n/messages";
import { site } from "@/lib/site";

const formatTime = (time: string) => time.replace(/^0/, "");

export async function OpeningHours({ className = "" }: { className?: string }) {
  const { m } = await getI18n();

  return (
    <dl
      className={`grid grid-cols-[auto_auto] justify-start gap-x-4 gap-y-1 ${className}`}
    >
      {site.openingHours.map(({ days, opens, closes }) => (
        <div key={days} className="contents">
          <dt>{m.hours[days]}</dt>
          <dd className="font-semibold text-gray-800">
            {formatTime(opens)}–{formatTime(closes)}
          </dd>
        </div>
      ))}
      <dt>{m.hours.sunday}</dt>
      <dd className="font-semibold text-gray-800">{m.hours.closed}</dd>
    </dl>
  );
}
