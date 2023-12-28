import './App.css'
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
    const cards = data.map(item => <Card 
        key={item.id}
        item={item}
        // {...item}
    />)
    return (
    <>
        <NavBar />
        <Hero />
        <section className="card-list">
            {cards}
        </section>
    </>
  )
}

export default App
