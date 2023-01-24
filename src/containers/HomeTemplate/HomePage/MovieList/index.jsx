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

function MovieList() {
  const [isActiveOption, setIsActiveOption] = useState(1);

  useEffect(() => {
    dispatch(actGetMovieList());
  }, [isActiveOption]);

  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList.data);
  const loading = useSelector((state) => state.movieList.loading);
  const movieType = useSelector((state) => state.movieList.movieType);

  let movieTypeList;

  const handleMovieType = () => {
    if (movieType === "now") {
      return (movieTypeList = movieList?.filter((movie) => movie.dangChieu));
    } else if (movieType === "soon") {
      return (movieTypeList = movieList?.filter((movie) => movie.sapChieu));
    }
  };

  const handleChooseMovieOption = (id) => {
    setIsActiveOption(id);
    dispatch({ type: SET_MOVIE_TYPE_NOW });
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
            <Loader />
          ) : (
            <MultipleItems
              dots={false}
              autoplay={false}
              className="movie-list__carousel"
              data={handleMovieType()}
              Component="Image"
              slidesToShow={8.2}
              slidesToScroll={8}
              nextArrow={<FontAwesomeIcon icon={faAngleRight} />}
              prevArrow={<FontAwesomeIcon icon={faAngleLeft} />}
            />
          )}

          <Container maxWidth="lg" sx={{ mx: "auto" }}>
            <Link to="/">
              <Button
                variant="contained"
                size="small"
                className="btn-wrapper btn-filled movie-list__carousel-btn"
              >
                Show all
                <FontAwesomeIcon
                  icon={faAngleDoubleRight}
                  className="movie-list__carousel-btn-icon"
                />
              </Button>
            </Link>
          </Container>
        </Container>
      </Box>
    </Box>
  );
}

export default MovieList;
