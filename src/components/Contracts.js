import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'

export const Contracts = () => {
    const classes = useStyles()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classes.container}>
            <CreateStealthLaunchModal isOpen={isOpen} />
            <div className={classes.contractDashboard}>
                <div className={classes.addStealthButton}></div>
                <h2 className={classes.title}>My Stealth Launches</h2>
                <div className={classes.divider}></div>
                <div className={classes.contractContainer}>
                    <div className={classes.contract}>
                    <h2 className={classes.contractSymbol}>DGI</h2>
                        <h2 className={classes.contractTitle}>DOGE INU</h2>
                        <p className={classes.contractHash}>{`${'0xb56fb909ac4122150a627fc0dcbdd36ed8cb79f63a7eb5691b8c9c151d4449c7'.substring(0,32)}...`}</p>
                    </div>
                    <div className={classes.contract}></div>
                    <div className={classes.contract}></div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    contractDashboard:{
        height: '93%',
        paddingTop: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",
        flexWrap: 'nowrap',
        width: '95%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        background: "linear-gradient(to right bottom, #293044, #161d30)",
    },
    title:{
        color: 'white',
        fontSize: 40,
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: 8,
        marginLeft: '40px !important',
    },
    divider:{
        height: 1,
        width: '100%',
        background: 'gray',
        marginTop: 24,
        marginBottom: 32,
    },
    contractContainer:{
        position: 'relative',
        flex: 1,
        width: '95%',
        justifyContent: 'space-between',
        display: 'flex',

    },
    contract: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        height: 250,
        width: 500,
        background: '#161d30',
        borderRadius: 8,
    },
    addStealthButton:{
        position: 'absolute',
        bottom: 30,
        right: 80,
        height: 60,
        width: 60,
        borderRadius: 100,
        background: 'tomato',
    },
    contractTitle:{
        color:'white',
        marginBottom: '16px !important',
        fontSize: 40,
    },
    contractSymbol: {
        color:'white',
        marginBottom: '4px !important',
        fontSize: 24,
        fontWeight: '600',
    },
    contractHash:{
        color:'white',
        fontSize: 16,
        fontWeight: '300',
        color: 'gray',
    }
})
