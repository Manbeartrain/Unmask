import React from "react";
import { makeStyles } from "@mui/styles";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import GavelIcon from '@mui/icons-material/Gavel';
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";

export default function SideNav() {
  const { logout, isAuthenticating } = useMoralis();

  const classes = useStyles();

  return (
    <div className={classes.sideNav}>
      <div className={classes.navigationContainer}>
        <Link to="/">
          <HomeIcon className={classes.icon} />
        </Link>
        <Link to="/transaction">
          <ReceiptIcon className={classes.icon} />
        </Link>
        <Link to="/contracts">
          <GavelIcon className={classes.icon} />
        </Link>
      </div>
      <button
        className={classes.logoutButton}
        onClick={() => logout()}
        disabled={isAuthenticating}
      >
        <LogoutOutlinedIcon style={{ fontSize: 32, color: "white" }} />
      </button>
    </div>
  );
}

const useStyles = makeStyles({
  sideNav: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "5vw",
    background: "#293044",
  },
  navigationContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 30,
  },
  logoutButton: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    height: 60,
    width: 60,
    background: "#293044",
    border: "none",
   
  },
  icon: {
    fontSize: "40px !important",
    color: "white",
    marginBottom: 20,
    cursor: "pointer",
    "&:hover": {
      transition: 'ease-out 50ms',
      color: 'tomato',
    },
  },
});
