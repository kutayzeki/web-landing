export default function currencyFormat(number) {
  let formattedNumber = Number.parseInt(number).toLocaleString("en-IN");
  return formattedNumber;
}
