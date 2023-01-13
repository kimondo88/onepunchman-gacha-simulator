import { useMemo, useState } from "react";
import Coins from "./Coins";
export default function Simulate(){
    const [coins, setCoins] = useState(10);

    useMemo(() => {
        
    }, [coins]);
    return (
        <>
            <Coins setCoins={setCoins}/>
            <br/>
            <p>{coins}</p>
        </>
    )
}
