import { useEffect, useState } from 'react'
import './App.css'
import CardCat from './components/CardCat'
import Card from './components/Card'
import CardBtn from './components/CardBtn'

function App() {
  const [inpValue, setInpValue] = useState("")
  const [cards, setCards] = useState([])
  const [timerid, setTimerId] = useState(null)
  const [load, setLoad] = useState(true)


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setCards(res.products))
  }, [])






  useEffect(() => {
    clearTimeout(timerid)
    setTimerId(
      setTimeout(() => {
        setLoad(true)
        fetch(`https://dummyjson.com/products/search?q=${inpValue}`)
          .then(res => res.json())
          .then(res => {
            setCards(res.products)
            setLoad(false)
          });
      }, 1000))
  }, [inpValue])

  function getCat(url) {
      fetch(url)
        .then(res => res.json())
        .then(res => setCards(res.products));
  }

  if (load) {
    return (
      <div className='loader'>
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }



  return (
    <>

      <div className='parent'>
        <div className="parent__container _container">
          <div className="cardsCategory">
            <CardCat
              inpValue={inpValue}
              setInpValue={setInpValue}
            />
            <div className="categories">
              {[...new Set(cards.map(e => e.category))].map((cat, i) => (
                <CardBtn
                  key={i}
                  title={cat}
                  getCats={getCat}
                />
              ))}
            </div>
          </div>
          <div className="cardsCont">
            {cards.map((e) => <Card
              title={e.title}
              img={e.images[0]}
              price={e.price}
              key={e.id}
            />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
