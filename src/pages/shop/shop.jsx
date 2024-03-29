import Product from "../../components/product";
import { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";

import "./shop.css";

export default function shop() {
  const [cartProducts, setCartProducts] = useState([]);
  const { newItems } = useContext(ShopContext);

  return (
    <>
      <div className="product-container">
        {newItems.map((item) => (
          <Product
            newItems={newItems}
            key={item.id}
            data={item}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
          />
        ))}
      </div>
    </>
  );
}
