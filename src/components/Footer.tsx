import logo from "../assets/logo.svg"
import { companiesFooter, bgFooter } from "../utils/images"
import { ourCompanyFooterList, helpMeFooterList, contactFooterList, othersFooterList } from "../utils/data"
import { ListItems } from "./ListItems"

const Footer = () => {
    return (
        <footer className="w-full bg-gray base:relative">
            <section className="w-11/12 mx-auto base:w-10/12">
                <figure className="pt-24 pb-6 px-5 flex items-center flex-col gap-y-4 relative border-b border-blue base:flex-row base:justify-between">
                    <img className="relative z-10" src={logo} alt="logo icon" />
                    <figure className="flex items-center gap-x-4 relative z-10 base:ml-auto">
                        {companiesFooter.map((path, key) => <img className="" key={key} src={path} />)}
                    </figure>
                    <picture>
                        <source media="(min-width: 900px)" srcSet={bgFooter.bgFooterDesktop} />
                        <img className="absolute top-0 left-0" src={bgFooter.bgFooterMobile} alt="background pattern mobile" />
                    </picture>
                </figure>
                <section className="mt-8 mb-14 grid gap-y-8 base:grid-cols-4">
                    <ListItems listItems={ourCompanyFooterList} />
                    <ListItems listItems={helpMeFooterList} />
                    <ListItems listItems={contactFooterList} />
                    <ListItems listItems={othersFooterList} />
                </section>
            </section>
        </footer>
    )
}

export { Footer }