import React from 'react'
import { makeStyles } from '@mui/styles'
import { Modal, Slide } from '@mui/material'
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import { SearchBar } from './SearchBar';

export const SearchModal = ({ initialSearch, handleModal, onClick, error}) => {

    const classes = useStyles()

    return (
        <Modal

            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={initialSearch}
            onClose={handleModal}
            closeAfterTransition
        >
            <Slide direction="down" in={initialSearch}>
                <div className={classes.searchModal}>
                    <TokenOutlinedIcon style={{ fontSize: 150, color: 'white', marginBottom: 16, }} />
                    <h2 className={classes.regTitle}>UNMASK.BSC</h2>
                    <h2 className={classes.subTitle}>Search Token Details</h2>
                    <p className={classes.subText}>Example: 0xb27adaffb9fea1801459a1a81b17218288c097cc </p>
                    <SearchBar centered onClick={onClick} />
                    {!error ? null : <p style={{ color: 'tomato', fontWeight: '300', fontSize: 18}}>{error}</p>}
                    <p className={classes.funText}>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                    </p>
                </div>
            </Slide>
        </Modal>
    )
}

const useStyles = makeStyles({
    searchModal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        background: "linear-gradient(to right bottom, #293044, #161d30)",
    },
    regTitle: {
        fontSize: 80,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: 16,
        color: 'white',
    },
    funText:{
        marginTop: '35px !important',
        textAlign: 'center',
        fontSize: 18,
        color: 'gray',
        fontWeight: '300',
        width: '50%',
        marginBottom: 50,
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
    }
})
