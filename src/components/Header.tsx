import { useRef, useEffect } from "react"
import menu from "../assets/hamburger.svg"
import close from "../assets/close.svg"
import logo from "../assets/logo.svg"
import bgPattern from "../assets/mobile-nav.svg"
import { Button } from "./Button"

const Header = () => {
    const menuRef = useRef <HTMLElement> (null)
    const menuIconRef = useRef <HTMLImageElement> (null)

    useEffect(() => {
        
        const matchMediaApply = () => {
            menuRef.current?.classList.add("hidden")
            menuIconRef.current?.setAttribute("src", menu)
        }

        const matchContainer = matchMedia("(min-width: 900px)")
        matchContainer.addEventListener("change", matchMediaApply)

        return () => matchContainer.removeEventListener("change", matchMediaApply)
    }, [])

    const handleToggleMenu = () => {
        menuIconRef.current?.setAttribute("src", menuRef.current?.classList.contains("hidden")? close : menu)
        menuRef.current?.classList.toggle("hidden")
    }

    return (
        <header>
            <nav className="base:w-10/12 base:mx-auto base:flex base:items-center">
                <figure className="w-11/12 h-20 mx-auto flex items-center justify-between base:w-auto">
                    <img src={logo} alt="logo icon" />
                    <img className="hover:cursor-pointer base:hidden" src={menu} alt="menu icon" ref={menuIconRef} onClick={handleToggleMenu} />
                </figure>
                <menu className="w-full h-nav pt-16 px-4 hidden relative bg-violet-200 base:w-full base:h-auto base:p-0 base:block base:bg-transparent" ref={menuRef}>
                    <ul className="flex items-center flex-col gap-y-8 text-white text-xl font-bold uppercase base:flex-row base:justify-end base:gap-x-10 base:text-blue base:text-sm">
                        <li>How we work</li>
                        <li>Blog</li>
                        <li>Account</li>
                        <Button className="w-full max-w-sm uppercase base:w-auto base:h-10" text="View plans" color="gray-100" size="sm"  />
                    </ul>
                    <img className="absolute bottom-0 left-0 base:hidden" src={bgPattern} alt="background pattern" />
                </menu>
            </nav>
        </header>
    )
}

export { Header }