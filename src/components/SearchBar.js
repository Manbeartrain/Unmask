import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from '@mui/styles'

export const SearchBar = ({ onClick, centered }) => {

    const classes = useStyles()

    const [searchToken, setSearchToken] = useState('')

    return (
        <div className={centered ? classes.centeredSearchbar : classes.searchbar}>
            <input placeholder="Search Token" className={centered ? classes.centeredInput : classes.input} value={searchToken} onChange={(e) => setSearchToken(e.target.value)} />
            <div className={classes.searchButton} onClick={() => onClick(searchToken)}>
                <SearchIcon className={classes.icon} />
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    searchbar: {
        marginTop: 20,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",

    },
    centeredSearchbar: {
        marginTop: 20,
        display: 'flex',
        justifyContent: ' center',
        alignItems: 'center',
        width: '80%'
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
    centeredInput: {
        borderRadius: 4,
        height: 32,
        fontSize: 16,
        color: "white",
        padding: "8px 25px",
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
})
