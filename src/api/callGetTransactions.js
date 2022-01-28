import React from 'react'
import { useTokenPrice, useMoralisWeb3Api, useNativeBalance, useNativeTransactions } from "react-moralis";

export default function CallGetTransactions(useNativeTransactions) {

    const { getNativeTransations, data, isLoading } = useNativeTransactions()
    getNativeTransations({ params: { address: "0xba2ae424d960c26247dd6c32edc70b295c744c43", chain: "bsc" } })
    return data
}
