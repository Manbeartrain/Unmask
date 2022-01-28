import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";

import TransactionsTable from "./TransactionsTable";
import { AdvancedChart } from "react-tradingview-embed";
import { useMoralis } from "react-moralis";
import {
  useTokenPrice,
  useMoralisWeb3Api,
  useNativeBalance,
  useNativeTransactions,
} from "react-moralis";

import ConstructionIcon from "@mui/icons-material/Construction";

import axios from "axios";
import InfoContainer from "./InfoContainer";
import { SearchBar } from "./SearchBar";
import { TabWidget } from "./TabWidget";
import { LoginComponent } from "./LoginComponent";
import { SearchModal } from "./SearchModal";
import { SearchComponent } from "./SearchComponent";

export default function Dashboard() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  const [searchToken, setSearchToken] = useState(null);
  const [tokenCreator, setTokenCreator] = useState("");
  const [initialSearch, setInitialSearch] = useState(true);
  const [error, setError] = useState("");

  const classes = useStyles();

  const handleSearch = (token) => {
    if (token.length < 40) {
      setError(
        "Invalid Address. Please try again using a different token address."
      );
    } else {
      setError("");
      setSearchToken(token);
      setInitialSearch(false);
    }
  };

  const handleTokenCreator = (creator) => {
    setTokenCreator(creator);
  };

  const handleModal = () => {
    setInitialSearch(!initialSearch);
  };

  return (
    <div className={classes.dashboard}>
      {!isAuthenticated ? (
        <LoginComponent />
      ) : (
        <>
          {/* <SearchModal initialSearch={initialSearch} handleModal={handleModal} onClick={handleSearch} error={error} /> */}

          {!searchToken ? <SearchComponent onClick={handleSearch} type={"Token Details"}/> : (
            <>
              <SearchBar onClick={handleSearch} />

              {!error ? null : <h2>{error}</h2>}

              <InfoContainer
                searchToken={searchToken}
                handleTokenCreator={handleTokenCreator}
              />

              <div className={classes.auxContainer}>
                <div className={classes.container}>
                  <div className={classes.graphContainer}>
                    <div className={classes.graph}>
                      {/* <AdvancedChart widgetProps={{ "theme": "dark", height: '100%' }} /> */}
                      <ConstructionIcon
                        style={{
                          color: "gray",
                          fontSize: 120,
                          marginBottom: 20,
                        }}
                      />
                      <p
                        style={{
                          fontSize: 32,
                          fontWeight: "300",
                          color: "gray",
                          letterSpacing: 8,
                        }}
                      >
                        COMING SOON
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.smallContainer}>
                  <TabWidget
                    searchToken={searchToken}
                    tokenCreator={tokenCreator}
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

const useStyles = makeStyles({
  graphContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
    width: "100%",
  },
  graph: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: "100%",
    width: "96.5%",
    background: "linear-gradient(to right bottom, #293044, #161d30)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    height: "100%",
  },
  smallContainer: {
    flex: 0.75,
    height: "100%",
  },
  dashboard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  infoBlocksContainer: {
    height: "20vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "nowrap",
    overflow: "auto",
    width: "100%",
  },
  searchbar: {
    marginTop: 20,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  input: {
    borderRadius: 4,
    height: 32,
    fontSize: 16,
    color: "white",
    padding: "8px 25px",
    marginLeft: 20,
    width: "35%",
    background: "#293044",
    border: "none",
  },
  searchButton: {
    borderRadius: 4,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    width: 32,
    padding: 8,
    marginLeft: 8,
    background: "tomato",
  },
  icon: {
    fontSize: "28px !important",
    color: "white",
  },
  auxContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
});
