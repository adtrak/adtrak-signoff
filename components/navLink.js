import { useEffect, useState } from 'react'

export default function navLink( {href, label} ) {

    const [isActive, setIsActive] = useState(false);
  
    function toggleActive() {
        setIsActive(!isActive);
    }

    return (
        <li className="3xl:w-1/4">
            <a
                href={href}
                onClick={toggleActive}
                className={`block p-4 pl-0 border-b-2 md:py-8 xl:p-10 sm:py-4 sm:inline-block scroll-to transition ${isActive ? 'text-primary border-primary' : 'border-transparent'}`}>
                {label}
            </a>
        </li>
    )
}