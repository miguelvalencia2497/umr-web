export const capitalize = (s: string, lowerCaseTheRest?: boolean): string => {
  if (!s) {
    return "";
  }

  return (
    s.substring(0, 1).toUpperCase() +
    `${lowerCaseTheRest ? s.substring(1).toLowerCase() : s.substring(1)}`
  );
};

export const titleize = (s: string): string => {
  if (!s) {
    return "";
  }

  return (
    s
      .replace(/[\s_-]/g, " ")
      .split(" ")
      // @ts-ignore
      .map(capitalize)
      .join(" ")
  );
};

export function sentenceize(s: string) {
  if (!s) {
    return "";
  }

  return capitalize(s.replace(/_/g, " "));
}

export function fullName({ first_name = "", last_name = "" }) {
  return `${first_name} ${last_name}`.trim();
}

export function truncate(string: string, count: number) {
  return string.substring(0, count) + "...";
}
