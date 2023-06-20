
interface ListItemsProps {
    className?: string
    listItems: Array <string>
}

const ListItems = ({ className, listItems }: ListItemsProps ) => {
    return (
        <ul className={`flex items-center flex-col gap-y-2 text-violet-200 text-md font-bold uppercase ${className}`}>
            {listItems.map((item, key) => <li className="first-of-type:mb-6 first-of-type:text-violet-100" key={key}>{item}</li>)}
        </ul>
    )
}

ListItems.defaultProps = {
    className: ""
}

export { ListItems }