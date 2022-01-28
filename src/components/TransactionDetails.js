import React from "react";
import { makeStyles } from "@mui/styles";
import { agoTxt, toBnb, toBnbNumber, toGwei } from "../utils";

export const TransactionDetails = ({transactionDetails, isLoading}) => {
  
  const classes = useStyles();

  console.log(transactionDetails)

  return (
    <div className={classes.container}>
      <div className={classes.transactionDetailsContainer}>
        <h2 className={classes.title}>Transaction Details</h2>
        <div className={classes.divider}></div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>Transaction Hash:</p>
            <p className={classes.transactionText}>{transactionDetails.hash}</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>Status:</p>
            <p className={classes.transactionText}>{transactionDetails.receipt_status === "1" ? "Success" : "Failed"}</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>Block:</p>
            <p className={classes.transactionText}>{transactionDetails.block_number}</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>TimeStamp:</p>
            <p className={classes.transactionText}>{agoTxt(transactionDetails.block_timestamp)}</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>From:</p>
            <p className={classes.transactionText}>{transactionDetails.from_address}</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>Interacted With (To):</p>
            <p className={classes.transactionText}>{transactionDetails.to_address}</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>Value:</p>
            <p className={classes.transactionText}>{transactionDetails.value} BNB</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>Transaction Fee:</p>
            <p className={classes.transactionText}>{toBnbNumber(transactionDetails.gas_price, '18') * transactionDetails.receipt_gas_used } BNB</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>Gas Limit:</p>
            <p className={classes.transactionText}>{transactionDetails.gas}</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>Gas Used By Transaction:</p>
            <p className={classes.transactionText}>{transactionDetails.receipt_gas_used}</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>Gas Price:</p>
            <p className={classes.transactionText}>{toGwei(transactionDetails.gas_price)} - {toBnbNumber(transactionDetails.gas_price, '18')} BNB</p>
        </div>
        <div className={classes.transactionDetails}>
            <p className={classes.transactionTitle}>Nonce:</p>
            <p className={classes.transactionText}>{transactionDetails.nonce}</p>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    flex: 1,
    paddingTop: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "nowrap",
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  transactionDetailsContainer:{
      flexDirection: 'column',
      flex: 1,
      width: '97%',
  },
  transactionDetails:{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      height: 50,
      background:'#293044',
      borderBottom: '1px solid gray',
  },
  title: {
    color: "white",
    fontSize: 40,
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: 8,
  },
  divider: {
    height: 1,
    width: "100%",
    background: "gray",
    marginTop: 24,
    marginBottom: 32,
  },
  transactionTitle:{
      marginLeft: '20px !important',
      color: 'white',
      width: '20%',
      fontSize: 18,
      fontWeight: '300',
  },
  transactionText:{
      color: 'white',
      fontSize: 16,
      fontWeight: '300',

  }
});
