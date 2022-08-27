import React from "react";

function Header(props) {
   return (
      <header className="d-flex justify-between align-center">
         <div className="d-flex align-center">
            <img src="/img/logo.svg" width={40} height={40} alt="logo" />
            <div className="headerInfo">
               <h3 className="text-uppercase">React Sneakers</h3>
               <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
         </div>
         <ul className="d-flex align-center">
            <li onClick={props.onClickCart} className="mr-30 cu-p">
               <img src="/img/cart.svg" width={20} height={20} alt="cart" />
               <span>1200 руб.</span>
            </li>
            <li>
               <img src="/img/user.svg" width={20} height={20} alt="user" />
            </li>
         </ul>
      </header>
   )
}

export default Header;