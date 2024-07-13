import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from '../../api';
import './SinglePage.css';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import h3 from '../../assets/3.png';

const SinglePage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(() => JSON.parse(localStorage.getItem('cartCount')) || 0);
  const [liked, setLiked] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [id]);

  useEffect(() => {
    localStorage.setItem('cartCount', cartCount);
  }, [cartCount]);

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <AiFillStar key={index} />
    ));
  };

  const handleAddToCart = (product) => {
    let storedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const existingProductIndex = storedProducts.findIndex(p => p.id === product.id);

    if (existingProductIndex !== -1) {
      storedProducts[existingProductIndex].quantity += quantity;
    } else {
      storedProducts.push({ ...product, quantity });
      setCartCount(cartCount + 1);
    }

    localStorage.setItem('cartProducts', JSON.stringify(storedProducts));
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <>
      <Nav />
      <div className='singlePage'>
        <div className="container">
          {product ? (
            <div className="singlePage__wrapper">
              <img src={product.image} alt="" />
              <div className="singlePage__contant">
                <h2 className="singlePage__title">{product.name}</h2>
                <div className="ratingWrapper">
                  <p className="singlePage__rating">{renderStars(product.rating)}</p>
                  <p className="singlePage__view">{product.numReviews} reviews</p>
                </div>
                <div className="pageBorder"></div>
                <div className="priceWrapper">
                  <p className="singlePage__price">${product.price}</p>
                  <p className="singlePage__discount">${(product.price * 1.24).toFixed(2)}</p>
                  <p className='singlePage__sale'>24% OFF</p>
                </div>
                <div className='singlePage__category'>
                  <table>
                    <tbody>
                      <tr>
                        <td>Availability:</td>
                        <td>{product.countInStock > 0 ? 'In Stock:' : 'Out of Stock:'} {product.countInStock}</td>
                      </tr>
                      <tr>
                        <td>Brand:</td>
                        <td>{product.brand}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>Free shipping</p>
                </div>
                <div className="pageBorder"></div>
                <div className="pageBorderTwo"></div>

                <div className='addToCart__wrapper'>
                  <div className='addToCart'>
                    <button onClick={() => handleQuantityChange(-1)}><AiOutlineMinus /></button>
                    <p>{quantity}</p>
                    <button onClick={() => handleQuantityChange(1)}><AiOutlinePlus /></button>
                  </div>
                  <button onClick={() => handleAddToCart(product)} className='addToCart__btn'>
                    <CgShoppingCart /> Add To Cart
                  </button>
                  <button onClick={handleLike} className='addToCart__btnLike'>
                    {liked ? <AiFillHeart  color="red" className="cartLike"/> : <AiOutlineHeart className="cartLike" />}
                  </button>
                </div>
                <div className="pageBorder"></div>
                <div className="cartLinks">
                  <a href="https://facebook.com/" className="cartLinkFb"><CgFacebook /> Share on Facebook</a>
                  <a href="https://twitter.com" className="cartLinkTw"><AiOutlineTwitter /> Share on Twitter</a>
                </div>
              </div>
            </div>
          ) : null}
          <div className="cartTitle">
            <h3>{t("proinfo")}</h3>
            <p>{product && product.description}</p>
          </div>
          <div className='rated'>
          <h3 className="rated__title">{t("most")}</h3>

          <div className='rated__wrapper'>
            <div className='rated__card'>
              <img src={h3} alt="" />
                <div>
                  <h4>{t("nike")}</h4>
                   <p>
                     <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar className="rated__star"/>
                   </p>
                   <div>
                    <b>$499</b>
                    <span>$599</span>
                   </div>
                </div>            
            </div>
            <div className='rated__card'>
              <img src={h3} alt="" />
                <div>
                  <h4>{t("nike")}</h4>
                   <p>
                     <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar className="rated__star"/>
                   </p>
                   <div>
                    <b>$499</b>
                    <span>$599</span>
                   </div>
                </div>            
            </div>
            <div className='rated__card'>
              <img src={h3} alt="" />
                <div>
                  <h4>{t("nike")}</h4>
                   <p>
                     <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar className="rated__star"/>
                   </p>
                   <div>
                    <b>$499</b>
                    <span>$599</span>
                   </div>
                </div>            
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
