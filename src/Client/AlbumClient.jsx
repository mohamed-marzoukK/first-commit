import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useShoppingCart } from 'use-shopping-cart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link,useNavigate } from "react-router-dom";

const defaultTheme = createTheme();
function AlbumClient(props) {


  const navigate = useNavigate(); 
  const {addItem,}=useShoppingCart();
  const isLoggedIn = true;


  const [favorites, setFavorites] = useState(() => {
    // Retrieve favorites from localStorage or use an empty array
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const addToFavorites = (article) => {
    const newFavorites = [...favorites, article];
    setFavorites(newFavorites);
    // Save favorites to localStorage
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };
  const removeFromFavorites = (articleId) => {
    const newFavorites = favorites.filter((article) => article.id !== articleId);
    setFavorites(newFavorites);
    // Save updated favorites to localStorage
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };
  const isFavorite = (articleId) => {
    return favorites.some((article) => article.id === articleId);
  };
  // const toggleFavorite = (article) => {
  //   // Toggle favorite status for the clicked article
  //   if (favorites.some((fav) => fav.id === article.id)) {
  //     // Remove from favorites
  //     setFavorites(favorites.filter((fav) => fav.id !== article.id));
  //   } else {
  //     // Add to favorites
  //     setFavorites([...favorites, article]);
  //   }
  // };


  const addToCart = (article) => {
    try {
      if (isLoggedIn) {
        console.log("azertyui");
        const target = {
          id: article.id,
          title: article.designation,
          image: article.imageartpetitf,
          price: article.prixVente,
          qtestock: article.qtestock,
          quantity: 1,
        };
        addItem(target);
      } else {
        // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
        alert("Veuillez vous connecter avant d'ajouter au panier.");
        // Utilisez votre système de navigation pour rediriger l'utilisateur
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout au panier :", error);
      // Gérez l'erreur selon vos besoins
    }
  };
  const images = ['images/aa.jpg', 'images/aa1.jpg','images/aa2.jpg','images/aa3.jpg'];
  const ImageSlider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNextClick = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <img src={images[currentImageIndex]} alt="" width="1348" height="500" />
        <div>
          <Button onClick={handlePrevClick}>{'<'}</Button>
          <Button onClick={handleNextClick}>{'>'}</Button>
        </div>
      </Box>
    );
  };

 

  


  
  
  return (
    <>
    

    <ThemeProvider theme={defaultTheme} >
     <main>
       {/* Hero unit */}
       <Box
         sx={{
           bgcolor: 'background.paper',
           pt: 10,
           pb: 6,
          
           
         }}
       >
    <ImageSlider />
       <div>
      <hr />
    <h2 style={{ fontSize: '25px', fontWeight: 'bold', color: '#293847', marginTop: '27px',display: "flex",  alignItems: 'center', textAlign: 'center',justifyContent: 'center',}}>
        Les Bonnes Affaires
      </h2>
      <hr />
    </div>
       </Box>
       
       <Container sx={{ml:40}} maxWidth="md">
         {/* End hero unit */}
         <Grid container spacing={4}>
           {props.articles.map((article) => (
             <Grid item key={article.id} xs={12} sm={6} md={4}>
               <Card
                 sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
               >
                 <CardMedia
                   component="div"
                   sx={{
                     // 16:9
                     pt: '56.25%',
                   }}
                   image={article.imageartpetitf}
                 />
                
                {isFavorite(article.id) ? (
            <Link to="/" onClick={() => removeFromFavorites(article.id)}>
              <FavoriteIcon />
            </Link>
          ) : (
            <Link to="/" onClick={() => addToFavorites(article)}>
              <FavoriteBorderIcon />
            </Link>
          )}

                   <Typography gutterBottom variant="h5" component="h2">
                     designation : {article.designation}
                   </Typography>
                    
                   <Typography>
                    marque:{article.marque}
                   </Typography>
                 
                 <Typography>
                    prix:{article.prixVente}
                   </Typography>
                 <CardActions><Link to="/" className="btn btn-warning" onClick={() => addToCart(article)}   >Add to Cart</Link>

                  </CardActions>
               </Card>
             </Grid>
           ))}
         </Grid>
       </Container>
       
     </main>
     {/* Footer */}
     
     {/* End footer */}
   </ThemeProvider>
    </>



  );}

export default AlbumClient