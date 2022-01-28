import React from 'react'
import { makeStyles } from '@mui/styles'
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import { SearchBar } from './SearchBar';
import ReceiptIcon from "@mui/icons-material/Receipt";

export const SearchComponent = ({onClick, type, icon}) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            {icon !== "transaction" ? 
            <TokenOutlinedIcon style={{ fontSize: 150, color: 'white', marginBottom: 16,}} />
            : <ReceiptIcon style={{fontSize: 150, color: 'white', marginBottom: 16,}} />
    }   
            <h2 className={classes.title}>Unmask.BSC </h2>
            <h2 className={classes.subTitle}>Search {type} </h2>
            <p className={classes.subText}>Example: 0xb56fb909ac4122150a627fc0dcbdd36ed8cb79f63a7eb5691b8c9c151d4449c7 </p>
            <SearchBar centered onClick={onClick}/>
            <p className={classes.funText}>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </p>
        </div>
    )
}

const useStyles = makeStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 72,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: 16,
        color: 'white',
    },
    subTitle:{
        fontSize: 24,
        fontWeight: '300',
        color: 'white',
    },
    subText:{
        color: 'gray',
        fontWeight: '300',
        marginTop: '15px !important',
    },
    funText:{
        marginTop: '35px !important',
        textAlign: 'center',
        fontSize: 18,
        color: 'gray',
        fontWeight: '300',
        width: '50%',
        marginBottom: '50px !important',
    }
})
