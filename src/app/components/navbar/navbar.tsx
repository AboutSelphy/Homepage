'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
];
export default function Navbar() {
    const pathname = usePathname();
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <Image src="/logo/logo.png" alt="Aboutselphy Branding Logo" width={80} height={80}/>
            </div>

            <ul className="navbar-list">
            {menuItems.map((item, index) => (
                <li key={index} className="navbar-item">
                    <Link
                        className={`navbar-link ${pathname  === item.href ? 'navbar-link-active' : ''}`}
                        href={item.href}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}

            <li className="navbar-item"><span className="navbar-link-text">More coming soon...</span></li>
            </ul>
        </nav>
    );
};