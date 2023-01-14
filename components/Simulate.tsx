import { useState } from "react";
import Coins from "./Coins";
import Select from "./Select";
import Chosen from "./Chosen";
import DrawButton from "./DrawButton";
export default function Simulate(){
    const [coins, setCoins] = useState(10);
    const [select, setSelect] = useState("Owlboros");
    const [inventory, setInventory] = useState([]);

    function Draw(coins: number, char: string, ){
        return 
    }

    return (
        <>
            <Coins setCoins={setCoins}/>
            <br/>
            <p>Ow gacha coins: x{coins}</p>
            <br/>
            <Select setSelect={setSelect}/>
            <p>{select}</p>
            <Chosen chosen={select}/>
            <DrawButton/>
        </>
    )
}
