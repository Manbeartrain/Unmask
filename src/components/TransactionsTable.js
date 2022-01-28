import React, { useState, useEffect } from "react";
import { makeStyles, StylesContext } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { useMoralisWeb3Api } from "react-moralis"
import Loader from "react-loader-spinner";
import { agoTxt, getEllipsisTxt } from "../utils";
import { Link } from "react-router-dom";

export default function TransactionsTable({ searchToken }) {

  const classes = useStyles();

  const [transactions, setTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const Web3Api = useMoralisWeb3Api()

  const fetchTransactions = async () => {
    await Web3Api.account.getTransactions({
      chain: 'bsc',
      address: searchToken,
      order: 'desc',
      limit: 25,
    })
      .then((res) => setTransactions(res.result))
  }

  const checkAction = (transactions) => {
    let transactionsCopy = []
  }

  useEffect(() => {
    setIsLoading(true)
    fetchTransactions()

      .finally(() => setIsLoading(false))
  }, [searchToken])

  return (
    <div className={classes.container}>
      {isLoading ?
        <Loader
          style={{ position: 'absolute', top: '40%' }}
          type="BallTriangle"
          color="tomato"
          height={80}
          width={80}
        /> :
        <TableContainer style={{ borderRadius: 4, }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ backgroundColor: "#293044" }} className={classes.tableTitle}>Action</TableCell>
                {/* <TableCell style={{ backgroundColor: "#293044" }} className={classes.tableTitle}># of Tokens</TableCell>
                <TableCell style={{ backgroundColor: "#293044" }} className={classes.tableTitle}>BNB Value</TableCell> */}
                <TableCell style={{ backgroundColor: "#293044" }} className={classes.tableTitle}>Value</TableCell>
                <TableCell style={{ backgroundColor: "#293044" }} className={classes.tableTitle}>TxHash</TableCell>
                <TableCell style={{ backgroundColor: "#293044" }} className={classes.tableTitle}>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions && transactions.map((transaction, index) => {
                return (
                  // console.log('t', transaction)
                  <TableRow key={index.toString()} sx={{ "&:last-child td, &: last-child th": { border: 0 }, backgroundColor: "#293044" }} >
                    <TableCell className={classes.tableText}>Sell</TableCell>
                    {/* <TableCell className={classes.tableText}></TableCell> */}
                    <TableCell className={classes.tableText}>{transaction.value} BNB</TableCell>
                    <TableCell className={classes.tableText}><Link className={classes.link} to="/transaction" state={{hash: transaction.hash}}>{getEllipsisTxt(transaction.hash)}</Link></TableCell>
                    <TableCell className={classes.tableText}>{agoTxt(transaction.block_timestamp)}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',

    borderRadius: 4,
    height: "100%",
    width: "100%",
    background: "linear-gradient(to right bottom, #293044, #161d30)",
  },
  tableText: {
    backgroundColor: "#293044",
    color: "lightgray !important",
    fontWeight: "300 !important",
    fontSize: "12px !important",
  },
  tableTitle: {
    backgroundColor: "#293044 !important",
    fontWeight: '600 !important',
    fontSize: "16px !important",
    color: "white !important",
  },
  link:{
    textDecoration: 'none',
    color: 'white',
  }
});
