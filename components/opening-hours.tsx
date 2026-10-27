import { site } from "@/lib/site";

const formatTime = (time: string) => time.replace(/^0/, "");

export function OpeningHours({ className = "" }: { className?: string }) {
  return (
    <dl
      className={`grid grid-cols-[auto_auto] justify-start gap-x-4 gap-y-1 ${className}`}
    >
      {site.openingHours.map(({ days, opens, closes }) => (
        <div key={days} className="contents">
          <dt>{days}</dt>
          <dd className="font-semibold text-gray-800">
            {formatTime(opens)}–{formatTime(closes)}
          </dd>
        </div>
      ))}
      <dt>Niedziela</dt>
      <dd className="font-semibold text-gray-800">nieczynne</dd>
    </dl>
  );
}
