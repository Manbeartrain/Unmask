import {DateTime} from "luxon"

export const n6 = new Intl.NumberFormat("en-us", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 18,
});

export const getEllipsisTxt = (str, n = 6) => {
    return `${str.substring(0, n)}...${str.substring(
        str.length - n,
        str.length
    )}`;
}

export const tokenValueTxt = (value, decimals, symbol) =>
    decimals ? `${n6.format(value / Math.pow(10, decimals))} ${symbol}` : `${value}`;

export const toBnb = (wei, decimal, symbol) => tokenValueTxt(wei, decimal, symbol ? symbol : "");

export const toBnbNumber = (wei, decimal) => n6.format(wei / Math.pow(10, decimal))

export const agoTxt = (unixTimeStampMili) => DateTime.fromISO(unixTimeStampMili).toRelative();

export const toGwei = (wei) => {
    return `${Math.round(wei /1e9)} gwei`;
}