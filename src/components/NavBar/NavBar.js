import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar/NavBar.css";
import React, { useState } from "react";
import "../../components/lightDarkMode.css";
import Switch from "react-switch";
import Followers from "../Followers/Followers";
import Overview from "../Overview/Overview";
import "../lightDarkMode.css";

function NavBar() {

  // ---------- dark mode
  const [mode, setMode] = useState("light");

  const darkModeToggle = (checked) => {
    setMode(checked ? "dark" : "light");
  };

  return (
    <div className={`${mode} fullDash`}>
      <Container className="noSidePadding">
        <Row className="navFlex">
          <Col className="">
            <p className="title">Social Media DashBoard</p>
            <p className="totalFollowers">Total Followers: 23,004</p>
          </Col>

          <Col>
          <div className="divider"></div>
            <div className="darkModeSection ">
              <p className="darkMode">Dark Mode</p>
              <div className="toggleSwitch">
              <Switch className="toggle" onChange={darkModeToggle} checked={mode === "dark"}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


        <Followers 
        facebookName = "@nathanf"
        facebookFollowers = "1987"
        facebookSubbedToday = "12 Today"

        twitterName="@nathanf"
        twitterFollowers="1044"
        twitterSubbedToday = "99 Today"
        
        instaName="@realnathanf"
        instaFollowers="11k"
        instaSubbedToday = "1099 Today"

        youtubeName="Nathan F."
        youtubeFollowers="8239"
        youtubeSubbedToday = "144 Today"

        followersText="FOLLOWERS"
        subscriberText="SUBSCRIBERS"

        />

        <Overview 
        pageViewTitle = "Page Views"
        pageViewsNumber = "87"
        pageViewPercent = "3%"

        likesTitle = "Likes"
        likesNumberOne = "52"
        likesOnePercent = "2%"
        likesNumberTwo = "5462"
        likesTwoPercent = "2257%"
        likesThree = "507"
        likesThreePercent = "553%"
        likesFour= "107"
        likesPercentFour = "19%"


        profileViewsTitle = "Profile Views"
        profileViewsNumber = "52k"
        profileViewsPercent = "1375%"

        retweets = "Retweets"
        retweetsNumber = "117"
        retweetsPercent = "303%"

        totalViewsTitle = "Total Views"
        totalViewsNUmber = "1407"
        totalPercent = "12%"

        />
    </div>
  );
}

export default NavBar;
