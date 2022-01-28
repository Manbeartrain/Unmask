import React, { useEffect, useState } from 'react'
import { makeStyles } from "@mui/styles"
import InfoBlock from './InfoBlock';

import { useMoralisWeb3Api } from "react-moralis"
import axios from 'axios';
import { getEllipsisTxt, toBnb } from '../utils';

function InfoContainer({ searchToken, handleTokenCreator }) {

    const [tokenDetails, setTokenDetails] = useState({})
    const [tokenPrice, setTokenPrice] = useState({})
    const [totalSupply, setTotalSupply] = useState(null)
    const [tokenCreator, setTokenCreator] = useState('')
    const [circulatingSupply, setCirculatingSupply] = useState(null)

    const [isLoading, setIsLoading] = useState(false)

    const Web3Api = useMoralisWeb3Api()

    const fetchTokenDetails = async () => {
        const result = await Web3Api.token.getTokenMetadata({
            chain: 'bsc',
            addresses: searchToken
        })
        setTokenDetails(result[0])
        console.log('TD', tokenDetails)
    }

    const fetchTokenPrice = async () => {
        const result = await Web3Api.token.getTokenPrice({
            chain: 'bsc',
            address: searchToken
        })
        setTokenPrice(result)
    }

    const fetchTotalSupply = async () => {
        await axios.get(`https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=${searchToken}&apikey=M4G9I44HH8VY56J683E4BD1NU9YN63XFQD`)
            .then(res => setTotalSupply(res.data.result))
            .catch(err => console.log(err))
    }

    const fetchCirculatingSupply = async () => {
        await axios.get(`https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=${searchToken}&apikey=M4G9I44HH8VY56J683E4BD1NU9YN63XFQD`)
            .then(res => setCirculatingSupply(res.data.result))
            .catch(err => console.log(err))
    }

    const fetchTokenCreator = async () => {
        await axios.get(`http://localhost:5000/api/v1/tokens/${searchToken}`)
            .then(res => {
                setTokenCreator(res.data.creator)
                handleTokenCreator(res.data.creator)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        setIsLoading(true)
        fetchTotalSupply()
        fetchCirculatingSupply()
        fetchTokenDetails().catch(err => console.log(err))
        fetchTokenPrice().catch(err => console.log(err))
        fetchTokenCreator().finally(() => setIsLoading(false))


        console.log('TP', tokenPrice)
        console.log('TS', totalSupply)
        console.log('CS', circulatingSupply)
    }, [searchToken])

    const convertSupply = (value, decimals) => {

        let covertedPrice = (value / (10 ** decimals)).toFixed(2)
        return covertedPrice
    }

    const convertPirce = (value,) => {
        let covertedPrice = (value / (10 ** 18)).toFixed(6)
        return covertedPrice
    }

    const getMarketCap = (totalSupply, price) => {
        let marketCap = toBnb((totalSupply * price), tokenDetails.decimals, '')
        
        return marketCap
    }

    const classes = useStyles();
    return (
        <div className={classes.infoBlocksContainer}>
            <InfoBlock
                title={`${tokenDetails?.name ? tokenDetails?.name : 'TOKEN'} - ${tokenDetails.symbol ? tokenDetails.symbol : ''}`}
                subText={ tokenCreator ? getEllipsisTxt(tokenCreator) : '' }
                icon="token"
                isLoading={isLoading}
            />
            <InfoBlock title={getMarketCap(totalSupply, tokenPrice.usdPrice)} subText="Market Cap" icon="market" isLoading={isLoading} />
            <InfoBlock title={`$${tokenPrice.usdPrice ? (tokenPrice.usdPrice).toFixed(2) : 'N/A'}`} subTitle={`${tokenPrice.nativePrice?.value ? `${toBnb(tokenPrice.nativePrice.value, tokenPrice.nativePrice.decimals)} BNB` : 'N/A'}`} subText="Price" icon="price" isLoading={isLoading} />
            <InfoBlock icon="supply" title={toBnb(totalSupply, tokenDetails.decimals, tokenDetails.symbol ? tokenDetails.symbol : null)} subText="Total Supply" secondaryTitle={toBnb(circulatingSupply, tokenDetails.decimals, tokenDetails.symbol ? tokenDetails.symbol : null)} secondarySubText="Circulating Supply" large isLoading={isLoading} />
        </div>
    )
}

const useStyles = makeStyles({
    infoBlocksContainer: {
        height: "20vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "nowrap",
        overflow: "auto",
        width: "100%",
    },
})



export default InfoContainer
