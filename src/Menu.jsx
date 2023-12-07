import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "./componnets/fireConfig"; // Assurez-vous que le chemin d'importation est correct
import { onAuthStateChanged} from "firebase/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';

function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);
  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <>
      {/* Vos éléments de navigation ici */}
      {isLoggedIn ? (
        <button className="btn btn dark menu" onClick={logOut}>
          <LogoutIcon/>
        </button>
      ) : (
        <Link className="btn btn dark menu" to="/loginclient">
          <AccountCircleIcon/>
        </Link>
      )}
    </>
  );
}

export default Menu;
