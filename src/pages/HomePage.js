import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../redux/features/cocktailSlice";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import '../App.css';

const HomePage = () => {
  const [modifiedCocktails, setModifiedCocktails] = useState([]);
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);
  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktails(newCocktails);
    } else {
      setModifiedCocktails([]);
    }
  }, [cocktails]);
  if (loading) {
    return <Spinner />;
  }
  if(!cocktails) {
    return(
      <h2 className="text-center mt-5">No Cocktails found with this Name</h2>
    )
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {modifiedCocktails.map((item) => (
            <div className="col-md-3 mt-5" key={item.id}>
              <div className="card" style={{ width: "15rem" }}>
                <img
                  src={item.img}
                  className="card-img-top"
                  style={{ borderRadius: "10px" }}
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h5 className="card-title">{item.glass}</h5>
                  <p className="card-text">{item.info}</p>
                  <Link to={`/products/${item.id}`} className="btn btn-primary">
                    Go to Details <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
