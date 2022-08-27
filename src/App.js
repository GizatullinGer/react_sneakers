import React, { useEffect } from 'react';
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { useState } from 'react';


function App() {
   const [items, setItems] = useState([]);
   const [cartItems, setCartItems] = useState([]);
   const [cartOpened, setCartOpened] = useState(false);

   useEffect(() => {
      fetch('https://63095d8ff8a20183f7718a53.mockapi.io/items').then(res => {
         return res.json();
      }).then(json => {
         setItems(json);
      });
   }, []);

   const onAddToCart = (obj) => {
      setCartItems(prev => [...prev, obj]);
   }

   console.log(cartItems);

   return (
      <div className="wrapper clear">
         {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
         <Header onClickCart={() => setCartOpened(true)} />
         <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
               <h1>Все кроссовки</h1>
               <div className="search-block d-flex">
                  <img src="/img/search.svg" alt="Search" />
                  <input placeholder="Поиск..." />
               </div>
            </div>

            <div className="sneakers d-flex flex-wrap">
               {
                  items.map((item) => (
                     <Card
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        onFavorite={() => console.log('Закладка')}
                        onPlus={(obj) => onAddToCart(obj)}
                     />
                  ))
               }
            </div>
         </div>
      </div>
   );
}

export default App;