import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAt, faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

//Material UI
import { Box, Button, Container, Grid, Typography } from "@mui/material";

//Components
import Image from "@/components/Image";
import actFetchMovieDetails from "@/store/actions/movieDetails";
import Loader from "@/components/Loader";

//Others
import "./style.scss";
import { socialList } from "./constants";
import SocialBtn from "./components/SocialBtn";

function MovieDetailsPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieDetails.data);
  const loading = useSelector((state) => state.movieDetails.loading);

  const movieID = useParams();

  useEffect(() => {
    dispatch(actFetchMovieDetails(movieID.id));
  }, []);

  const renderSocialBtn = () => {
    return socialList.map((item, index) => <SocialBtn key={index} data={item} />);
  };

  const renderLoader = () => {
    if (loading) return <Loader />;
  };

  return (
    <>
      {renderLoader()}
      {data && (
        <Box id="movie-detail-page">
          <Box>
            <Box
              className="movie-detail__top-info"
              sx={{ height: { xs: "210px", sm: "420px", md: "630px" } }}
            >
              {/* Background */}
              <Box className="movie-detail__top-background">
                <Image src={data.hinhAnh} />
              </Box>

              <Container className="movie-detail__top-info-wrapper container">
                <Box className="top-info__img">
                  <Image src={data.hinhAnh} alt={data.tenPhim} />
                </Box>

                {/* Top info for PC screen */}
                <Box className="top-info__content hide-on-mobile-tablet">
                  <Typography variant="h3" className="top-info__content-title" sx={{ mb: 2 }}>
                    {data.tenPhim}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="large"
                    className="btn-wrapper btn-outline top-info__btn"
                    startIcon={<FontAwesomeIcon icon={faPlay} />}
                    href={data.trailer}
                    target="_blank"
                  >
                    Play Trailer
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    className="btn-wrapper btn-filled top-info__btn"
                    endIcon={<FontAwesomeIcon icon={faAnglesRight} />}
                  >
                    <Link to={`/ticket-booking/${data.maPhim}`}>Tickets</Link>
                  </Button>
                </Box>

                {/* Top info for tablet + mobile screens */}
                <Button
                  variant="contained"
                  size="large"
                  className="btn-wrapper btn-filled top-info__btn hide-on-pc"
                  endIcon={<FontAwesomeIcon icon={faAnglesRight} />}
                >
                  <Link to="/ticket-booking">Tickets</Link>
                </Button>
              </Container>
            </Box>

            {/* Top info for pc */}
            <Box className="movie-detail__top-desc hide-on-mobile-tablet">
              <Box className="movie-detail__desc-left">
                <p>
                  <FontAwesomeIcon className="movie-detail__desc-icon" icon={faHeart} />
                  Rating: {data.danhGia}
                </p>
                <p>{data.hot && "Hot"}</p>
              </Box>
              <Box className="movie-detail__desc-right">{renderSocialBtn()}</Box>
            </Box>
          </Box>

          <Container maxWidth="md" className="movie-detail__content-wrapper container">
            <Typography
              className="top-info__content-title"
              sx={{ display: { xs: "block", sm: "none" } }}
              mb={2}
              variant="h3"
            >
              {data.tenPhim}
            </Typography>
            <Grid container spacing={2} className="movie-detail__content">
              <Grid item xs={12} md={7} className="movie-detail__syno">
                <h4 className="movie-detail__content-title">Synopsis</h4>
                <p>{data.moTa}</p>
              </Grid>
              <Grid item xs={12} md={5} className="movie-detail__details">
                <h4 className="movie-detail__content-title">Details</h4>
                <p>Release Date: {moment(data.ngayKhoiChieu).format("D/M/YYYY hh:mm")}</p>
              </Grid>
            </Grid>
          </Container>

          {/* Top info for tablet + mobile screens */}
          <Box className="movie-detail__top-desc container hide-on-pc">
            <Box className="movie-detail__desc-left">
              <p>
                <FontAwesomeIcon className="movie-detail__desc-icon" icon={faHeart} />
                Rating: {data.danhGia}
              </p>
              <p>{data.hot && "Hot"}</p>
            </Box>
            <Box className="movie-detail__desc-right">{renderSocialBtn()}</Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default MovieDetailsPage;
