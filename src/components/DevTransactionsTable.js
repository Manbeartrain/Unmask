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

export default function DevTransactionsTable({ searchToken, tokenCreator }) {

  const classes = useStyles();

  const [transactions, setTransactions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const Web3Api = useMoralisWeb3Api()

  const fetchTransactions = async () => {
    const result = await Web3Api.account.getTransactions({
      chain: 'bsc',
      address: tokenCreator,
      order: 'desc',
      limit: 50,
    })
    setTransactions(result.result)
  }

  const fetchTokenTransfers = async () => {
    const result = await Web3Api.account.getTokenTransfers({
      chain: 'bsc',
      address: tokenCreator,
      limit: 50,
    })

    console.log('transfers', result)
  }

  useEffect(() => {
    console.log(tokenCreator)
    setIsLoading(true)
    fetchTokenTransfers()
    fetchTransactions().finally(() => setIsLoading(false))
  }, [searchToken, tokenCreator])

  return (
    <div className={classes.container}>
      {isLoading  ?
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
                <TableCell style={{ backgroundColor: "#293044" }} className={classes.tableTitle}>TxHash</TableCell>
                <TableCell style={{ backgroundColor: "#293044" }} className={classes.tableTitle}>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions && transactions.map((transaction, index) => {
                return (
                  // console.log(transaction)
                  <TableRow key={index.toString()} sx={{ "&:last-child td, &: last-child th": { border: 0 }, backgroundColor: "#293044" }}>
                    <TableCell className={classes.tableText}>Sell</TableCell>
                    {/* <TableCell className={classes.tableText}></TableCell> */}
                    {/* <TableCell className={classes.tableText}></TableCell> */}
                    <TableCell className={classes.tableText}>{(transaction.hash).substring(0, 32)}...</TableCell>
                    <TableCell className={classes.tableText}>{transaction.block_timestamp}</TableCell>
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
});
