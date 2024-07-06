import data from '../data/items.json';
import { useMemo, useState } from "react";

export default function LimitbreakthroughC35(){

    const [lbs, setlbs] = useState(0);
    const [freelbs, setFreelbs] = useState(0);
    const [digit10, setDigit10] = useState(1);
    const [digit1, setDigit1] = useState(0);
    const [output, setOutput] = useState(0);

    const [bool, setBool] = useState(false);

    function count(value: string){
        const max = parseInt(value)+1
        console.log(max);
        let count = 0;
        if(max == 11)
        {
            setlbs(count)
            return
        }
        for(let i = 11; i < max ; i++)
        {
            count+= data.climitbreakthrough35[`lbs${i}`]
        }
        console.log(count)
        setlbs(count);
    }

    function countFree(value: string){
        setFreelbs(parseInt(value));
    }

    function digitChange(d10: number, d1: number){
        // if digit10 change is into 3, check for digit1 if is bigger than 5, then reset digit1 to zero
        if(d10 != digit10)
        {
            setDigit10(d10);
            if(d10 == 3)
            {
                setDigit1(0);
            }
        }
        if(d1 != digit1)   
        {
            setDigit1(d1);
        } 
    }

    function resetDigit1(){
        setDigit1(0)
        return false
    }

    function calcOutput(){
        count(`${digit10}${digit1}`)
        let max = data.climitbreakthrough35["lbsmax"];
        const final = max - lbs - freelbs;
        setOutput(final);
        // sh6 - lbs + freelbs = final
    }

    function finalResult(){
        if(output <= 0)
        {
            return "You have got all lbs";
        }
        return "Required: " + output;
    }

    useMemo(() => {
        calcOutput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [digit10, digit1, freelbs, lbs])

    return (
        <div>
            <div>Limit Breakthrough Complete Calculator</div>
            <select name="di10" id="dilbs10" onChange={(e) => {
            digitChange(parseInt(e.target.value), digit1 )
            }}>
            <option value="1">LimitBreakthrough 1</option>
            <option value="2">LimitBreakthrough 2</option>
            <option value="3">LimitBreakthrough 3</option>
            </select>
            <select name="di1" id="dilbs1" onChange={(e) => {
            digitChange(digit10, parseInt(e.target.value),  )
            }}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            { digit10 == 3 ? false : <option value="6">6</option> }
            { digit10 == 3 ? false : <option value="7">7</option> }
            { digit10 == 3 ? false : <option value="8">8</option> }
            { digit10 == 3 ? false : <option value="9">9</option> }
            </select>
            <input type="number" id="havelbs" min={0} max={42500}
                onChange={(e) => {
                countFree(e.target.value)
                }}></input>
            <button onClick={ () => setBool(true)}>Calculate</button>
            { bool ? finalResult() : false}
            <div></div>
        </div>
        //component przeliczający
        // input sh level 
        //input lbs
        //wyswietl wynik
        //polish
    )
}