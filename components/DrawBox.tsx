import ImageDrop from "./ImageDrop";
import styles from "../styles/Simulate.module.scss";

export default function DrawBox({current}){
    return (
        <div className={styles.drawbox}>
                { current ? current.map((value, index) => {
                    return <ImageDrop drop={value} key={index} />
                }) : <p>empty </p>}
        </div>
    )
}