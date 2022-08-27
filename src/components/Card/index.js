import React, { useState } from "react"
//import { ReactDOM } from "react"
import classes from './Card.module.scss'

function Card({imageUrl, title, price, onFavorite, onPlus}) {

   const [isAdded, setIsAdded] = useState(false);

   const onClickPlus = () => {
      onPlus({imageUrl, title, price});
      setIsAdded(!isAdded);
   }

   return (
      <div className={classes.card}>
         <div className={classes.favorite}>
            <img onClick={onFavorite} src="/img/heart-gray.svg" alt="heart-gray" />
         </div>
         <img width={133} height={112} src={imageUrl} alt="Sneakers-1" />
         <h5>{title}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена:</span>
               <b>{price} руб.</b>
            </div>
            <img className={classes.plus}
               onClick={onClickPlus}
               src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"}
               alt="plus"
            />
         </div>
      </div>
   )
}

export default Card;
