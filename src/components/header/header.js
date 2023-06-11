import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/logo_black.jpg";

const Header = () => {
  return (
    <header>
      <div>
        <div className="top-nav">
          <Image src={logo} width={100} height={100} alt="logo" />
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>Events app clone</h1>
      </div>
    </header>
  );
};

export default Header;
