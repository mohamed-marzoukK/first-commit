import { Padding } from '@mui/icons-material';
import React from 'react'
import {Link } from "react-router-dom";
function Album(props) {
  return (
    <div className='album' >
      <div className='ajou'>
          
          <Link to="/AjoutArticle" style={{ color: "inherit" }}>AjoutArticle</Link>
          </div>
      <table class="table" style={{width:"1250px"}}>
  <thead class="table-dark">
    <tr>
      <th>id</th>
      <th>Référence</th>
      <th>Désignation</th>
      <th>Quantité</th>
      <th>Prix</th>
      <th>Modifier</th>
      <th>Supprimer</th>

    </tr>
  </thead>
  <tbody>
              {props.articles.map((article) => (
                <tr key={article.id}>
                  <td>{article.id}</td>
                  <td>
                    <img
                      src={article.imageartpetitf}
                      width="150px"
                      height="150px"
                      alt={article.designation}
                    />
                  </td>
                  <td>{article.designation}</td>
                  <td>{article.marque}</td>
                  <td>{article.prixVente}</td>
                  <td>
                  <Link to={`/ModifierArticle/${article.id}`} className="btn btn-primary">Modifier</Link>
                  </td>
                  <td>
                  <button onClick={()=>{props.deleteProd(article.id)}} className="btn btn-danger">Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
</table>
    </div>
  )
}
export default Album;

{/* <div className='ajou'>
          
          <Link to="/AjoutArticle" style={{ color: "inherit" }}>AjoutArticle</Link>
          </div>
    */}