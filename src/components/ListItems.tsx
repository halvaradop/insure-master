
interface ListItemsProps {
    className?: string
    listItems: Array <string>
}

const ListItems = ({ className, listItems }: ListItemsProps ) => {
    return (
        <ul className={`flex items-center flex-col gap-y-2 text-violet-200 text-md font-bold uppercase base:items-start ${className}`}>
            {listItems.map((item, key) => 
                <li className="group relative first-of-type:mb-6 first-of-type:text-violet-100 hover:cursor-pointer" key={key}>
                    {item}
                    <span className="w-full h-0.5 absolute bottom-0.5 left-0 origin-left scale-x-0 transition-all duration-500 bg-violet-200 group-first-of-type:invisible group-hover:scale-x-100"></span>
                </li>
            )}
        </ul>
    )
}

ListItems.defaultProps = {
    className: "",
    listItems: []
}

export { ListItems }