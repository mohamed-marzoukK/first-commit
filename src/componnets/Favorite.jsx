import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Favorite = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      setFavoriteItems(parsedFavorites);
    }
  }, []);

  return (
    <div>
        <Link to="/" className="btn btn-primary">Go to Album</Link>

      <h2>Your Favorite Items</h2>
      {favoriteItems.length === 0 ? (
        <p>No favorite items yet.</p>
      ) : (
        <div>
          {favoriteItems.map((item) => (
            <div key={item.id}>
              <img
                alt={item.designation}
                style={{ margin: "0 auto", maxHeight: "100px" }}
                src={item.imageartpetitf}
                className="img-fluid d-block"
              />
              <h5>{item.designation}</h5>
              <p>Marque: {item.marque}</p>
              <p>Prix: {item.prixVente} TND</p>
              <p>Qté en stock: {item.qtestock}</p>
              <hr />
            </div>
          ))}
        </div>
      )}

     
      
    </div>
  );
};

export default Favorite;
