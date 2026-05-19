import Image from "next/image";
import styles from "./index.module.css";

type Pops = {
    date : string;
};
export default function Date({date}:Pops){
    return(
        <span className={styles.date}>
        <Image src="/clock.svg" alt="" width ={16} height={16} loading="eager"/>
            {date}
        </span>
    );
}