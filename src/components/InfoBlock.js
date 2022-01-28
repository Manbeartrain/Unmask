import React from "react";
import { makeStyles } from "@mui/styles";
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import CallMissedOutgoingOutlinedIcon from "@mui/icons-material/CallMissedOutgoingOutlined";
import LoopIcon from "@mui/icons-material/Loop";
import Loader from "react-loader-spinner";

export default function InfoBlock({ title, subTitle, subText, secondaryTitle, secondarySubText, large, icon, isLoading }) {
  const classes = useStyles();

  const renderIcon = (icon) => {
    switch (icon) {
      case "token":
        return <TokenOutlinedIcon className={classes.icon} />;
      case "market":
        return <LocalGroceryStoreOutlinedIcon className={classes.icon} />;
      case "price":
        return <CallMissedOutgoingOutlinedIcon className={classes.icon} />;
      case "supply":
        return <LoopIcon className={classes.icon} />;
      default:
        break;
    }
  };

  if (!large) {
    return (
      <div className={classes.infoBlock}>
        {isLoading ? <Loader
          type="BallTriangle"
          color="tomato"
          height={50}
          width={50}
        /> :
          <>
            <div className={classes.logoContainer}>{renderIcon(icon)}</div>
            <div className={classes.infoContainer}>
              <p className={classes.title}>{title}{subTitle ? <span style={{ fontSize: 14, marginLeft: 8, }}>@ {subTitle}</span> : null}</p>
              <p className={classes.subText}>{subText}</p>
            </div>
          </>
        }
      </div>
    );
  } else {
    return (
      <div className={classes.largeInfoBlock}>
        {isLoading ? <Loader
          type="BallTriangle"
          color="tomato"
          height={50}
          width={50}
        /> :
          <>
            <div className={classes.logoContainer}>{renderIcon(icon)}</div>
            <div className={classes.infoContainer}>
              <p className={classes.smTitle}>{title}</p>
              <p className={classes.smSubText}>{subText}</p>
              <div style={{ height: 12, width: '100%' }}></div>
              <p className={classes.smTitle}>{secondaryTitle}</p>
              <p className={classes.smSubText}>{secondarySubText}</p>
            </div>
          </>
        }
      </div>
    );
  }
}

const useStyles = makeStyles({
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flex: 0.5,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100%",
    flex: 1,
  },
  infoBlock: {
    cursor: "pointer",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 4,
    height: "16vh",
    flex: 1.25,
    margin: "0 20px",
    background: "linear-gradient(to right bottom, #293044, #161d30)",
  },
  largeInfoBlock: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    height: "16vh",
    flex: 1.25,
    margin: "0 20px",
    background: "linear-gradient(to right bottom, #293044, #161d30)",
  },
  icon: {
    color: "silver",
    fontSize: "60px !important",
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 23,
    fontWeight: "500",
    color: "silver",
  },
  smTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'silver',
  },
  subText: {
    fontSize: 14,
    fontWeight: "600",
    color: "gray",
  },
  smSubText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'gray',
  }
});
