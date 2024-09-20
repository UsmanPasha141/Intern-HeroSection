////////////////////////////////////////////////////////////////////////////////////\
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos"; // Import the AOS library
import "aos/dist/aos.css"; // Import the AOS styles
import Typed from "typed.js";

function HeroSection() {
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  // Create a reference for the span element where typing will occur
  const typedElementRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedElementRef.current, {
      strings: ["FrontEnd Developer", "Freelancer", "Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    // Cleanup the typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  // Header Toggle Function

  // Scroll Top Toggle Function
  const handleScrollTopVisibility = () => {
    if (window.scrollY > 100) {
      setScrollTopVisible(true);
    } else {
      setScrollTopVisible(false);
    }
  };

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Effect for scroll and load listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScrollTopVisibility);
    window.addEventListener("load", handleScrollTopVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollTopVisibility);
      window.removeEventListener("load", handleScrollTopVisibility);
    };
  }, []);

  // Effect to initialize AOS library for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <img
            src="src/assets/img/hero-bg.jpg"
            alt="notfound"
            data-aos="fade-in"
          />

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <h2>Usman Pasha</h2>
            <p>
              I'm a{" "}
              <span
                className="typed"
                ref={typedElementRef}
                style={{ whiteSpace: "pre" }}
              ></span>
            </p>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {scrollTopVisible && (
        <div className="scroll-top active" onClick={scrollToTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default HeroSection;
