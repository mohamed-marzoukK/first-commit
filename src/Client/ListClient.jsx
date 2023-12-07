import React from 'react';
import axios from 'axios';
import {useEffect,useState} from 'react';
import AlbumClient from './AlbumClient';

function ListClient(props) {
    const[articles,setArticles]=useState([]);

    
        useEffect(() => {
            axios.get("http://localhost:3001/produits")
            .then((response)=>setArticles(response.data));
           }, []);
    
        
  return (
    <>
    <AlbumClient articles={articles}    />
   
 </>

  )
}

export default ListClient;