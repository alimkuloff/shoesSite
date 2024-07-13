import { AiFillStar } from "react-icons/ai"; 
import axios from '../../api';
import { useState, useEffect,} from 'react';
import './Cards.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <AiFillStar key={index} />
    ));
  };

  const data = useTranslation();
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);
  
    const changeLanguage = (lang) => {
       i18n.changeLanguage(lang);
       setLanguage(lang);
    };
  

  return (
    <div className='cards'>
      <div className="container">
        <h2 className="cards__title">{t("products")}</h2>
        <div className="cards__wrapper">
          {products.map((product) => (
            <div className='card' key={product.id}>
              <div className="card__img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card__text">
                  <h3 className="card__title">{product.name}</h3>
                  <p className="card__rating">{renderStars(product.rating)}</p>
                  <div className="card__info">
                    <p className="card__price">${product.price}</p>
                    <p className="card__discount">{product.price + 150}</p>
                    <p className='card__sale'>24% OFF</p>
                  </div>
                  <Link to={`/SinglePage/${product.id}`}className="card__btn">{t('view')}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;

