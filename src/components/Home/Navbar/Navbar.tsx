"use client";
import { navLinks } from "@/constant/Constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import "./style-css/Navbar.css";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className={`navbar ${navBg ? "bg-active" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-circle">
            <FaHouse />
          </div>
          <h1 className="logo-text">HomeHub</h1>
        </div>

        {/* Nav Links */}
        <div className="nav-links">
          {navLinks.map((items) => (
            <Link key={items.id} href={items.url}>
              {items.label}
            </Link>
          ))}
        </div>

        {/* Login & Burger Menu */}
        <div className="login-container">
          <div className="login-button">
            <FaUserCircle className="icon" />
            <p>Login / Register</p>
          </div>
          <HiBars3BottomRight onClick={openNav} className="burger-menu" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
