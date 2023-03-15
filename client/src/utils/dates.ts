export const date = (str: string, type: "day" | "time") => {
  const date = new Date(str);

  if (type == "day") return date.toLocaleDateString();

  return date.toLocaleTimeString();
};
