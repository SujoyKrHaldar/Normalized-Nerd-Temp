import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { IoMdDocument } from "react-icons/io";

function Body() {
  return (
    <>
      <div className="section">
        <div className="section_cover">
          <Image
            src="/Landing.png"
            alt="Sujon Dutta portfolio"
            layout="fill"
            loading="eager"
            objectFit="cover"
          />
        </div>

        <div className="svg_cover"></div>

        <div className="play_btn_cover">
          <a
            className="play_btn"
            href="https://www.youtube.com/c/NormalizedNerd"
            target="_blank"
          >
            <BsFillPlayFill />
          </a>
        </div>

        <div className="container">
          {/* <div className="play_btn_cover">
            <a
              className="play_btn"
              href="https://www.youtube.com/c/NormalizedNerd"
              target="_blank"
            >
              <BsFillPlayFill />
            </a>
          </div> */}
          <div className="section_content">
            <div className="profile_pic">
              <img src="/profile_pic.jpg" alt="Sujon Dutta portfolio" />
            </div>
            <h1 className="tag">Hello, People from the future</h1>
            <h1>
              I am Sujan Dutta
              <span>
                aka the <span className="span_red">Normalized Nerd</span>
              </span>
            </h1>
            <p>
              I love to create educational videos on Machine Learning and
              Creative Coding. Start learning with me by{" "}
              <span className="span_red">Subscribing</span> to this channel{" "}
              <span className="span_red">❤</span>
            </p>
            <div className="link_btns">
              <a
                className="btn primary"
                target="_blank"
                href="mailto:sujan99dutta@gmail.com"
              >
                <div className="icons">
                  <HiMail />
                </div>
                Contact me{" "}
              </a>
              <a
                className="btn secondary"
                target="_blank"
                href="/Resume_Sujan_Dutta.pdf"
              >
                <div className="icons">
                  <IoMdDocument />
                </div>
                Resume{" "}
              </a>
            </div>

            <div className="arrow_svg">
              <img src="/arrow_svg.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
