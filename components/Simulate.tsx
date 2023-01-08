import { useState } from "react";
import Coins from "./Coins";
export default function Simulate(){
    const [coins, setCoins] = useState(10);
    return (
        <Coins></Coins>
    )
}
