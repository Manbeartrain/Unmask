import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from '@mui/styles'
import PropTypes from "prop-types";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TransactionsTable from "./TransactionsTable";
import DevTransactionsTable from './DevTransactionsTable';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ marginTop: 3 }}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export const TabWidget = ({searchToken, tokenCreator}) => {

    const classes = useStyles()

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTab = (event, selectedTab) => {
        setSelectedTab(selectedTab);
    };

    return (
        <>
            <Tabs value={selectedTab} onChange={handleTab}>
                <Tab className={classes.tab} label="Transactions " value={0} />
                <Tab className={classes.tab} label="Developer Transactions" value={1} />
            </Tabs>
            <TabPanel value={selectedTab} index={0}>
                <div className={classes.devTransactions}>
                    <TransactionsTable searchToken={searchToken} />
                </div>
            </TabPanel>
            <TabPanel value={selectedTab} index={1}>
                <div className={classes.transactions}>
                    <DevTransactionsTable searchToken={searchToken} tokenCreator={tokenCreator} />
                </div>
            </TabPanel>
        </>
    )
}

const useStyles = makeStyles({
    tab: {
        color: 'white !important',
        fontWeight: '700 !important'
    },
    transactions: {
        height: 575,
        width: '97%',
    },
    devTransactions: {
        height: 575,
        width: '97%',
    },
})
