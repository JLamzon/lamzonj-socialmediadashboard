import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Overview/Overview.css";
import iconfacebook from "../../assets/iconfacebook.svg";
import iconinstagram from "../../assets/iconinstagram.svg";
import icontwitter from "../../assets/icontwitter.svg";
import iconyoutube from "../../assets/iconyoutube.svg";
import icondown from "../../assets/icondown.svg";
import iconup from "../../assets/iconup.svg";
import "../Followers/Followers.css";
import "../lightDarkMode.css";

function Overview(props) {
  return (
    // ----------- Top row
    <div className="overviewBottomPadding">
      <Container className="overviewSpacing mt-3">
        <span className="overviewTitle">Overview - Today</span>
        <Row className="overview">
          <Col className="overViewElements">
            <div>
              <p className="totalNumberFont">{props.pageViewTitle}</p>
              <p className=" itemSpace">{props.pageViewsNumber}</p>
            </div>
            <div className="iconPlace">
              <img className="overviewIcons icons" src={iconfacebook}></img>
              <div className="overviewPercent">
                <img className="iconsOverview overviewImg" src={iconup}></img>
                <p className="overviewSpace overViewItemSpacing percentFontPlus">
                  {props.pageViewPercent}
                </p>
              </div>
            </div>
          </Col>
          <Col className="overViewElements">
            <div>
              <p className="totalNumberFont">{props.likesTitle}</p>
              <p className=" itemSpace">{props.likesNumberOne}</p>
            </div>
            <div className="iconPlace">
              <img className="overviewIcons icons" src={iconfacebook}></img>
              <div className="overviewPercent">
                <img className="iconsOverview overviewImg" src={icondown}></img>
                <p className="overviewSpace percentFontNegative">
                  {props.likesOnePercent}
                </p>
              </div>
            </div>
          </Col>
          <Col className="overViewElements">
            <div>
              <p className="totalNumberFont">{props.likesTitle}</p>
              <p className=" itemSpace">{props.likesNumberTwo}</p>
            </div>
            <div className="iconPlace">
              <img className="overviewIcons icons" src={iconinstagram}></img>
              <div className="overviewPercent">
                <img className="iconsOverview overviewImg" src={iconup}></img>
                <p className="overviewSpace overViewItemSpacing percentFontPlus">
                  {props.likesTwoPercent}
                </p>
              </div>
            </div>
          </Col>
          <Col className="overViewElements">
            <div>
              <p className="totalNumberFont">{props.profileViewsTitle}</p>
              <p className=" itemSpace">{props.profileViewsNumber}</p>
            </div>
            <div className="iconPlace">
              <img className="overviewIcons icons" src={iconinstagram}></img>
              <div className="overviewPercent">
                <img className="iconsOverview overviewImg" src={iconup}></img>
                <p className="overviewSpace overViewItemSpacing percentFontPlus">
                  {props.profileViewsPercent}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* // ----- bottom row ------ //  */}
        <Row className="overview">
          <Col className="overViewElements">
            <div>
              <p className="totalNumberFont">{props.retweets}</p>
              <p className=" itemSpace">{props.retweetsNumber}</p>
            </div>
            <div className="iconPlace">
              <img className="overviewIcons icons" src={icontwitter}></img>
              <div className="overviewPercent">
                <img className="iconsOverview overviewImg" src={iconup}></img>
                <p className="overviewSpace overViewItemSpacing percentFontPlus">
                  {props.retweetsPercent}
                </p>
              </div>
            </div>
          </Col>
          <Col className="overViewElements">
            <div>
              <p className="totalNumberFont">{props.likesTitle}</p>
              <p className=" itemSpace">{props.likesThree}</p>
            </div>
            <div className="iconPlace">
              <img className="overviewIcons icons" src={icontwitter}></img>
              <div className="overviewPercent">
                <img className="iconsOverview overviewImg" src={iconup}></img>
                <p className="overviewSpace overViewItemSpacing percentFontPlus">
                  {props.likesThreePercent}
                </p>
              </div>
            </div>
          </Col>
          <Col className="overViewElements">
            <div>
              <p className="totalNumberFont">{props.likesTitle}</p>
              <p className=" itemSpace">{props.likesFour}</p>
            </div>
            <div className="iconPlace">
              <img className="overviewIcons icons" src={iconyoutube}></img>
              <div className="overviewPercent">
                <img className="iconsOverview overviewImg" src={icondown}></img>
                <p className="overviewSpace overViewItemSpacing percentFontNegative">
                  {props.likesPercentFour}
                </p>
              </div>
            </div>
          </Col>
          <Col className="overViewElements">
            <div>
              <p className="totalNumberFont">{props.totalViewsTitle}</p>
              <p className=" itemSpace">{props.totalViewsNUmber}</p>
            </div>
            <div className="iconPlace">
              <img className="overviewIcons icons" src={iconyoutube}></img>
              <div className="overviewPercent">
                <img className="iconsOverview overviewImg" src={icondown}></img>
                <p className="overviewSpace overViewItemSpacing percentFontNegative">
                  {props.totalPercent}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Overview;
