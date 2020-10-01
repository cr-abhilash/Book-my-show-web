import React, { Component } from "react";
import "./footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-logo">
          <span>book</span>
          <span>
            <img
              src={require("../Images/logo3.webp")}
              style={{ width: 30, height: 30, margin: 7 }}
            />
          </span>
          <span>show</span>
        </div>
        <div className="social-media-icons">
          <FacebookIcon style={{ fontSize: 40 }} />
          <InstagramIcon style={{ fontSize: 40 }} />
          <TwitterIcon style={{ fontSize: 40 }} />
          <PinterestIcon style={{ fontSize: 40 }} />
          <YouTubeIcon style={{ fontSize: 40 }} />
          <LinkedInIcon style={{ fontSize: 40 }} />
        </div>
        <div className="copy-rights">
          <p>
            Copyright 2020 © Bigtree Entertainment Pvt. Ltd. All Rights
            Reserved. <br /> The content and images used on this site are
            copyright protected and copyrights vests with the respective owners.
            The usage of the content and images on this website is intended to
            promote the works and no endorsement of the artist shall be implied.
            Unauthorized use is prohibited and punishable by law.
          </p>
        </div>
      </div>
    );
  }
}
