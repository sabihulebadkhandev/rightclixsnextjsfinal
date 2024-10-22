import useSticky from "@/hooks/use-sticky";
import Offcanvus from "@/common/offcanvus";
import SearchPopup from "@/modals/search-popup";
import SearchIconTwo from "@/svg/search-icon-2";
import UserIcon from "@/svg/user-icon";
import { gsap } from "gsap";
import Link from "next/link";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import NavMenu from "./nav-menu";
import Image from "next/image";

// import logo from "../../../public/assets/img/logo/logo-black.png";
import mainLogo from "../../../public/assets/img/logo/mainlogo.png";
import { SocialLinks, SocialLinksTwo } from "@/common/social-links";
import PhoneFour from "@/svg/phone-4";
import WhatsappIcon from "@/svg/whatsapp-icon";
import ContactUsFormMuz from "@/forms/contact-us-form-muz";

const Header = () => {
  const { sticky } = useSticky();
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen((prevState) => !prevState);
  };

  // gsa use
  let g_timline = new gsap.timeline();
  let header_top_animation = useRef(null);

  useEffect(() => {
    gsap.from(header_top_animation, {
      opacity: 0,
      y: "20px",
      delay: 1.05,
    });
    gsap.to(header_top_animation, {
      opacity: 1,
      y: "0px",
      delay: 1.05,
    });
  }, []);

  return (
    <>
      <header className="header-bottom__transparent z-index-6 tp-header-height">
        <div
          className="header-top__area header-top__space z-index-3 d-none d-md-block tp-header-top-animation"
          ref={(el) => (header_top_animation = el)}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="header-top__link tp-team-social">
                  <SocialLinksTwo />
                </div>
              </div>
              <div className="col-6">
                <div className="header-top__support text-end">
                  <span>
                    Speak to an Expert:{" "}
                    <Link href="tel:+971501435647">+971 501 435 647</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="header-sticky"
          className={`header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5 ${
            sticky && "header-sticky"
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  <Link href="/">
                    <Image src={mainLogo} alt="theme-pure" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
                <div className="header-bottom__main-menu">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                  <div className="header-bottom__action">
                    {/* <a className="d-none d-md-inline-block search-open-btn"
                                    onClick={() => setSearchOpen(true)} > 
                                    <SearchIconTwo />
                                 </a> */}
                    <Link
                      className="d-none d-lg-inline-block"
                      href="tel:+971501435647"
                    >
                      <PhoneFour />
                    </Link>
                    <Link
                      className="d-none d-lg-inline-block last-child"
                      href="https://wa.me/971501435647?text=Hello%20DigiExpo!%20%F0%9F%91%8B"
                    >
                      <WhatsappIcon />
                    </Link>
                  </div>
                  <div className="header-bottom__btn d-flex align-items-center">
                    <Link
                      className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block"
                      href="#"
                      onClick={toggleForm}
                    >
                      <span className="white-text">Let's Talk</span>
                      <b></b>
                    </Link>
                    <a
                      className="header-bottom__bar d-lg-none tp-menu-bar"
                      onClick={() => setSidebarOpen(true)}
                    >
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="formContainer"
          className={`form-container ${isFormOpen ? "open" : ""}`}
        >
          <p className="tp-section-title-4 text-white">Let's Talk</p>
          <span onClick={toggleForm} className="close-btn">
            &times;
          </span>
          <div className="form-content">
            <ContactUsFormMuz />
          </div>
        </div>
      </header>
      <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default Header;
