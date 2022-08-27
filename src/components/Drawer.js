import React from "react";

function Drawer({ onClose, items = [] }) {
   return (
      <div className="overlay">
         <div className="drawer">
            <div className="drawer__inner">
               <h2 className="d-flex justify-between mb-30">Корзина
                  <img className="cu-p" onClick={onClose} src="/img/btn-remove.svg" alt="close" />
               </h2>
               <div className="drawer__items">
                  {
                     items.map((obj) => (
                        <div className="cart__item d-flex align-center mb-20">
                           <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>

                           <div className="mr-20 flex">
                              <p className="mb-5">{obj.title}</p>
                              <b>{obj.price} руб.</b>
                           </div>
                           <img className="remove-btn" src="/img/btn-remove.svg" alt="remove" />
                        </div>
                     ))
                  }
               </div>

               <div className="cartTotalBlock">
                  <ul>
                     <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498</b>
                     </li>
                     <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                     </li>
                  </ul>
                  <button className="greenButton">Оформить заказ <img src="/img/arrowCart.svg" alt="arrow" /></button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Drawer;