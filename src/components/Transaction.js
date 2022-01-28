import React, { useMemo, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { TransactionDetails } from "./TransactionDetails";
import { SearchComponent } from "./SearchComponent";
import { useMoralisWeb3Api } from "react-moralis";

export const Transaction = () => {
  const classes = useStyles();

  const location = useLocation();
  const refHash = location.state?.hash;

  const [transactionDetails, setTransactionDetails] = useState([]);
  const [txnHash, setTxnHash] = useState(!refHash ? "" : refHash);

  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)

  const Web3Api = useMoralisWeb3Api();

  const fetchTransactionDetails = async () => {
    await Web3Api.native
      .getTransaction({
        chain: "bsc",
        transaction_hash: txnHash,
      })
      .then((res) => setTransactionDetails(res))
      .catch((error) => setError(true))
  };

  const handleTransactionSearch = (txnHash) => {
    setTxnHash(
      txnHash
    );
  };

  const data = useMemo(() => {
    if (txnHash) {
      fetchTransactionDetails().finally(() => {
          setError(false)
          setIsLoading(false)
      })
    } else {
      return [];
    }
  }, [txnHash]);

  if (!refHash) {
    return (
      <div className={classes.dashboard}>
        {!txnHash ? (
          <SearchComponent onClick={handleTransactionSearch} type={"Transaction Details"} icon={"transaction"} />
        ) : (
          <>
            <SearchBar onClick={handleTransactionSearch} />
            <TransactionDetails transactionDetails={transactionDetails} isLoading={isLoading} />
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className={classes.dashboard}>
        <SearchBar onClick={handleTransactionSearch} />
        <TransactionDetails transactionDetails={transactionDetails} isLoading={isLoading} />
      </div>
    );
  }
};

const useStyles = makeStyles({
  dashboard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
