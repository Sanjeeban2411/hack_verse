import React, { Component, useState } from "react";
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Link } from "react-router-dom";
import Web3 from "web3";

export default function DashboardSideBar() {
  const web3 = new Web3(window.ethereum);
  const [Active, setActive] = useState(0);
  const [sideBarActive, setsideBarActive] = useState(true);
  function toggleActive() {
    setsideBarActive(!sideBarActive);
  }
  const changeActive = (index) => {
    if (index == Active) {
      setActive(0);
    } else {
      setActive(index);
    }
  };

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log("Connected to Metamask");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  return (
    <>
      <div id="sidebar" class={`${sideBarActive ? "active" : ""}`}>
        <ScrollBar component="div">
          <div class={`sidebar-wrapper `} id="side-bar-wrapper">
            <div class={`sidebar-header `}>
              <div class="d-flex justify-content-center">
                <div class="logo0">
                  {/* <Link to="/"><img src="assets/images/logo/logo-1.png" alt="Logo" srcset="" /></Link> */}
                </div>
                <div class="toggler">
                  <Link
                    to="#"
                    onClick={toggleActive}
                    class="sidebar-hide d-xl-none d-block"
                  >
                    <i class="bi bi-x bi-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="sidebar-menu">
              <ul class="menu">
                <li class="sidebar-title">Menu</li>
                <li class="sidebar-item active ">
                  {/* <Link to="#" class='sidebar-link' style={{backgroundColor:"#F5841F"}}> */}
                  <button
                    class="sidebar-link"
                    style={{
                      backgroundColor: "#F5841F",
                      padding: ".7rem 1rem",
                      margin: "auto",
                      paddingLeft: "15px",
                      paddingRight: "55px",
                    }}
                    onClick={connectMetamask}
                  >
                    <span>Connect Metamask</span>
                  </button>
                  {/* </Link> */}
                </li>
                <li class="sidebar-item active ">
                  <Link to="/dashboard" class="sidebar-link">
                    <i class="bi bi-grid-fill"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>

                <li class="sidebar-item  has-sub">
                  <Link
                    to="#"
                    class="sidebar-link"
                    onClick={() => changeActive(2)}
                  >
                    <i class="bi bi-stack"></i>
                    <span>KYC</span>
                  </Link>
                  <ul className={`submenu ${Active == 2 ? "active" : ""}`}>
                    <li class="submenu-item ">
                      <Link to="/allshg">Your KYC</Link>
                    </li>
                  </ul>
                </li>

                <li class="sidebar-item  has-sub">
                  <Link
                    to="#"
                    class="sidebar-link"
                    onClick={() => changeActive(1)}
                  >
                    <i class="bi bi-stack"></i>
                    <span>Loans</span>
                  </Link>
                  <ul className={`submenu ${Active == 1 ? "active" : ""}`}>
                    <li class="submenu-item ">
                      <Link to="/apply-loan">Apply Loans </Link>
                    </li>
                    <li class="submenu-item ">
                      <Link to="/all-member">All Loans </Link>
                    </li>
                    <li class="submenu-item ">
                      <Link to="/all-member">Issued Loans </Link>
                    </li>
                    <li class="submenu-item ">
                      <Link to="/all-member">Pending Loans </Link>
                    </li>
                    <li class="submenu-item ">
                      <Link to="/all-member">Repay Loans </Link>
                    </li>
                    <li class="submenu-item ">
                      <Link to="/all-member">Rejected Loans </Link>
                    </li>
                  </ul>
                </li>

                {/* <li class="sidebar-item  has-sub">
                                <Link to="#" class='sidebar-link' onClick={() => changeActive(3)}>
                                    <i class="bi bi-collection-fill"></i>
                                    <span>News</span>
                                </Link>
                                <ul className={`submenu ${Active == 3 ? "active" : ""}`}>
                                    <li class="submenu-item ">
                                        <Link to="/all-news-active">All News Groups</Link>
                                    </li>
                                    <li class="submenu-item ">
                                        <Link to="/all-news-request">All N.G Request</Link>
                                    </li>
                                    <li class="submenu-item ">
                                        <Link to="/all-news">List All News</Link>
                                    </li>
                                </ul>
                            </li> */}

                {/* 
                            <li class="sidebar-title">Admin &amp; More</li>

                            <li class="sidebar-item  has-sub">
                                <Link to="#" class='sidebar-link'>
                                    <i class="bi bi-hexagon-fill"></i>
                                    <span>Manage Admins</span>
                                </Link>
                                <ul class="submenu ">
                                    <li class="submenu-item ">
                                        <Link to="form-element-input.html">Input</Link>
                                    </li>
                                    <li class="submenu-item ">
                                        <Link to="form-element-input-group.html">Input Group</Link>
                                    </li>
                                    <li class="submenu-item ">
                                        <Link to="form-element-select.html">Select</Link>
                                    </li>
                                    <li class="submenu-item ">
                                        <Link to="form-element-radio.html">Radio</Link>
                                    </li>
                                    <li class="submenu-item ">
                                        <Link to="form-element-checkbox.html">Checkbox</Link>
                                    </li>
                                    <li class="submenu-item ">
                                        <Link to="form-element-textarea.html">Textarea</Link>
                                    </li>
                                </ul>
                            </li>

                            <li class="sidebar-item  ">
                                <Link to="#" class='sidebar-link'>
                                    <i class="bi bi-file-earmark-medical-fill"></i>
                                    <span>Manage Request</span>
                                </Link>
                            </li>

                            <li class="sidebar-item  has-sub">
                                <Link to="#" class='sidebar-link'>
                                    <i class="bi bi-pen-fill"></i>
                                    <span>Manage Users</span>
                                </Link>
                                <ul class="submenu ">
                                    <li class="submenu-item ">
                                        <Link to="form-editor-quill.html">Quill</Link>
                                    </li>
                                    <li class="submenu-item ">
                                        <Link to="form-editor-ckeditor.html">CKEditor</Link>
                                    </li>
                                    <li class="submenu-item ">
                                        <Link to="form-editor-summernote.html">Summernote</Link>
                                    </li>
                                    <li class="submenu-item ">
                                        <Link to="form-editor-tinymce.html">TinyMCE</Link>
                                    </li>
                                </ul>
                            </li>
                             */}
              </ul>
            </div>
            <button class="sidebar-toggler btn x">
              <i data-feather="x"></i>
            </button>
          </div>
        </ScrollBar>
      </div>
      <div className="main">
        <header class="mb-3">
          <Link onClick={toggleActive} class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
          </Link>
        </header>
      </div>
    </>
  );
}
