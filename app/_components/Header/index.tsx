import Image from "next/image";
import Link from "next/link";
import Styles from "./index.module.css";
import Menu from "../Menu";


export default function Header(){
    return (
        <header className = {Styles.header}>
            <Link href="/" className={Styles.logoLink}>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    className={Styles.logo}
                    width={348}
                    height={133}
                    priority
                />
            </Link>
            <Menu />
            
            </header>
    );
}