import { useDebugValue, useState } from "react";
import Coins from "./Coins";
import Select from "./Select";
import Chosen from "./Chosen";
import DrawButton from "./DrawButton";
import items from "../data/items.json";

export default function Simulate(){
    const [coins, setCoins] = useState(10);
    const [select, setSelect] = useState("Owlboros");
    const [inventory, setInventory] = useState([]);

    function Draw(coins: number, char: string){
        const draw: string[] = [];
        //make for loop
        const length = items.normal["number"].length;
        for(let i = 0; i < 10; i++){
            const random = Math.floor(Math.random() * 1008);
            for(let j = 0; j <  length; j++){
                if(random <= items.normal["number"][j] && j == 0){
                    draw.push(items.normal[j])
                    break;
                }else if(random <= items.normal["number"][j]){
                    draw.push(items.normal[j])
                    break;
                }
            }
        
        }
        //reduce number of coins
        setCoins(coins-10);

        // take number check array on number in items, return index from items
        return setInventory(draw);
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
            <DrawButton draw={Draw} coins={coins} char={select}/>
            <ul>
                {inventory.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul>
            
        </>
    )
}
