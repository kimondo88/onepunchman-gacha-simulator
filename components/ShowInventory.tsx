export default function ShowInventory({inventory}){

    return (
        <div id="1">
            <pre>
                <code>{JSON.stringify(inventory)}</code>
            </pre>
        </div>
    )
}