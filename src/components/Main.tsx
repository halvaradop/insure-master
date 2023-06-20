import { Button } from "./Button"
import { CardOffer } from "./CardOffer"
import { offers } from "../utils/data"
import { bgHero, bgPatternRight, bgPatternLeft } from "../utils/images"

const Main = () => {
    return (
        <main className="mb-44">
            <section className="base:pl-[8%] base:grid base:relative base:bg-violet">
                <picture className="base:absolute base:top-40 base:right-[8%] base:z-10">
                    <source media="(min-width: 900px)" srcSet={bgHero.heroDesktop} />
                    <img className="w-full max-h-[500px] base:max-w-[350px]" src={bgHero.heroMobile} alt="hero mobile" />
                </picture>
                <article className="w-full py-24 px-5 text-gray text-center relative bg-violet base:w-1/2 base:px-0 base:static base:text-start base:bg-transparent">
                    <h1 className="text-4xl/tight font-bold font-display tracking-widest sm:text-2xl base:max-w-sm">Humanizing your insurance</h1>
                    <p className="mt-10 mb-8 base:max-w-sm">
                        Get your life insurance coverage easier and faster. We blend our expertise
                        and technology to help you find the plan that’s right for you. Ensure you
                        and your loved ones are protected.
                    </p>
                    <Button className="uppercase" text="View plans" color="gray" size="xs" />
                    <picture>
                        <source media="(min-width: 900px)" srcSet={bgPatternLeft.bgLeftDesktop} />
                        <img className="absolute top-0 left-0 base:max-h-[350px] base:top-1/2" src={bgPatternLeft.bgLeftMobile} alt="background pattern left" />
                    </picture>
                    <picture>
                        <source media="(min-width: 900px)" srcSet={bgPatternRight.bgRightDesktop} />
                        <img className="absolute -bottom-1/2 right-0 base:max-h-[400px] base:inset-y-0 base:right-0" src={bgPatternRight.bgRightMobile} alt="background pattern right" />
                    </picture>
                </article>
            </section>
            <section className="base:w-10/12 base:mx-auto">
                <h2 className="mt-40 mb-10 text-violet-200 text-4xl font-bold font-display text-center base:mt-48 base:text-start">We're different</h2>
                <section className="grid gap-y-8 base:grid-cols-3 base:items-start base:gap-y-10">
                    {offers.map(({ img, title, text }, key) => 
                        <CardOffer key={key} img={img} title={title} text={text}  />
                    )}
                </section>
            </section>
            <section className="w-11/12 mx-auto mt-16 py-20 px-4 text-center relative overflow-hidden bg-violet base:w-10/12 base:px-10 base:flex base:items-center base:justify-between base:text-start">
                <h2 className="mb-8 text-gray text-4xl font-bold font-display tracking-wider relative z-10 base:w-3/5 base:m-0">Find out more about how we work</h2>
                <Button className="uppercase relative z-20" text="How we work" color="gray" size="xs" />
                <picture>
                    <source media="(min-width: 900px)" srcSet={bgPatternRight.bgRightDesktop} />
                    <img className="absolute bottom-0 right-0" src={bgPatternRight.bgRightMobile} alt="background pattern right" />
                </picture>
            </section>
        </main>
    )
}

export { Main }