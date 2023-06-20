import { useRef } from "react"
import menu from "../assets/hamburger.svg"
import close from "../assets/close.svg"
import logo from "../assets/logo.svg"
import bgPattern from "../assets/mobile-nav.svg"
import { Button } from "./Button"

const Header = () => {
    const menuRef = useRef <HTMLElement> (null)
    const menuIconRef = useRef <HTMLImageElement> (null)

    const handleToggleMenu = () => {
        menuIconRef.current?.setAttribute('src', menuRef.current?.classList.contains('hidden')? close : menu)
        menuRef.current?.classList.toggle('hidden')
    }

    return (
        <header>
            <nav>
                <figure className="w-11/12 h-20 mx-auto flex items-center justify-between">
                    <img src={logo} alt="logo icon" />
                    <img className="hover:cursor-pointer" src={menu} alt="menu icon" ref={menuIconRef} onClick={handleToggleMenu} />
                </figure>
                <menu className="w-full h-nav pt-16 px-4 hidden relative bg-violet-200" ref={menuRef}>
                    <ul className="flex items-center flex-col gap-y-8 text-white text-xl font-bold uppercase">
                        <li>How we work</li>
                        <li>Blog</li>
                        <li>Account</li>
                        <Button className="w-full uppercase" text="View plans" color="blue-100" size="sm"  />
                    </ul>
                    <img className="absolute bottom-0 left-0" src={bgPattern} alt="background pattern" />
                </menu>
            </nav>
        </header>
    )
}

export { Header }