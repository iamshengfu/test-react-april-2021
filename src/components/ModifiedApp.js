import React, { useReducer, useEffect, useState, useRef } from "react";
import axios from "axios"
import Header from "./Header";
import Movie from "./Movie";
import spinner from "../assets/ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer/index.js";
import "../App.css";
import PageSelection from "./PageSelection";

const ModifiedApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [pageInfo, setPageInfo] = useState({totalPages:1,pageNumber:1,totalResults:0})

    const selectedPage = useRef(1);
    const searchedText = useRef("batman");


  
    const search = searchValue => {
      dispatch({
        type: "SEARCH_MOVIES_REQUEST"
      });
  
      axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=9e67dc95&page=${selectedPage.current}`).then(
        jsonResponse => {
          if (jsonResponse.data.Response === "True") {
            dispatch({
              type: "SEARCH_MOVIES_SUCCESS",
              payload: jsonResponse.data.Search
            });

            setPageInfo({
              totalPages:Math.ceil(jsonResponse.data.totalResults/10),
              pageNumber:selectedPage.current,
              totalResults:jsonResponse.data.totalResults
            })

          } else {
            dispatch({
              type: "SEARCH_MOVIES_FAILURE",
              error: jsonResponse.data.Error
            });
						
            setPageInfo({
              totalPages:1,pageNumber:1,totalResults:0
            })
          }
        }
      );
    };

    const goToPage = (page) => {
      if(selectedPage.current == page){
        return;
      }
      selectedPage.current = page;
      search(searchedText.current);
    }
  
    const { movies, errorMessage, loading } = state;
  
    const retrievedMovies =
      loading && !errorMessage ? (
        <img className="spinner" src={spinner} alt="Loading spinner" />
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        movies.map((movie, index) => (
          <div style={{"width":"300px"}}>
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          </div>
        ))
      );
  
    return (
      <div className="App" >
        <div className="m-container">
          <Header text="Modified Version" />
  
          <Search search={search} />
          <PageSelection pageNumber={pageInfo.pageNumber} totalPages={pageInfo.totalPages} totalResults={pageInfo.totalResults} goToPage={goToPage}/>
          <br></br>
          <br></br>
  
          <div className="movies" style={{"justifyContent":"center", "display":"flex"}}>{retrievedMovies}</div>
        </div>
      </div>
    );
  }

export default ModifiedApp
