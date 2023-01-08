export default function Coins(){

    return (
        <form action="/action_page.php" method="post">
            <label>Choose a number of gacha coins:</label>
            <select name="coins" id="coins">
            <option value="10">x10</option>
            <option value="20">x20</option>
            <option value="30">x30</option>
            <option value="40">x40</option>
            <option value="50">x50</option>
            </select>
            <input type="submit" value="Submit"></input>
        </form>
    )
}