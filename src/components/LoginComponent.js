import React from 'react'
import { useMoralis } from "react-moralis";
import { makeStyles } from "@mui/styles"
import MetaMaskLogo from '../assets/metamask.png'
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import Loader from "react-loader-spinner";

export const LoginComponent = () => {

    const classes = useStyles()

    const { authenticate, isAuthenticated, user, logout, isAuthenticating } = useMoralis();

    return (
        <div className={classes.container}>
            {isAuthenticating ?
                <Loader
                    style={{ position: 'absolute', top: '40%' }}
                    type="BallTriangle"
                    color="tomato"
                    height={80}
                    width={80}
                /> :
                <div className={classes.userLoginContainer}>
                    <TokenOutlinedIcon style={{ fontSize: 150, color: 'white', marginBottom: 16, }} />
                    <h2 className={classes.regTitle}>UNMASK</h2>
                    <div style={{ height: 48 }}>UNMASK.BSC</div>
                    <input className={classes.regInput} placeholder="Email" />
                    <input className={classes.regInput} placeholder="Passworld" />
                    <button className={classes.regSubmit}>LOGIN</button>
                    <div style={{ height: 24 }}></div>
                    <p style={{ fontSize: 16, color: 'gray' }}>or</p>
                    <div style={{ height: 24 }}></div>
                    <button className={classes.regMetaLogin} onClick={() => authenticate({ signingMessage: "Hello World!" })}>
                        <img className={classes.logo} src={MetaMaskLogo} alt="Metamask Logo" />
                        <p>Login using Metamask</p>
                    </button>
                </div>
            }
            {/* <button onClick={() => authenticate({ signingMessage: "Hello World!" })}>Authenticate</button> */}
        </div>
    )
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    userLoginContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    regTitle: {
        fontSize: 72,
        fontWeight: '900',
        textTransform: 'uppercase',
        letterSpacing: 16,
        color: 'white',
    },
    regInput: {
        marginBottom: 16,
        padding: 12,
        fontSize: 16,
        width: 500,
    },
    regSubmit: {
        padding: 15,
        width: 530,
        border: 'none',
        background: '#293044',
        fontSize: 16,
        fontWeight: '900',
        letterSpacing: 12,
        color: 'white',
    },
    regMetaLogin: {
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 530,
        border: 'none',
        background: 'tomato',
        fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },
    logo: {
        position: 'absolute',
        left: 40,
        height: 32,
    }
})
