import { useMemo, useState } from "react";
import Coins from "./Coins";
import Select from "./Select";
export default function Simulate(){
    const [coins, setCoins] = useState(10);
    const [select, setSelect] = useState("Owboros");

    useMemo(() => {
        
    }, [coins]);
    return (
        <>
            <Coins setCoins={setCoins}/>
            <br/>
            <p>{coins}</p>
            <br/>
            <Select setSelect={setSelect}/>
            <p>{select}</p>
        </>
    )
}
