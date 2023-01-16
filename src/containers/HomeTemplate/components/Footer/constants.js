import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSnapchat,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FOOTER_CATEGORY_DATA = [
  {
    categoryName: "Finnkino",
    className: "footer__list-item",
    children: [
      {
        name: "Cinemas",
        to: "/",
      },
      {
        name: "B2B",
        to: "/",
      },
      {
        name: "Jobs",
        to: "/",
      },
      {
        name: "Finnkino Oy",
        to: "/",
      },
    ],
  },
  {
    categoryName: "Customer service",
    className: "footer__list-item",
    children: [
      {
        name: "Contact us",
        to: "/",
      },
      {
        name: "FAQ",
        to: "/",
      },
    ],
  },
  {
    categoryName: "Web shop",
    className: "footer__list-item",
    children: [
      {
        name: "Privacy",
        to: "/",
      },
      {
        name: "Terms and conditions",
        to: "/",
      },
      {
        name: "Terms of Finnkino Lab",
        to: "/",
      },
    ],
  },
  {
    categoryName: "Follow us on Social Media",
    className: "footer__list-item footer__list-item--social",
    children: [
      {
        name: <FontAwesomeIcon icon={faTwitter} />,
        to: "/",
      },
      {
        name: <FontAwesomeIcon icon={faInstagram} />,
        to: "/",
      },
      {
        name: <FontAwesomeIcon icon={faFacebook} />,
        to: "/",
      },
      {
        name: <FontAwesomeIcon icon={faSnapchat} />,
        to: "/",
      },
      {
        name: <FontAwesomeIcon icon={faLinkedin} />,
        to: "/",
      },
      {
        name: <FontAwesomeIcon icon={faYoutube} />,
        to: "/",
      },
    ],
  },
];

export const FOOTER_COPY_RIGHTS = "Finnkino Oy - All rights reserved";
