import { useState } from "react";
import Coins from "./Coins";
import Select from "./Select";
import Chosen from "./Chosen";
export default function Simulate(){
    const [coins, setCoins] = useState(10);
    const [select, setSelect] = useState("Owlboros");

    return (
        <>
            <Coins setCoins={setCoins}/>
            <br/>
            <p>Ow gacha coins: x{coins}</p>
            <br/>
            <Select setSelect={setSelect}/>
            <p>{select}</p>
            <Chosen chosen={select}/>
        </>
    )
}
