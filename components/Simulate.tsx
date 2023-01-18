import { useMemo, useState } from "react";
// import Coins from "./Coins";
import Select from "./Select";
import Chosen from "./Chosen";
import DrawButton from "./DrawButton";
import DrawBox from "./DrawBox";
import items from "../data/items.json";
import ShowInventory from "./ShowInventory";

export default function Simulate(){
    const [coins, setCoins] = useState(0);
    const [select, setSelect] = useState("Owlboros");
    const [inventory, setInventory] = useState({});
    const [current, setCurrent] = useState([]);

    function Draw(coins: number, char: string){
        const draw: string[] = [];
        //make for loop
        const length = items.normal["number"].length;
        for(let i = 0; i < 10; i++){
            const random = Math.floor(Math.random() * 1008);
            for(let j = 0; j <  length; j++){
                if(random <= items.normal["number"][j] && j == 0){
                    draw.push(select)
                    break;
                }else if(random <= items.normal["number"][j]){
                    draw.push(items.normal[j])
                    break;
                }
            }
        
        }
        //reduce number of coins
        setCoins(old => old + 10);
        AddToInventory(draw, inventory);
        // take number check array on number in items, return index from items
        return setCurrent(draw);
    }

    function AddToInventory(draw: string[], inventory: object){
        const inv = {...inventory};
        
        for(let i = 0; i < draw.length; i++){
            if(inv.hasOwnProperty(draw[i])){
                inv[draw[i]] = inv[draw[i]] + 1
            }else{
                Object.defineProperty(inv, draw[i], {
                    value: 1,
                    writable: true
                })
            }
        }
        console.log(inv);
        return setInventory(old => { return inv});
    }

    return (
        <>
            <p>Infinite gacha pull</p>
            <p>Ow gacha coins used: x{coins}</p>
            <br/>
            <Select setSelect={setSelect}/>
            <p>{select}</p>
            <Chosen chosen={select}/>
            <DrawButton draw={Draw} coins={coins} char={select}/>
            <DrawBox current={current}/>
            <ShowInventory inventory={inventory}/>
        </>
    )
}
