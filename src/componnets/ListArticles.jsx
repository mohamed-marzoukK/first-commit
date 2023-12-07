import React from 'react';
import axios from "axios";
import { useEffect,useState } from "react";
import Album from "./Album";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ListArticles() {
    const[articles,setArticles]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/produits")
        .then((response)=>setArticles(response.data));
       }, []);
       const deleteProd = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
        return;
        }

         axios.delete('http://localhost:3001/produits/' + id)
         .then(() => {
        console.log('successfully deleted!')
        setArticles(prevArticles => prevArticles.filter((article) => article.id !== id));
        toast.success('Article deleted successfully!');
         }).catch((error) => {
            toast.success('Article deleted successfully!');
         console.log(error)
         })

     }
    return ( 
        <>
        
        <Album articles={articles} deleteProd={deleteProd} />
        
        
        </>
     );
}


export default ListArticles;