import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktails } from "../redux/features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import {BsArrowLeft} from "react-icons/bs";

const ProductDetails = () => {
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleCocktails({ id }));
  }, [dispatch, id]);
  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strCategory: category,
        strDrinkThumb: img,
        strAlcoholic: info,
        strGlass: glass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {name, category, info, glass, img, ingredients};
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [id, cocktail]);
  if (!modifiedCocktail) {
    return <h2>No Cocktail Details</h2>;
  } else {
    const { name, img, category, info, glass, ingredients } = modifiedCocktail;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <Layout>
            <div className="container mt-4">
              <Link to="/" className="btn btn-primary">
                <BsArrowLeft/> Go Back
              </Link>
              <div className="row mt-4">
                <div className="col-md-5">
                  <img src={img} alt={name} height={300} width={400} style={{borderRadius:"15px"}} />
                </div>
                <div className="col-md-5 mt-4">
                  <h2>Name : {name}</h2>
                  <p>Category : {category}</p>
                  <p>Information : {info}</p>
                  <p>Glass : {glass}</p>
                  <p>Ingredients : {ingredients + "  "}</p>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
};

export default ProductDetails;
