import data from '../data/items.json';
import { useMemo, useState } from "react";

export default function SpiritHallComplete(){

    const [copies, setCopies] = useState(27);
    const [freeCopies, setFreeCopies] = useState(0);
    const [output, setOutput] = useState(0);

    const [bool, setBool] = useState(false);

    function count(value: string){
        setCopies(parseInt(data.owshcopies[value]));
    }

    function countFree(value: string){
        setFreeCopies(parseInt(value));
    }

    function calcOutput(){
        let max = parseInt(data.owshcopies["sh6"]);
        const final = max - ( copies + freeCopies);
        setOutput(final);
        // sh6 - copies + freecopies = final
    }

    function finalResult(){
        if(output < 0)
        {
            return "You have too much";
        }
        return "Required: " + output;
    }

    useMemo(() => {
        calcOutput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [copies, freeCopies])

    return (
        <div>
            <div>Old World Spirit Hall Copies</div>
            <select name="sh" id="shcopies" onChange={(e) => {
            count(e.target.value)
            }}>
            <option value="sh0">Myth Rank 5</option>
            <option value="sh1">Spirit hall 1</option>
            <option value="sh2">Spirit hall 2</option>
            <option value="sh3">Spirit hall 3</option>
            <option value="sh4">Spirit hall 4</option>
            <option value="sh5">Spirit hall 5</option>
            <option value="sh6">Spirit hall 6</option>
            </select>
            <input type="number" id="havecopies" min={0} max={27}
                onChange={(e) => {
                countFree(e.target.value)
                }}></input>
            <button onClick={ () => setBool(true)}>Calculate</button>
            { bool ? finalResult() : false}
            <div></div>
        </div>
        //component przeliczający
        // input sh level 
        //input copies
        //wyswietl wynik
        //polish
    )
}