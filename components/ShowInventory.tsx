import styles from '../styles/Simulate.module.scss';
import Image from 'next/image';
import data from '../data/items.json';

export default function ShowInventory({pulls, count, className}){
    const width = 40, height = 30;
    return (
        <div id="invBox" className={styles.invBox + " " + className}>
            {
                pulls.map((value, index) => {
                    if(index < 6){
                        return <Image src={data.icons[value]} width={width} height={height} key={"item" + index} className={styles.invItemOne} alt={"image of " + value} style={{ gridRow : index + 1}} />;
                    }else if(index < 12){
                        return <Image src={data.icons[value]} width={width} height={height} key={"item" + index} className={styles.invItemTwo} alt={"image of " + value} style={{ gridRow : -5 + index}}/>
                    }else if(index < 18){
                        return <Image src={data.icons[value]} width={width} height={height} key={"item" + index} className={styles.invItemThree} alt={"image of " + value} style={{ gridRow : -11 + index}}/>
                    }else if(index < 24){
                        return <Image src={data.icons[value]} width={width} height={height} key={"item" + index} className={styles.invItemFour} alt={"image of " + value} style={{ gridRow : -17 + index}}/>
                    }else if(index < 30){
                        return <Image src={data.icons[value]} width={width} height={height} key={"item" + index} className={styles.invItemFive} alt={"image of " + value} style={{ gridRow : -23 + index}}/>
                    }else{
                        return <Image src={data.icons[value]} width={width} height={height} key={"item" + index} className={styles.invItemSix} alt={"image of " + value} style={{ gridRow : -29 + index}}/>
                    }
                })
            }
            {
                count.map((value, index) => {
                    if(index < 6){
                        return <div  key={"count" + index} className={styles.invCountOne} style={{ gridRow : index + 1}}>x{value}</div>;
                    }else if(index < 12){
                        return <div  key={"count" + index} className={styles.invCountTwo} style={{ gridRow : -5 + index}}>x{value}</div>
                    }else if(index < 18){
                        return <div  key={"count" + index} className={styles.invCountThree} style={{ gridRow : -11 + index}}>x{value}</div>
                    }else if(index < 24){
                        return <div  key={"count" + index} className={styles.invCountFour} style={{ gridRow : -17 + index}}>x{value}</div>
                    }else if(index < 30){
                        return <div  key={"count" + index} className={styles.invCountFive} style={{ gridRow : -23 + index}}>x{value}</div>
                    }else{
                        return <div  key={"count" + index} className={styles.invCountSix} style={{ gridRow : -29 + index}}>x{value}</div>
                    }
                })
            }
        </div>
    )
}