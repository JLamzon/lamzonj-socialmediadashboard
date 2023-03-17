import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Followers/Followers.css";
import iconfacebook from "../../assets/iconfacebook.svg";
import iconup from "../../assets/iconup.svg";
import iconinstagram from "../../assets/iconinstagram.svg"
import icontwitter from "../../assets/icontwitter.svg"
import iconyoutube from "../../assets/iconyoutube.svg"
import icondown from "../../assets/icondown.svg"
import "../lightDarkMode.css";



function Followers(props) {
  
  const { mode } = props;

  return (
    <div className={mode}>
      <Container className="">
        <Row className="followCards">
          {/* ----------Facebook ----------*/}
          <Col className="cardsBox">
            <div className="facebookBar"></div>
            <div className="handleName">
              <img className="icons" src={iconfacebook}></img>
              <p className="headerFont">{props.facebookName}</p>
            </div>
            <p className="overViewMiddleInfo">{props.facebookFollowers}</p>
            <p className="followersText">{props.followersText}</p>
            <div className="displayFlexOnly">
              <img src={iconup}></img>
              <p className="headerFont percentFontPlus">{props.facebookSubbedToday}</p>
            </div>
          </Col>
          {/* ----------Twitter ----------*/}
          <Col className="cardsBox">
            <div className="twitterBar"></div>
            <div className="handleName">
              <img className="icons" src={icontwitter}></img>
              <p className="headerFont">{props.twitterName}</p>
            </div>
            <p className="overViewMiddleInfo">{props.twitterFollowers}</p>
            <p className="followersText">{props.followersText}</p>
            <div className="displayFlexOnly">
              <img src={iconup}></img>
              <p className="headerFont percentFontPlus">{props.twitterSubbedToday}</p>
            </div>
          </Col>
          {/* ---------- Instagram ----------*/}
          <Col className="cardsBox">
            <div className="instagramBar"></div>
            <div className="handleName">
              <img className="icons" src={iconinstagram}></img>
              <p className="headerFont">{props.instaName}</p>
            </div>
            <p className="overViewMiddleInfo">{props.instaFollowers}</p>
            <p className="followersText">{props.followersText}</p>
            <div className="displayFlexOnly">
              <img src={iconup}></img>
              <p className="headerFont percentFontPlus">{props.instaSubbedToday}</p>
            </div>
          </Col>
          {/* ---------- Youtube ----------*/}
          <Col className="cardsBox">
            <div className="youtubeBar"></div>
            <div className="handleName">
              <img className="icons" src={iconyoutube} alt="youtube logo"></img>
              <p className="headerFont">{props.youtubeName}</p>
            </div>
            <p className="overViewMiddleInfo">{props.youtubeFollowers}</p>
            <p className="followersText">{props.subscriberText}</p>
            <div className="displayFlexOnly">
              <img src={icondown}></img>
              <p className="headerFont percentFontNegative">{props.youtubeSubbedToday}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Followers;
