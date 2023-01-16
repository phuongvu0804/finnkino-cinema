import React from "react";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faSnapchat,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// Material UI
import { Grid } from "@mui/material";

// Components
import Image from "@/components/Image";
import images from "@/assets/images";

import "./style.scss";
import { FOOTER_CATEGORY_DATA, FOOTER_COPY_RIGHTS } from "./constants";

function Footer() {
  const renderCategories = () => {
    return FOOTER_CATEGORY_DATA.map((item, index) => {
      return (
        <Grid key={index} item xs={12} md={3} className={item.className}>
          <p className="footer__list-title">{item.categoryName}</p>
          {item.children?.map((categoryChildren, index) => (
            <a key={index} className="footer__list-link" href={categoryChildren.to}>
              {categoryChildren.name}
            </a>
          ))}
        </Grid>
      );
    });
  };

  return (
    <footer>
      <Grid
        container
        maxWidth="lg"
        sx={{ mx: "auto" }}
        id="footer__container"
        className="container"
      >
        <Grid container sx={{ mx: "auto" }} className="footer__apps">
          <a
            className="footer__app-item"
            href="https://apps.apple.com/app/finnkino-leffa/id1616672209?l"
          >
            <Image src="https://media.finnkino.fi/Files/responsive/footer/appstore_small.png" />
          </a>
          <a
            className="footer__app-item"
            href="https://media.finnkino.fi/Files/responsive/footer/googleplay_small.png"
          >
            <Image src="https://media.finnkino.fi/Files/responsive/footer/googleplay_small.png" />
          </a>
        </Grid>
        <Grid container className="footer__list">
          {renderCategories()}
        </Grid>

        <Grid container className="footer__payment">
          <Image src={images.paymentMethodsMobile} className="hide-on-pc hide-on-tablet" />
          <Image src={images.paymentMethodsPC} className="hide-on-mobile" />
        </Grid>
        <p className="footer__rights pt-5 pb-5">{FOOTER_COPY_RIGHTS}</p>
      </Grid>
    </footer>
  );
}

export default Footer;
