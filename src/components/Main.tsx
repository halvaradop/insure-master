import { Button } from "./Button"
import { CardOffer } from "./CardOffer"
import { offers } from "../utils/data"
import { bgHero, bgPatternRight, bgPatternLeft } from "../utils/images"

const Main = () => {
    return (
        <main className="mb-44">
            <picture>
                <source media="(min-width: 900px)" srcSet={bgHero.heroDesktop} />
                <img className="" src={bgHero.heroMobile} alt="hero mobile" />
            </picture>
            <article className="w-full py-24 px-5 text-gray text-center relative bg-violet">
                <h1 className="text-4xl/tight font-bold font-display tracking-widest">Humanizing your insurance</h1>
                <p className="mt-10 mb-8">
                    Get your life insurance coverage easier and faster. We blend our expertise 
                    and technology to help you find the plan that’s right for you. Ensure you 
                    and your loved ones are protected.
                </p>
                <Button className="uppercase" text="View plans" color="gray" size="xs" />
                <picture>
                    <source media="(min-width: 900px)" srcSet={bgPatternLeft.bgLeftDesktop} />
                    <img className="absolute top-0 left-0" src={bgPatternLeft.bgLeftMobile} alt="background pattern left" />
                </picture>
                <picture>
                    <source media="(min-width: 900px)" srcSet={bgPatternRight.bgRightDesktop} />
                    <img className="absolute -bottom-1/2 right-0" src={bgPatternRight.bgRightMobile} alt="background pattern right" />
                </picture>
            </article>
            <section>
                <h2 className="mt-40 mb-10 text-violet-200 text-4xl font-bold font-display text-center">We're different</h2>
                <section className="grid gap-y-8">
                    {offers.map(({ img, title, text }, key) => 
                        <CardOffer key={key} img={img} title={title} text={text}  />
                    )}
                </section>
            </section>
            <section className="w-11/12 mx-auto py-20 px-4 text-center relative overflow-hidden bg-violet">
                <h2 className="mb-8 text-gray text-4xl font-bold font-display tracking-wider relative z-10">Find out more about how we work</h2>
                <Button className="uppercase" text="How we work" color="gray" size="xs" />
                <picture>
                    <source media="(min-width: 900px)" srcSet={bgPatternRight.bgRightDesktop} />
                    <img className="absolute bottom-0 right-0" src={bgPatternRight.bgRightMobile} alt="background pattern right" />
                </picture>
            </section>
        </main>
    )
}

export { Main }