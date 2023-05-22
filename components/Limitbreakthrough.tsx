import data from '../data/items.json';
import { useMemo, useState } from "react";

export default function Limitbreakthrough(){

    const [lbs, setlbs] = useState(0);
    const [freelbs, setFreelbs] = useState(0);
    const [output, setOutput] = useState(0);

    const [bool, setBool] = useState(false);

    function count(value: string){
        setlbs(parseInt(data.limitbreakthrough[value]));
    }

    function countFree(value: string){
        setFreelbs(parseInt(value));
    }

    function calcOutput(){
        let max = data.limitbreakthrough["lbs10"];
        const final = max - ( lbs + freelbs);
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
    }, [lbs, freelbs])

    return (
        <div>
            <div>Limit Breakthrough Calculator</div>
            <select name="sh" id="shlbs" onChange={(e) => {
            count(e.target.value)
            }}>
            <option value="lbs0">No Breakthrough</option>
            <option value="lbs1">LimitBreakthrough 1</option>
            <option value="lbs2">LimitBreakthrough 2</option>
            <option value="lbs3">LimitBreakthrough 3</option>
            <option value="lbs4">LimitBreakthrough 4</option>
            <option value="lbs5">LimitBreakthrough 5</option>
            <option value="lbs6">LimitBreakthrough 6</option>
            <option value="lbs7">LimitBreakthrough 7</option>
            <option value="lbs8">LimitBreakthrough 8</option>
            <option value="lbs9">LimitBreakthrough 9</option>
            <option value="lbs10">LimitBreakthrough 10</option>
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