import { FaLinkedin, FaDiscord } from "react-icons/fa";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <p>Copyright 2022, All rights reserved</p>

          <div className="links">
            <div className="social_links">
              <p>Find me on :</p>
              <a
                style={{ fontSize: "2rem" }}
                href="https://www.youtube.com/c/NormalizedNerd"
                target="_blank"
              >
                <AiFillYoutube />
              </a>
              {/* <a
                href="https://scholar.google.com/citations?user=Fy5SnlgAAAAJ"
                target="_blank"
              >
                <SiGooglescholar />
              </a> */}
              <a
                href="https://www.linkedin.com/in/sujandutta99/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                style={{ fontSize: "1.5rem" }}
                target="_blank"
                href="https://github.com/Suji04"
              >
                <AiFillGithub />
              </a>
              <a
                style={{ fontSize: "1.8rem" }}
                href="https://medium.com/@sujan99dutta"
                target="_blank"
              >
                <AiOutlineMedium />
              </a>
              <a
                style={{ fontSize: "1.5rem" }}
                href="https://www.instagram.com/normalizednerd/"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
              <a
                style={{ fontSize: "1.5rem" }}
                href="https://twitter.com/normalized_nerd"
                target="_blank"
              >
                <AiOutlineTwitter />
              </a>
            </div>

            <div className="social_links">
              <p>Join me on :</p>
              <a
                style={{ fontSize: "1.8rem" }}
                href="https://discord.com/invite/39YYU936RC"
                target="_blank"
              >
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
