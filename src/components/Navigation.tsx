import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleNavClick = (e, target) => {
    e.preventDefault();
    if (target === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else if (target === 'about') {
      const goToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          // Force scroll to the about section regardless of current position
          window.scrollTo({
            top: aboutSection.offsetTop - 20,
            behavior: 'smooth'
          });
        }
      };
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(goToAbout, 150);
      } else {
        goToAbout();
      }
    } else if (target === 'project') {
      const goToProject = () => {
        const projectSection = document.getElementById('project');
        if (projectSection) {
          window.scrollTo({
            top: projectSection.offsetTop,
            behavior: 'smooth'
          });
        }
      };
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(goToProject, 100);
      } else {
        goToProject();
      }
    } else if (target === 'deep-dive') {
      navigate('/deep-dive');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (target === 'contact') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    }
  };
  return <header className={`w-full bg-gradient-to-r from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] ${sticky ? 'fixed top-0 shadow-lg z-50' : ''}`}>
      <nav className="container mx-auto px-4 lg:px-6 py-4 flex justify-between items-center">
        <div className="font-semibold text-xl text-white">Ariela Baron</div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="/" onClick={e => handleNavClick(e, 'home')} className="text-white hover:text-opacity-80 transition-colors">
            Home
          </a>
          <a href="/#about" onClick={e => handleNavClick(e, 'about')} className="text-white hover:text-opacity-80 transition-colors">
            About
          </a>
          <a href="/#project" onClick={e => handleNavClick(e, 'project')} className="text-white hover:text-opacity-80 transition-colors">
            Project
          </a>
          <a href="/deep-dive" onClick={e => handleNavClick(e, 'deep-dive')} className="text-white hover:text-opacity-80 transition-colors">
            Deep Dive
          </a>
          <a href="/#contact" onClick={e => handleNavClick(e, 'contact')} className="text-white hover:text-opacity-80 transition-colors">
            Contact
          </a>
        </div>
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && <div className="md:hidden bg-gradient-to-r from-[#1a2a3d] via-[#1f4d4d] to-[#1a2a3d] w-full">
          <div className="container mx-auto px-4 lg:px-6 py-4 flex flex-col space-y-4">
            <a href="/" onClick={e => handleNavClick(e, 'home')} className="text-white hover:text-opacity-80 transition-colors">
              Home
            </a>
            <a href="/#about" onClick={e => handleNavClick(e, 'about')} className="text-white hover:text-opacity-80 transition-colors">
              About
            </a>
            <a href="/#project" onClick={e => handleNavClick(e, 'project')} className="text-white hover:text-opacity-80 transition-colors">
              Project
            </a>
            <a href="/deep-dive" onClick={e => handleNavClick(e, 'deep-dive')} className="text-white hover:text-opacity-80 transition-colors">
              Deep Dive
            </a>
            <a href="/#contact" onClick={e => handleNavClick(e, 'contact')} className="text-white hover:text-opacity-80 transition-colors">
              Contact
            </a>
          </div>
        </div>}
    </header>;
};
export default Navigation;