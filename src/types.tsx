export interface Transaction {
  transactionIndex?: String;
  timestamp?: String;
  value?: String;
  hash?: String;
  to?: String;
  txreceipt_status?: String;
}

export enum Currency {
  XDAI,
  ETH,
  DAI
}

export function currencyToSymbol(currency: Currency) {
  switch (currency) {
    case Currency.DAI:
      return "$";
      break;
    case Currency.ETH:
      return "ETH";
      break;
    case Currency.XDAI:
      return "$";
      break;
  }
}

export function currencyToName(currency: Currency) {
  switch (currency) {
    case Currency.DAI:
      return "DAI";
      break;
    case Currency.ETH:
      return "Eth";
      break;
    case Currency.XDAI:
      return "xDAI";
      break;
  }
}
