import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import createQueryOptions from '../../queryOptions/createQueryOptions'
import { ChevronDown, ChevronRight, Search, Flag, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  
  const {data: navData} = useQuery(createQueryOptions())


  const toggleMobileDropdown = (index, childIndex = null) => {
    const key = childIndex !== null ? `${index}-${childIndex}` : index.toString();
    setMobileDropdownOpen(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const hasNestedChildren = (item) => {
    return item.children && item.children.some(child => child.children && child.children.length > 0);
  };

  return (
    <div className='fixed top-0 right-0 left-0'>
      <nav className="bg-white  position-fixed shadow-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="https://t3-reva.t3planet.com/fileadmin/t3-reva/Logo/T3_Reva_Final_Logo.svg" 
                alt="Logo"
                className="h-8"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navData?.page?.mainNavigation?.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.link}
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-50"
                  >
                    {item.title}
                    {item.hasSubpages && (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>

                  {/* MEGA MENU for Elements */}
                 {item.title === "Elements" && item.hasSubpages && item.children?.length > 0 && (
  <div className="fixed left-0 top-[64px] w-full bg-white shadow-xl border-t border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-10 z-40">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {item.children.map((child, childIndex) => (
          <div key={childIndex}>
            {/* Column heading */}
            <h3 className="font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              {child.title}
            </h3>
            <ul className="space-y-2">
              {child.children?.map((nestedChild, nestedIndex) => (
                <li key={nestedIndex}>
                  <a
                    href={nestedChild.link}
                    className="block text-[var(--textClr)] hover:text-blue-600 hover:pl-1 transition-all duration-200 text-sm"
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


                  {/* Normal dropdown for other items */}
                  {item.title !== "Elements" && item.hasSubpages && item.children && item.children.length > 0 && (
                    <div className={`absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${
                      hasNestedChildren(item) || item.children.length > 10 ? 'w-96' : 'w-64'
                    } py-2`}>
                      {item.children.map((child, childIndex) => (
                        <div key={childIndex} className="relative group/child">
                          <a
                            href={child.link}
                            className="flex items-center justify-between px-4 py-2 text-[var(--textClr)] hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-md text-sm mx-2"
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
                                  className="block px-4 py-2 text-[var(--textClr)] hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 rounded-md text-sm mx-2"
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

            {/* Right side - Search and Language */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 rounded-md hover:bg-gray-50">
                  <Flag className="h-4 w-4 mr-2" />
                  <span className="text-sm">EN</span>
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 py-2">
                  <button className="flex items-center w-full px-4 py-2 text-[var(--textClr)] hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm">
                    <span className="mr-3">🇺🇸</span>
                    English
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-[var(--textClr)] hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm">
                    <span className="mr-3">🇪🇸</span>
                    Spanish
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-[var(--textClr)] hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 text-sm">
                    <span className="mr-3">🇫🇷</span>
                    French
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (unchanged for now, still accordion style) */}
      </nav>
    </div>
  )
}

export default Navbar
