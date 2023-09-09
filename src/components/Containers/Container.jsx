import Cards from "../Cards/Cards"
import Heading1 from "../Titles/Heading1"
import Button from "../Button/Button"
import Contact from "../Contact/Contact"

const Container = () => {
    return (
        <div className="w-screen my-10 max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-16">
            <Heading1 text='Podcast' />
            <Cards />
            <Button text='View All' />
            <Heading1 text='Temas' />
            <Contact/>

        </div>
    )
}

export default Container
