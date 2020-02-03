import { utils } from "ethers";
import { dollarSign } from "./utils/icons";

export interface Transaction {
  nonce: number;
  timeStamp: number;
  value: utils.BigNumber;
  hash: string;
  to: string;
  from: string;
  txreceipt_status: boolean;
}

export enum Currency {
  XDAI,
  ETH,
  DAI,
  COP
}

export function currencyToSymbol(currency: Currency) {
  switch (currency) {
    case Currency.DAI:
      return dollarSign();
      break;
    case Currency.ETH:
      return "ETH";
      break;
    case Currency.XDAI:
      return dollarSign();
      break;
    case Currency.COP:
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
    case Currency.COP:
      return "COP";
      break;
  }
}
