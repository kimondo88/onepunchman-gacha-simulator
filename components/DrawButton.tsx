export default function DrawButton({draw, coins, char, className}){
    return (
        <button className={className} onClick={() => {
            draw(coins, char);
        }}>Draw</button>
    )
}