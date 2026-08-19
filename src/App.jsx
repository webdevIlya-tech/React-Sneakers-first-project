import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"
import { FALSE, Value } from "sass"
import axios from "axios"

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")

  React.useEffect(() => {
    axios
      .get("https://6a7c6453a008c10e4cbf546f.mockapi.io/items")
      .then((res) => {
        setItems(res.data)
      })
    axios
      .get("https://6a7c6453a008c10e4cbf546f.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data)
      })
  }, [])

  const onAddToCart = (obj) => {
    axios.post("https://6a7c6453a008c10e4cbf546f.mockapi.io/cart", obj)

    setCartItems((prev) => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6a7c6453a008c10e4cbf546f.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id ))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <section className="content p-40">
        <div className="content-info">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="content-search-block">
            <img src="/Icon/search.svg" alt="search" />

            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск ..."
            />

            {searchValue && (
              <img
                className="cu-p"
                onClick={() => setSearchValue("")}
                src="/Icon/cancel-button.svg"
                alt="cancel button"
              />
            )}
          </div>
        </div>
        <div className="content-sneakers">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  onFavorite={() => console.log(item)}
                  onPlus={(obj) => onAddToCart(obj)}
                />
              )
            })}
        </div>
      </section>
    </div>
  )
}

export default App
