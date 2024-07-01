import Link from "next/link"

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/" legacyBehavior>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" legacyBehavior>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog" legacyBehavior>
                        <a>Blog</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}