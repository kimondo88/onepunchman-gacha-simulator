import styles from '../styles/Simulate.module.scss';

export default function ShowInventory({pulls, count}){

    return (
        <div id="invBox" className={styles.invBox}>
            {
                pulls.map((value, index) => {
                    if(index < 14){
                        return <div key={"item" + index} className={styles.invItemOne}>{value}</div>;
                    }else{
                        return <div key={"item" + index} className={styles.invItemTwo}>{value}</div>;
                    }
                })
            }
            {
                count.map((value, index) => {
                    if(index < 14){
                        return <div key={"count" + index} className={styles.invCountOne}>{value}</div>;
                    }else{
                        return <div key={"count" + index} className={styles.invCountwo}>{value}</div>;
                    }
                })
            }
        </div>
    )
}