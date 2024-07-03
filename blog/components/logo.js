import styles from "styles/logo.module.css";
import Link from "next/link"

export default function Logo({boxOn = false}) {
    return (
        <Link href="/" legacyBehavior>
            <a className={boxOn ? styles.box : styles.basic}>CUBE</a>
        </Link>
    )
}