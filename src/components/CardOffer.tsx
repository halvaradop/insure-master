
interface CardOfferProps {
    className?: string,
    img: string,
    title: string,
    text: string
}

const CardOffer = ({ img, title, text }: CardOfferProps ) => {
    return (
        <article className="py-10 px-5 flex items-center flex-col gap-y-5 text-center base:items-start base:text-start">
            <img src={img} alt="icon" />
            <h2 className="mt-4 text-violet-200 text-2xl font-bold font-display">{title}</h2>
            <p className="text-violet-100 text-base base:line-clamp-3">{text}</p>
        </article>
    )
}   

export { CardOffer }