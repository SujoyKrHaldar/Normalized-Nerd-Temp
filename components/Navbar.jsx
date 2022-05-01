import Image from "next/image";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AiFillInfoCircle } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav_logo">
            <Image
              src="/logo.png"
              alt="logo"
              layout="responsive"
              width={65}
              height={30}
              loading="eager"
            />
          </div>

          <div className="nav_info">
            {open && (
              <div className="coming_soon">
                <p>Full website is coming soon ...</p>
                <div className="cross" onClick={() => setOpen(false)}>
                  <GrFormClose />
                </div>
              </div>
            )}

            {!open && (
              <div className="open_info_icon" onClick={() => setOpen(true)}>
                <AiFillInfoCircle />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
