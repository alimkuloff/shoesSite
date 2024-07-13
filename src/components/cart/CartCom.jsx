import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './CartCom.css';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartProducts(storedProducts);
    calculateTotalPrice(storedProducts);
    calculateTotalItems(storedProducts);
  }, []);

  const calculateTotalPrice = (products) => {
    const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    setTotalPrice(total);
  };

  const calculateTotalItems = (products) => {
    const total = products.reduce((sum, product) => sum + product.quantity, 0);
    setTotalItems(total);
  };

  const handleQuantityChange = (product, delta) => {
    const updatedProducts = cartProducts.map(p => 
      p.id === product.id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
    );
    setCartProducts(updatedProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    calculateTotalPrice(updatedProducts);
    calculateTotalItems(updatedProducts);
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = cartProducts.filter(p => p.id !== productId);
    setCartProducts(updatedProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    calculateTotalPrice(updatedProducts);
    calculateTotalItems(updatedProducts);
  };

  return (
    <div className='cart'>
      <h2 className='cart__title'>{t("cart")}</h2>
      <div className='cart__items'>
        {cartProducts.map(product => (
          <div className='cart__item' key={product.id}>
            <img src={product.image} alt={product.name} className='cart__item-img' />
            <div className='cart__item-info'>
              <h3 className='cart__item-title'>{product.name}</h3>
              <p className='cart__item-price'>${product.price}</p>
              <div className='cart__item-quantity'>
                <button onClick={() => handleQuantityChange(product, -1)}><AiOutlineMinus /></button>
                <span>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(product, 1)}><AiOutlinePlus /></button>
              </div>
              <button onClick={() => handleRemoveProduct(product.id)} className='cart__item-remove'>{t("remove")}</button>
            </div>
          </div>
        ))}
      </div>
      <div className='cart__total'>
        <h3>{t("total")}</h3>
        <p>{t("total_items", { count: totalItems })}</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
