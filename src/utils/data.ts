import { Offer } from "../interfaces/types"

const offers: Array <Offer> = [
    {
        img: "/src/assets/snappy-process.svg",
        title: `Snappy Process`,
        text: `Our application process can be completed in minutes, not hours. Don’t get 
        stuck filling in tedious forms.`
    },
    {
        img: "/src/assets/prices.svg",
        title: `Affordable Prices`,
        text: `We don’t want you worrying about high monthly costs. Our prices may be low, 
        but we still offer the best coverage possible.`
    },
    {
        img: "/src/assets/people.svg",
        title: `People First`,
        text: `Our plans aren’t full of conditions and clauses to prevent payouts. We make 
        sure you’re covered when you need it.`
    }
]

const ourCompanyFooterList = [
    "our company", 
    "how we work",
    "why insure",
    "check price",
    "reviews"
]

const helpMeFooterList = [
    "help me",
    "faq",
    "terms of use",
    "privacy policy",
    "cookies"
]

const contactFooterList = [
    "sales",
    "support",
    "live chat"
]

const othersFooterList = [
    "others",
    "careers",
    "press",
    "licenses"
]

export { offers, ourCompanyFooterList, helpMeFooterList, contactFooterList, othersFooterList }