import React, { ReactElement } from "react";
import Link from "next/link";
import { navLinks } from "@/constant/Constant";
import { CgClose } from "react-icons/cg";
import './style-css/MobileNav.css'

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props): ReactElement => {
  const navOpen = showNav ? "visible" : "hidden";

  return (
    <div className={`overlay ${navOpen}`}>
      {/* navLinks */}
      <div className={`nav-container ${navOpen}`}>
        {navLinks.map((items) => {
          return (
            <Link key={items.id} href={items.url}>
              <p className="nav-link">{items.label}</p>
            </Link>
          );
        })}

        {/* close button */}
        <CgClose onClick={closeNav} className="close-btn" />
      </div>
    </div>
  );
};

export default MobileNav;
