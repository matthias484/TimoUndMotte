import React from "react";
import { FearIndex } from "./FearIndex";
import { BtcPrice } from "./BtcPrice";


export const CryptoInfo = () => {
    return (
        <>
            <div style={{ marginBottom: "100px" }}>
                <h1>Crypto Info</h1>
                <h2>Fear & Greed Index (last 90d)</h2>
                <FearIndex />
            </div>
            <hr></hr>
            <div style={{ marginBottom: "100px" }}>
                <h2>BTC Price (last 30d)</h2>
                <BtcPrice />
            </div>
        </>
    );
}