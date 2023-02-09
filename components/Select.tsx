export default function Select({setSelect}){
    return (
        <select name="character" id="char" onChange={(e) => {
            setSelect(e.target.value)
        }}>
            <option value="Owlboros">Old World Boros</option>
            <option value="Owdm">Old World Watch Dog Man</option>
            <option value="Owce">Old World ChildEmperor</option>
            <option value="Owff">Old World Flashy Flash</option>
            <option value="Owblizzard">Old World Blizzard</option>
            <option value="Owdsk">Old World Deep Sea King</option>
            <option value="Owpg">Old World Pig God</option>
            <option value="Owsonic">Old World Sonic</option>
        </select>
    )
}