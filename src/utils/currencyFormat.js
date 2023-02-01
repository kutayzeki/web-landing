export default function currencyFormat(number) {
  let formattedNumber = Number.parseInt(number).toLocaleString("tr-IN");
  return formattedNumber;
}
