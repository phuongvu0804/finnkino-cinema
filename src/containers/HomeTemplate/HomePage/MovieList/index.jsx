import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

//Material UI
import { Box, Button, Container, Typography } from "@mui/material";

//Components
import MultipleItems from "@/components/ReactSlick/MultipleItems";
import Loader from "@/components/Loader";

//Others
import "./style.scss";
import { SET_MOVIE_TYPE_NOW, SET_MOVIE_TYPE_SOON } from "@/store/constants/movieList";
import actGetMovieList from "@/store/actions/movieList";
import { MOVIE_OPTIONS } from "../constants";
import MovieOption from "./components/MovieOption";
import ShowAllBtn from "./components/ShowAllBtn";

function MovieList() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList.data);
  const loading = useSelector((state) => state.movieList.loading);
  const movieType = useSelector((state) => state.movieList.movieType);

  const [isActiveOption, setIsActiveOption] = useState(1);
  const [moveListByType, setMoveListByType] = useState([]);

  const handleMovieType = () => {
    if (movieType === "now") {
      const data = movieList?.filter((movie) => movie.dangChieu);
      setMoveListByType(data);
    } else if (movieType === "soon") {
      const data = movieList?.filter((movie) => movie.sapChieu);
      setMoveListByType(data);
    }
  };

  useEffect(() => {
    dispatch(actGetMovieList());
  }, [isActiveOption]);

  useEffect(() => {
    movieList && handleMovieType();
  }, [movieList]);

  const handleChooseMovieOption = (id) => {
    setIsActiveOption(id);
    if (id === 1) {
      dispatch({ type: SET_MOVIE_TYPE_NOW });
    } else {
      dispatch({ type: SET_MOVIE_TYPE_SOON });
    }
  };

  const renderMovieOptions = () => {
    return MOVIE_OPTIONS.map((item, index) => {
      return (
        <MovieOption
          key={index}
          data={item}
          onChooseMovieOption={handleChooseMovieOption}
          isActiveOption={isActiveOption}
        />
      );
    });
  };

  return (
    <Box className="home__movie-list">
      <div className="home-list__btn-list">{renderMovieOptions()}</div>

      <Box className="movie-list__carousel-wrapper">
        <Container maxWidth="lg" sx={{ mx: "auto" }}>
          {loading ? (
            <>
              <Loader width="200px" />
            </>
          ) : (
            <MultipleItems
              dots={false}
              autoplay={false}
              className="movie-list__carousel"
              data={moveListByType}
              Component="Image"
              slidesToShow={5}
              slidesToScroll={5}
              nextArrow={<FontAwesomeIcon icon={faAngleRight} />}
              prevArrow={<FontAwesomeIcon icon={faAngleLeft} />}
            />
          )}

          <Container maxWidth="lg" sx={{ mx: "auto" }}>
            <ShowAllBtn />
          </Container>
        </Container>
      </Box>
    </Box>
  );
}

export default MovieList;
