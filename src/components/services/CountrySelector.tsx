import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";
import { COUNTRIES, COUNTRY_CODES, getStoredCountry, isCountryCode, storeCountry, type CountryCode } from "@/lib/services/countries";

export function CountrySelector({ compact = false }: { compact?: boolean }) {
  const params = useParams({ strict: false }) as { country?: string };
  const [stored, setStored] = useState<CountryCode | null>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => { setStored(getStoredCountry()?.code ?? null); }, []);
  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", esc); };
  }, [open]);

  const current: CountryCode = isCountryCode(params.country) ? params.country : (stored ?? "in");
  const c = COUNTRIES[current];

  function choose(code: CountryCode) {
    storeCountry(code, true);
    setStored(code);
    setOpen(false);
    void navigate({ to: "/$country/services", params: { country: code } });
  }

  return (
    <div ref={ref} className={`nh-cs ${compact ? "nh-cs--compact" : ""}`}>
      <button type="button" className="nh-cs__btn" aria-haspopup="listbox" aria-expanded={open} aria-label={`Country: ${c.name}. Change country`} onClick={() => setOpen((o) => !o)}>
        <span aria-hidden>{c.flag}</span>
        <span className="nh-cs__name">{compact ? c.name : c.code.toUpperCase()}</span>
        <span aria-hidden className="nh-cs__caret">▾</span>
      </button>
      {open && (
        <ul role="listbox" aria-label="Choose your country" className="nh-cs__list">
          {COUNTRY_CODES.map((code) => (
            <li key={code}>
              <button type="button" role="option" aria-selected={code === current} className="nh-cs__opt" onClick={() => choose(code)}>
                <span aria-hidden>{COUNTRIES[code].flag}</span> {COUNTRIES[code].name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
