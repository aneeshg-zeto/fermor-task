/** Format a number in Indian grouping (e.g. 12480650 → 1,24,80,650). */
export function formatIndianNumber(value: number): string {
  const abs = Math.abs(Math.round(value));
  const str = abs.toString();
  if (str.length <= 3) return str;

  const lastThree = str.slice(-3);
  let rest = str.slice(0, -3);
  const groups: string[] = [];

  while (rest.length > 2) {
    groups.unshift(rest.slice(-2));
    rest = rest.slice(0, -2);
  }
  if (rest.length > 0) groups.unshift(rest);

  return `${groups.join(",")},${lastThree}`;
}

export function parseStatValue(raw: string): {
  prefix: string;
  suffix: string;
  numeric: number;
  decimals: number;
} {
  const match = raw.match(/^([^0-9]*)([\d,.]+)(.*)$/);
  if (!match) {
    return { prefix: "", suffix: raw, numeric: 0, decimals: 0 };
  }

  const [, prefix, numPart, suffix] = match;
  const normalized = numPart.replace(/,/g, "");
  const decimals = normalized.includes(".")
    ? normalized.split(".")[1]?.length ?? 0
    : 0;
  const numeric = parseFloat(normalized);

  return {
    prefix: prefix ?? "",
    suffix: suffix ?? "",
    numeric: Number.isFinite(numeric) ? numeric : 0,
    decimals,
  };
}
