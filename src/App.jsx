import { useEffect, useState } from 'react'
import './App.css'
import CardCat from './components/CardCat'
import Card from './components/Card'

function App() {
  const [inpValue, setInpValue] = useState("")
  const [cards, setCards] = useState([])
  const [timerid, setTimerId] = useState(null)





  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setCards(res.products));
  }, [])






  useEffect(() => {
    clearTimeout(timerid)
    setTimerId(
      setTimeout(() => {
        fetch(`https://dummyjson.com/products/search?q=${inpValue}`)
          .then(res => res.json())
          .then(res => setCards(res.products));
      }, 1000))
  }, [inpValue])







  return (
    <>
      <div className='parent'>
        <div className="parent__container _container">
          <div className="cardsCategory">
            <CardCat inpValue={inpValue} setInpValue={setInpValue} />
          </div>
          <div className="cardsCont">
            {cards.map((e) => <Card title={e.title} img={e.images[0]} price={e.price} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
