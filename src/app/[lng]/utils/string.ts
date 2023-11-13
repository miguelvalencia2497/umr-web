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
