import { faFacebookF, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const socialList = [
  {
    name: "Share",
    icon: (
      <FontAwesomeIcon
        className="movie-detail__desc-btn movie-detail__desc-btn-icon"
        icon={faFacebookF}
      />
    ),
    className: "desc-btn--facebook",
  },
  {
    name: "Tweet",
    icon: (
      <FontAwesomeIcon
        className="movie-detail__desc-btn movie-detail__desc-btn-icon"
        icon={faTwitter}
      />
    ),
    className: "desc-btn--twitter",
  },
  {
    name: "WhatsApp",
    icon: (
      <FontAwesomeIcon
        className="movie-detail__desc-btn movie-detail__desc-btn-icon"
        icon={faWhatsapp}
      />
    ),
    className: "desc-btn--whatsapp",
  },
  {
    name: "E-mail",
    icon: (
      <FontAwesomeIcon className="movie-detail__desc-btn movie-detail__desc-btn-icon" icon={faAt} />
    ),
    className: "desc-btn--email",
  },
];
