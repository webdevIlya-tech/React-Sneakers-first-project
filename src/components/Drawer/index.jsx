function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex  justify-between mb-30">
          Корзина
          <img
            onClick={onClose}
            className="cancelButton ml-10"
            src="/Icon/cancel-button.svg"
            alt="cancel button"
          />
        </h2>
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
          <img
            className="mb-20"
            width="120px"
            src="/public/Icon/cartBox.svg"
            alt="Empty"
          />
          <h2>Корзина пустая</h2>
          <p className="opacity-6">
            Добавьте хотя бы одну пару кроссовок , чтобы сделать заказ
          </p>
          <button className="greenButton">
            <img src="./Icon/arrowCancel.svg" alt="Arrow" />
            Вернуться назад
          </button>
        </div>
        <section className="cart">
          {items.map((obj) => (
            <div className="cart-item">
              <img
                width={70}
                height={70}
                src={obj.imageUrl}
                alt=""
                className="mr-20 img-cart"
              />
              <div className="cart-item-info mr-20">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                onClick={() => onRemove(obj.id)}
                className="remove-cart-button"
                src="/Icon/cancel-button.svg"
                alt="Remove"
              />
            </div>
          ))}
        </section>
        <div className="cartTotalInfo">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton" type="button">
            <p>Оформить заказ</p>
            <img src="/Icon/arrowCartButton.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Drawer
