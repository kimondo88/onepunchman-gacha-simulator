export default function Coins({setCoins}){
    return (
        <input type="number" id="quantity" name="quantity" min="10" max="100" step="10" onChange={ (e) => {
            setCoins(e.target.value);
        }}></input>
    )
}