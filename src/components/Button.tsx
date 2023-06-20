import { Variant } from "../interfaces/types"

interface ButtonProps {
    className?: string,
    text: string,
    color: string,
    size: string,   
}

const Button = ({ className, text, color, size }: ButtonProps ) => {
    const colorVariants: Variant = {
        "gray": "text-gray border-gray bg-transparent",
        "gray-100": "text-gray border-gray bg-transparent base:text-violet-200 base:border-violet-200",
    }
    const sizeVariants: Variant = {
        xs: "h-10 px-8 text-sl border",
        sm: "h-14 px-4 text-xl border",

    }
    const classList = `${sizeVariants[size] ?? ""} ${colorVariants[color] ?? ""} ${className}`

    return (
        <button className={classList}>
            {text}
        </button>
    )
}

export { Button }