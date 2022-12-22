export const formatPrice = (number) => {
  return Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "BYN",
    minimumFractionDigits: 1,
  }).format(number)
}