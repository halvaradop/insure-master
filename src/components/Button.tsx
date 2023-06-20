import { Variant } from "../interfaces/types"

interface ButtonProps {
    className?: string,
    text: string,
    color: string,
    size: string,   
}

const Button = ({ className, text, color, size }: ButtonProps ) => {
    const colorVariants: Variant = {
        "blue-100": "text-blue-100 border-blue-100 bg-transparent"
    }
    const sizeVariants: Variant = {
        sm: "h-14 text-xl border"
    }
    const classList = `${sizeVariants[size] ?? ""} ${colorVariants[color] ?? ""} ${className}`

    return (
        <button className={classList}>
            {text}
        </button>
    )
}

export { Button }