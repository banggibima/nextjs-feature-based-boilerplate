export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
  }).format(new Date(date));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("id-ID").format(value);
}
