import React from "react"

function Card({ onFavorite, imageUrl, title, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price })
    setIsAdded(!isAdded)
  }

  return (
    <div className="content-card">
      <div className="add-to-favorite" onClick={onFavorite}>
        <img src="/public/Icon/heart unliked.svg" alt="favorite" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Nike Blazer" />
      <p>{title}</p>
      <div className="content-card-bottom d-flex justify-between align-center">
        <div className="content-card-bottom-info d-flex flex-column">
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <button type="button" onClick={onClickPlus}>
          <img
            src={isAdded ? "/Icon/checked_button.svg" : "/Icon/buttonAdd.svg"}
            alt="button add"
          />
        </button>
      </div>
    </div>
  )
}

export default Card
