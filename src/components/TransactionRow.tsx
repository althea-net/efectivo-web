import React from "react";
import { ListGroupItem } from "reactstrap";
import { withI18n } from "react-i18next";
import { convertToCOP, addressToEmoji, formatToDollars } from "../utils";
import { distanceInWordsStrict } from "date-fns";
import i18n from "i18next";
import es from "date-fns/locale/es";
import en from "date-fns/locale/en";
import { Transaction } from "../types";
import { BigNumber } from "ethers/utils";
import { dollarSign } from "../utils/icons";

interface Props {
  tx: Transaction;
  t: Function;
  onClick: () => void;
  address: string;
  rate?: BigNumber;
}

function TransactionRow(props: Props) {
  let { t, tx, address, rate } = props;
  return (
    <ListGroupItem
      style={{
        padding: "0.5rem 0",
        display: "flex",
        justifyContent: "space-between"
      }}
      onClick={() => props.onClick()}
    >
      <small>
        {tx.to.toLowerCase() === address.toLowerCase() ? (
          <>
            {t("received", {
              amount: dollarSign() + formatToDollars(tx.value) + " "
            })}
            {i18n.language === "es" && rate
              ? " ($" + convertToCOP(tx.value, rate) + " COP)"
              : ""}
            <span style={{ whiteSpace: "nowrap" }}>
              {" " + t("from")} {addressToEmoji(tx.from)}
            </span>
          </>
        ) : (
          <>
            {t("sent", {
              amount: dollarSign() + formatToDollars(tx.value) + " "
            })}
            {i18n.language === "es" && rate
              ? " ($" + convertToCOP(tx.value, rate) + " COP)"
              : ""}
            <span style={{ whiteSpace: "nowrap" }}>
              {" " + t("to")} {addressToEmoji(tx.to)}
            </span>
          </>
        )}
      </small>
      <small>
        {distanceInWordsStrict(new Date(), new Date(tx.timeStamp * 1000), {
          locale: i18n.language === "es" ? es : en,
          addSuffix: true
        })}
      </small>
    </ListGroupItem>
  );
}

export default withI18n()(TransactionRow);
