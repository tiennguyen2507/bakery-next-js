export const formatMoney = (money: number): string => {
  return `${String(money).replace(/(.)(?=(\d{3})+$)/g, "$1,")}VND`;
};
