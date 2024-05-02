import data from '../data/items.json';
import { useMemo, useState } from "react";

export default function Limitbreakthrough35(){

    const [lbs, setlbs] = useState(0);
    const [digit10, setDigit10] = useState(0);
    const [digit1, setDigit1] = useState(0);
    const [output, setOutput] = useState(0);

    const [bool, setBool] = useState(false);

    function count(value: string){
        const max = parseInt(value)
        let count = 0;
        for(let i = 11; i < max ; i++)
        {
            count+= data.limitbreakthrough[`lbs${value}`]
        }
        setlbs(count);
    }

    function calcOutput(){
        let max = data.limitbreakthrough["lbsmax"];
        const final = max - lbs;
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
    }, [lbs])

    return (
        <div>
            <div>Limit Breakthrough Calculator</div>
            <select name="di10" id="dilbs10" onChange={(e) => {
            setDigit10(parseInt(e.target.value))
            }}>
            <option value="1">LimitBreakthrough 1</option>
            <option value="2">LimitBreakthrough 2</option>
            <option value="3">LimitBreakthrough 3</option>
            </select>
            <select name="di1" id="dilbs1" onChange={(e) => {
            setDigit1(parseInt(e.target.value))
            }}>
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
            <input type="number" id="havelbs" min={0} max={3550}
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