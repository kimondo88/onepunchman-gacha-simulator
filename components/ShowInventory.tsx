import styles from '../styles/Simulate.module.scss';

export default function ShowInventory({pulls, count}){

    return (
        <div id="invBox" className={styles.invBox}>
            {
                pulls.map((value, index) => {
                    if(index < 14){
                        return <div key={"item" + index} className={styles.invItemOne} style={{ gridRowStart : index + 1}}>{value}</div>;
                    }else{
                        return <div key={"item" + index} className={styles.invItemTwo} style={{ gridRowStart : -13 + index}}>{value}</div>;
                    }
                })
            }
            {
                count.map((value, index) => {
                    if(index < 14){
                        return <div key={"count" + index} className={styles.invCountOne} style={{ gridRowStart : index + 1}}>{value}</div>;
                    }else{
                        return <div key={"count" + index} className={styles.invCountwo} style={{ gridRowStart : -13 + index}}>{value}</div>;
                    }
                })
            }
        </div>
    )
}