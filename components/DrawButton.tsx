export default function DrawButton({draw, coins, char}){
    return (
        <button onClick={() => {
            draw(coins, char);
        }}>Draw</button>
    )
}