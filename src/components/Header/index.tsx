"use client";

import React, { useEffect, useState } from "react";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div";
import DropDown from "./DropDown";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Spacing from "../Spacing";
import { X } from "lucide-react";
interface HeaderProps {
  variant?: string;
}

export default function Header({ variant }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [loginMenuShow, setLoginMenuShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //await sendEmail(formData.email, formData.subject, formData.description  , formData.fullName, formData.mobile)
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
    setLoginMenuShow(false);
  };
  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase w-full lg:pl-24 lg:pr-24 ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link href="/" className="cs-site_branding">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li className="menu-item">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                      {/* <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/"
                              onClick={() => setMobileToggle(false)}
                            >
                              Main Home
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="photography-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Photography Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="creative-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Creative Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="digital-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Digital Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="marketing-agency"
                              onClick={() => setMobileToggle(false)}
                            >
                              Marketing Agency
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="showcase-portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Showcase Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="case-study-showcase"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Showcase
                            </Link>
                          </li>
                        </ul>
                      </DropDown> */}
                    </li>
                    <li>
                      <Link
                        href="/about"
                        onClick={() => setMobileToggle(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/career"
                        onClick={() => setMobileToggle(false)}
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industrial-blogs"
                        onClick={() => setMobileToggle(false)}
                      >
                        Industrial Blogs
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="team" onClick={() => setMobileToggle(false)}>
                        Team
                      </Link>
                    </li> */}
                    <li className="menu-item">
                      <Link
                        href="/service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </Link>
                      {/* <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Service Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown> */}
                    </li>
                    {/* <li className="menu-item-has-children">
                      <Link
                        href="/portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Portfolio
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li> */}
                    <li className="menu-item">
                      <Link href="/blog" onClick={() => setMobileToggle(false)}>
                        Blog
                      </Link>
                      {/* <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/blog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog/blog-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown> */}
                    </li>
                    {/* <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Pages
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/team"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/team/team-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-study-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li> */}
                    <li>
                      <Link
                        href="/contact"
                        onClick={() => setMobileToggle(false)}
                      >
                        Contact
                      </Link>
                    </li>
                    {mobileToggle && (
                      <li>
                        <Link
                          href="#"
                          onClick={() => {
                            setLoginMenuShow(!loginMenuShow);
                          }}
                        >
                          Login / Signup
                        </Link>
                      </li>
                    )}
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setLoginMenuShow(true)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link href="/" className="cs-site_branding">
            <img src="/images/footer_logo.svg" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          {/* <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div> */}
          {/* <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div> */}
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
      {loginMenuShow && (
        <Div
          className="absolute min-w-screen min-h-screen  container flex  justify-center items-center "
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            minHeight: "100vh",
            zIndex: 999,
            minWidth: "100vw",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <X
            className="text-white absolute"
            onClick={() => {
              setLoginMenuShow(false);
            }}
            style={{ fontSize: "2rem", top: "10%", left: "90%" }}
          />

          <Div
            className="  p-8  flex  justify-center items-center rounded-3xl 	"
            style={{
              opacity: 1,
              backgroundColor: "rgb(24,24,24)",
              width: "400px",
            }}
          >
            <form action="#" className="row" onSubmit={handleSubmit}>
              <Div className="cs-side_header_shape" />

              <h2
                className="cs-side_header_heading col-sm-12"
                style={{
                  alignSelf: "center",
                }}
              >
                Login / SignUp
              </h2>
              <hr className="border-1 border-gray-50 pb-8" />
              <Div className="col-sm-12  ">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>

              <Div className="col-sm-12">
                <label className="cs-primary_color">Password*</label>
                <input
                  type="password"
                  className="cs-form_field"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>

              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Login / SignUp</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>

          <Div className="cs-side_header_shape" />
        </Div>
      )}
    </>
  );
}
