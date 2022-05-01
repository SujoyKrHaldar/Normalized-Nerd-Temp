import { FaFacebookF, FaLinkedin, FaDiscord } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <p>Copyright 2022, All rights reserved</p>

          <div className="links">
            <div className="social_links">
              <p>Join me on :</p>
              <a href="https://discord.com/invite/39YYU936RC" target="_blank">
                <FaDiscord />
              </a>
            </div>

            <div className="social_links">
              <p>Follow me on :</p>
              {/* <a target="_blank" href="">
                <FaFacebookF />{" "}
              </a> */}

              <a
                href="https://www.instagram.com/normalizednerd/"
                target="_blank"
              >
                <AiFillInstagram />
              </a>

              <a href="https://twitter.com/normalized_nerd" target="_blank">
                <AiOutlineTwitter />
              </a>

              <a
                href="https://www.linkedin.com/in/sujandutta99/"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a href="https://medium.com/@sujan99dutta" target="_blank">
                <AiOutlineMedium />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
