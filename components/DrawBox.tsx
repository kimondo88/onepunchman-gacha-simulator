import ImageDrop from "./ImageDrop";
import styles from "../styles/Simulate.module.scss";

export default function DrawBox({current, className}){
    return (
        <div className={`${styles.drawbox} ${styles.hidden} ${className} ${styles.appear}`}>
                { current ? current.map((value, index) => {
                    return <ImageDrop drop={value} key={index} />
                }) : <p>empty </p>}
        </div>
    )
}