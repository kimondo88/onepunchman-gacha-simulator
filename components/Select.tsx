export default function Select({setSelect}){
    return (
        <select name="character" id="char" onChange={(e) => {
            setSelect(e.target.value)
        }}>
            <option value="Owlboros">Old World Boros</option>
            <option value="Owce">Old World ChildEmperor</option>
            <option value="Owff">Old World Flashy Flash</option>
            <option value="Owblizzard">Old World Blizzard</option>
        </select>
    )
}