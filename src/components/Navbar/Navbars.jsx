import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import createQueryOptions from "../../queryOptions/createQueryOptions";
import { IoIosMenu, IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { TbZoomCancel } from "react-icons/tb";
import { ChevronRight, X } from "lucide-react";
import { ThemeContext } from "../../ThemeContext/ThemeContextProvider";

const Navbars = () => {
  const { data: navData } = useQuery(createQueryOptions());
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleLang, setToggleLang] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
    const {showLang,showSearch} = useContext(ThemeContext)
    console.log(showLang , showSearch)
  const toggleMobileDropdown = (key) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const hasNestedChildren = (item) => {
    return (
      item.children &&
      item.children.some((child) => child.children && child.children.length > 0)
    );
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div
          className="flex justify-between items-center py-[20px] px-[10px] lg:px-1"
          style={{ height: "90px" }}
        >
          {/* Logo */}
          <a href="/">
            <img
              loading="lazy"
              width={100}
              height={50}
              src="https://t3-reva.t3planet.com/fileadmin/t3-reva/Logo/T3_Reva_Final_Logo.svg"
              alt="Logo"
              className="h-8"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            {navData?.page?.mainNavigation?.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.link}
                  className="flex items-center px-4 py-2 text-[var(--textClr)] hover:text-black transition-colors duration-200 rounded-md hover:bg-gray-50 font-light tracking-normal"
                  style={{ padding: "32px 14px" }}
                >
                  {item.title}
                  {item.children && <IoIosArrowDown className="ml-2" />}
                </a>

                {/* Mega Menu for Elements */}
                {item.title === "Elements" &&
                  item.hasSubpages &&
                  item.children?.length > 0 && (
                    <div className="fixed left-0 w-full bg-white shadow-xl border-t border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-10 z-40">
                      <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                          {item.children.map((child, childIndex) => (
                            <div key={childIndex}>
                              <h3 className="font-semibold text-[var(--primaryClr)] mb-4 border-b border-gray-100 pt-5 pb-3 mt-4">
                                {child.title}
                              </h3>
                              <ul className="space-y-2">
                                {child.children?.map((nestedChild, nestedIndex) => (
                                  <li key={nestedIndex}>
                                    <a
                                      href={nestedChild.link}
                                      className="block text-[var(--textClr)]"
                                    >
                                      {nestedChild.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                {/* Normal Dropdown */}
                {item.title !== "Elements" &&
                  item.hasSubpages &&
                  item.children &&
                  item.children.length > 0 ? (
                    <div
                      className={`absolute top-full left-0 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${
                        hasNestedChildren(item) || item.children.length > 10
                          ? ""
                          : "w-64"
                      } py-2`}
                      style={{ padding: "3px 0 10px 10px" }}
                    >
                      {item.children.map((child, childIndex) => (
                        <div key={childIndex} className="relative group/child">
                          <a
                            href={child.link}
                            className="flex items-center justify-between px-4 py-2 text-[var(--textClr)]"
                          >
                            <span>{child.title}</span>
                            {child.children && child.children.length > 0 && (
                              <ChevronRight className="h-4 w-4 ml-2" />
                            )}
                          </a>
                          {child.children && child.children.length > 0 && (
                            <div className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-300 transform translate-x-2 group-hover/child:translate-x-0 py-2">
                              {child.children.map((nestedChild, nestedIndex) => (
                                <a
                                  key={nestedIndex}
                                  href={nestedChild.link}
                                  className="block px-4 py-2 text-[var(--textClr)]"
                                >
                                  {nestedChild.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : " "}
              </div>
            ))}

            {/* Search Toggle (Desktop) */}
       {
        showSearch && (
                 <div>
              {!toggleSearch ? (
                <button
                  onClick={() => setToggleSearch(!toggleSearch)}
                  className="flex items-center px-4 py-2 text-xl text-black hover:bg-gray-50"
                  style={{ padding: "32px 14px" }}
                >
                  <IoIosSearch />
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => setToggleSearch(!toggleSearch)}
                    className="flex items-center px-4 py-2 text-xl text-black hover:bg-gray-50"
                    style={{ padding: "32px 14px" }}
                  >
                    <TbZoomCancel />
                  </button>
                  <div className="absolute top-[100%] bg-white border-t border-[#e7e7e7] right-10">
                    <form className="flex items-center gap-1 p-2">
                      <input
                        placeholder="search..."
                        type="text"
                        className="bg-[var(--textClr)]/10 text-[var(--textClr)] border-none"
                      />
                      <button className="text-xl text-black">
                        <IoIosSearch />
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
        )
       }

            {/* Language Toggle (Desktop) */}
        { showLang && (
                <div>
              {!toggleLang ? (
                <button
                  onClick={() => setToggleLang(!toggleLang)}
                  className="flex items-center px-4 py-2 text-xl text-black hover:bg-gray-50"
                  style={{ padding: "32px 0px 32px 14px" }}
                >
                  <img
                    src="https://t3-reva.vercel.app/_next/static/media/US.89d51ae2.png"
                    className="w-[19px] h-[19px]"
                    alt="EN"
                  />
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => setToggleLang(!toggleLang)}
                    className="flex items-center px-4 py-2 text-xl text-black hover:bg-gray-50"
                    style={{ padding: "32px 0px 32px 14px" }}
                  >
                    <img
                      src="https://t3-reva.vercel.app/_next/static/media/US.89d51ae2.png"
                      className="w-[19px] h-[19px]"
                      alt="EN"
                    />
                  </button>
                  <div className="absolute top-[100%] bg-white border-t border-[#e7e7e7] right-20">
                    <div className="flex flex-col gap-1 py-2">
                      <button className="flex items-center px-4 py-2 text-xl text-black hover:bg-gray-50">
                        <img
                          src="https://t3-reva.vercel.app/_next/static/media/US.89d51ae2.png"
                          className="w-[19px] h-[19px]"
                          alt="EN"
                        />
                      </button>
                      <button className="flex items-center px-4 py-2 text-xl text-black hover:bg-gray-50">
                        <img
                          src="https://t3-reva.vercel.app/_next/static/media/DE.e6358f84.png"
                          className="w-[19px] h-[19px]"
                          alt="DE"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
        )}
          </div>

          {/* Mobile Section */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Search */}
   { showSearch && (
             <div>
              {!toggleSearch ? (
                <button
                  onClick={() => setToggleSearch(!toggleSearch)}
                  className="text-2xl"
                >
                  <IoIosSearch className="3xl"/>
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => setToggleSearch(!toggleSearch)}
                    className="text-2xl"
                  >
                    <TbZoomCancel className="3xl"/>
                  </button>
                  <div className="absolute top-[100%] bg-white border-t border-[#e7e7e7] right-10">
                    <form className="flex items-center gap-1 p-2">
                      <input
                        placeholder="search..."
                        type="text"
                        className="bg-[var(--textClr)]/10 text-[var(--textClr)] border-none"
                      />
                      <button className="text-xl text-black">
                        <IoIosSearch />
                      </button>
                    </form>
                  </div>
                </div>
              )}
              
            </div>
   )}

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-3xl"
            >
              {isMobileMenuOpen ? <X className="3xl"/> : <IoIosMenu className="3xl"/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto px-4 py-6 space-y-4 shadow-lg">
            {navData?.page?.mainNavigation?.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleMobileDropdown(index)}
                  className="flex items-center justify-between w-full text-left px-2 py-2 text-[var(--textClr)] hover:text-black hover:bg-gray-50 rounded"
                >
                  {item.title}
                  {item.children && (
                    <IoIosArrowDown
                      className={`ml-2 transform ${
                        mobileDropdownOpen[index] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.children && mobileDropdownOpen[index] && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.children.map((child, childIndex) => (
                      <div key={childIndex}>
                        <button
                          onClick={() =>
                            toggleMobileDropdown(`${index}-${childIndex}`)
                          }
                          className="flex items-center justify-between w-full text-left px-2 py-1 text-[var(--textClr)] hover:text-black"
                        >
                          {child.title}
                          {child.children && (
                            <IoIosArrowDown
                              className={`ml-2 transform ${
                                mobileDropdownOpen[`${index}-${childIndex}`]
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          )}
                        </button>

                        {child.children &&
                          mobileDropdownOpen[`${index}-${childIndex}`] && (
                            <div className="pl-4 mt-1 space-y-1">
                              {child.children.map((nestedChild, nestedIndex) => (
                                <a
                                  key={nestedIndex}
                                  href={nestedChild.link}
                                  className="block px-2 py-1 text-[var(--textClr)] hover:text-black"
                                >
                                  {nestedChild.title}
                                </a>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbars;
