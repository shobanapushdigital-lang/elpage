"use client"

import React, { useState, useEffect, useRef } from "react";
import "./Assets/Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const followerRef = useRef(null);
  const [active, setActive] = useState("home"); // use lowercase

 // ✅ 1. Scroll active navbar
useEffect(() => {
  const sections = document.querySelectorAll("section");

  const handleScroll = () => {
    let current = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


// ✅ 2. Loading animation timer
useEffect(() => {
  const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
  const removeTimer = setTimeout(() => setIsLoading(false), 1700);

  return () => {
    clearTimeout(fadeTimer);
    clearTimeout(removeTimer);
  };
}, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Programmatically assign scroll classes so the HTML structure remains 100% unchanged
    document.querySelectorAll(".facility, .services, .infrastructure, .process, .Industries, .choose, .faq-section, .Electronics, .footer").forEach(el => {
      el.classList.add("scroll-fade");
      observer.observe(el);
    });

    document.querySelectorAll(".services h2, .infrastructure h2, .process h2, .Industries h2, .choose h2, .faq-section h2, .Electronics h2").forEach(el => {
      el.classList.add("scroll-blur");
      observer.observe(el);
    });

    document.querySelectorAll(".card, .infra-card, .serve-card, .choose-card, .faq-item").forEach(el => {
      el.classList.add("scroll-card");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isLoading && (
        <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
          <div className="preloader-content">
            <img src="/logo1.png" alt="Push Digital Logo" className="preloader-logo" />
            <div className="preloader-line">
              <div className="preloader-line-inner"></div>
            </div>
          </div>
        </div>
      )}
      <div className="mouse-follower" ref={followerRef}></div>
      <header className="header">
  <div className="container">

    <div className="logo">
      <img src="/logo1.png" alt="logo" />
    </div>

    <div
      className={`hamburger ${menuOpen ? "open" : ""}`}
      onClick={() => setMenuOpen(prev => !prev)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>



    {/* <nav className={`nav ${menuOpen ? "active" : ""}`}>
  <a href="#Home" onClick={() => setMenuOpen(false)}>Home</a>
  <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
  <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
  <a href="#infrastructure" onClick={() => setMenuOpen(false)}>Infrastructure</a>
  <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
  <a href="#applications" onClick={() => setMenuOpen(false)}>Applications</a>
  <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
  <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
</nav> */}


<nav className={`nav ${menuOpen ? "active" : ""}`}>
  <a
    href="#Home"
    className={active === "home" ? "active-link" : ""}
    onClick={() => {
      setActive("home");
      setMenuOpen(false);
    }}
  >
    Home
  </a>

  <a
    href="#about"
    className={active === "about" ? "active-link" : ""}
    onClick={() => {
      setActive("about");
      setMenuOpen(false);
    }}
  >
    About
  </a>

  <a
    href="#capabilities"
    className={active === "capabilities" ? "active-link" : ""}
    onClick={() => {
      setActive("capabilities");
      setMenuOpen(false);
    }}
  >
    Capabilities
  </a>

  <a
    href="#infrastructure"
    className={active === "infrastructure" ? "active-link" : ""}
    onClick={() => {
      setActive("infrastructure");
      setMenuOpen(false);
    }}
  >
    Infrastructure
  </a>

  <a
    href="#process"
    className={active === "process" ? "active-link" : ""}
    onClick={() => {
      setActive("process");
      setMenuOpen(false);
    }}
  >
    Process
  </a>

  <a
    href="#applications"
    className={active === "applications" ? "active-link" : ""}
    onClick={() => {
      setActive("applications");
      setMenuOpen(false);
    }}
  >
    Applications
  </a>

  <a
    href="#benefits"
    className={active === "benefits" ? "active-link" : ""}
    onClick={() => {
      setActive("benefits");
      setMenuOpen(false);
    }}
  >
    Benefits
  </a>

  <a
    href="#contact"
    className={active === "contact" ? "active-link" : ""}
    onClick={() => {
      setActive("contact");
      setMenuOpen(false);
    }}
  >
    Contact
  </a>
</nav>

    <div className="cta">
      <button
  className="book"
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Book a Consultation
</button>
    </div>

  </div>
</header>

      <section  className="hero" >

        <video autoPlay muted loop className="bg-video">
          <source src="/Hero_video.mp4" type="video/mp4" />
        </video>

        <div className="hero-content" id="Home">
          <h1>Enabling the Future of <br />
              Electronics — <span style={{color:"#00d6ff"}}>Flexible,<br />
              Functional, Scalable</span></h1>
          <p className="p1">From concept to small-scale manufacturing, we empower innovation <br />
             with advanced flexible electronics production and rapid prototyping <br />
             capabilities.</p>
          <div className="features">
  <div className="feature">
    <img src="/Component 1.png" alt="" />
    <span>Printed Electronics</span>
  </div>

  <div className="feature">
    <img src="/Component 2.png" alt="" />
    <span>Flexible Substrates</span>
  </div>

  <div className="feature">
    <img src="/Component 3.png" alt="" />
    <span>Rapid Prototyping</span>
  </div>

  <div className="feature">
    <img src="/Component 4.png" alt="" />
    <span>Batch Production</span>
  </div>
</div>
<div className="btn-group">
 <button
  className="btn-primary"
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Start Your Project
</button>
 <button
  className="btn-outline"
  onClick={() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Explore Technology
</button>
</div>
        </div>


      </section>

     <section className="glass-section">
  <video autoPlay muted loop className="Glass-video">
    <source src="/Glass.mp4" type="video/mp4" />
  </video>

</section>

<section className="facility" id="about">
  <div>
  <h1>About the <span style={{color:"#00D4FF"}}>Facility</span></h1>
  <p>This facility is dedicated to advancing functional and flexible electronics by providing an<br />
integrated ecosystem for design, prototyping, testing, and small-scale production.</p><br />
<p>As industries shift toward lightweight, adaptable, and cost-efficient solutions, we bridge the gap <br />
between innovation and manufacturability—enabling faster development cycles and real-world
application readiness.</p>
</div>
</section>

<section className="services" id="capabilities">
  <h2>What We <span>Do</span></h2>

  <div className="cards">

    <div className="card">
      <img src="/Overlay1.png" alt="" />
      <h3>Printed Electronics</h3>
      <p>Advanced conductive ink printing for circuit fabrication on flexible substrates.</p>
    </div>

    <div className="card">
      <img src="/Overlay.png" alt="" />
      <h3>SMD Assembly</h3>
      <p>Specialized Surface Mount Device integration adapted for flexible materials.</p>
    </div>

    <div className="card">
      <img src="/Overlay2.png" alt="" />
      <h3>Prototyping & Testing</h3>
      <p>Rapid validation, iteration, and proof-of-concept development.</p>
    </div>

    <div className="card">
      <img src="/Overlay3.png" alt="" />
      <h3>Batch Production</h3>
      <p>Low-to-medium volume manufacturing for pilot runs and niche applications.</p>
    </div>

  </div>
</section>
<section className="infrastructure" id="infrastructure">
  <h2>
    Advanced <span>Infrastructure</span>
  </h2>

  <div className="infra-cards">
    <div className="infra-card">
      <img src="/icon1.png" alt="" />
      <h3>Conductive Ink Printing Systems</h3>
    </div>

    <div className="infra-card">
      <img src="/icon2.png" alt="" />
      <h3>Flexible Substrate Handling Equipment</h3>
    </div>

    <div className="infra-card">
      <img src="/icon3.png" alt="" />
      <h3>SMD Assembly Lines</h3>
    </div>

    <div className="infra-card">
      <img src="/icon4.png" alt="" />
      <h3>Testing & Validation Labs</h3>
    </div>
  </div>
</section>

<section className="Lab-v">
  <video autoPlay muted loop className="lab-video">
    <source src="/lab.mp4" type="video/mp4" />
  </video>
</section>

<section className="process" id="process">
  <h2>
    From Idea to <span>Market</span>
  </h2>

  <div className="process-steps">
    <div className="No">1</div>
    <div className="No">2</div>
    <div className="No">3</div>
    <div className="No">4</div>
    <div className="No">5</div>
    <div className="No">6</div>
  </div>

  <hr />

  <div className="process-labels">
    <p>Concept Development</p>
    <p>Design & Simulation</p>
    <p>Prototype Fabrication</p>
    <p>Testing & Validation</p>
    <p>Iteration & Optimization</p>
    <p>Batch Production</p>
  </div>
</section>

<section className="Industries" id="applications">
  <h2>
    Industries We <span>Serve</span>
  </h2>

  <div className="Industries-cards">
    <div className="serve-card">
      <img src="/serve1.png" alt="" />
      <h3>Wearable Technology</h3>
    </div>

    <div className="serve-card">
      <img src="/serve2.png" alt="" />
      <h3>Smart Packaging</h3>
    </div>

    <div className="serve-card">
      <img src="/serve3.png" alt="" />
      <h3>IoT Devices</h3>
    </div>

    <div className="serve-card">
      <img src="/serve4.png" alt="" />
      <h3>Advanced Sensors</h3>
    </div>

    <div className="serve-card">
      <img src="/serve5.png" alt="" />
      <h3>Healthcare Devices</h3>
    </div>

    <div className="serve-card">
      <img src="/serve6.png" alt="" />
      <h3>Automotive Electronics</h3>
    </div>
  </div>
</section>

<section className="choose" id="benefits">
  <h2>
    Why Choose <span>Us</span>
  </h2>

  <div className="choose-cards">
    <div className="choose-card">
      <img src="/choose1.png" alt="" />
      <h3>Faster Time-to-Market</h3>
    </div>

    <div className="choose-card">
      <img src="/choose2.png" alt="" />
      <h3>Cost-Efficient Development</h3>
    </div>

    <div className="choose-card">
      <img src="/choose3.png" alt="" />
      <h3>Flexible & Scalable Production</h3>
    </div>

    <div className="choose-card">
      <img src="/choose4.png" alt="" />
      <h3>End-to-End Support</h3>
    </div>

    <div className="choose-card">
      <img src="/choose5.png" alt="" />
      <h3>Innovation-Driven Ecosystem</h3>
    </div>
    </div>
</section>

 <section className="tshirt-section">
  <video autoPlay muted loop className="tshirt-video">
    <source src="/tshirt.mp4" type="video/mp4" />
  </video>

</section>

<section className="faq-section">
  <p className="faq-label">FAQ</p>
  <h2>Common Questions</h2>

  <div className="faq-list">
    <div className="faq-item">
      <span>What is Electroluminescent Ink?</span>
      <span>⌄</span>
    </div>

    <div className="faq-item">
      <span>What’s the minimum order?</span>
      <span>⌄</span>
    </div>

    <div className="faq-item">
      <span>How fast is prototyping?</span>
      <span>⌄</span>
    </div>

    <div className="faq-item">
      <span>What substrates do you support?</span>
      <span>⌄</span>
    </div>
  </div>
</section>


<section className="Electronics" id="contact">
<h2>Ready to Build the Future of <span>Electronics?</span> </h2>
<div>
<button ><a href="#"></a>Start Your Project</button>
<button ><a href="#"></a>Contact Our Team</button>
</div>
</section>

<footer className="footer">
  <div className="footer-container">

    <div className="footer-left">
      <img src="/logo1.png" alt="Push Digital" className="footer-logo" />
      <p>
        Electroluminescent printing enabling ultra-thin,
        flexible, energy-efficient lighting solutions for
        next-generation electronics, wearables, smart
        surfaces, and innovative product design.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <div className="links-grid">
        <a href="#Home">Home</a>
        <a href="#infrastructure">Infrastructure</a>
        <a href="#about">About</a>
        <a href="#process">Process</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#benefits">Benefits</a>
        <a href="#applications">Applications</a>
        <a href="#contact">Contact</a>
      </div>
    </div>

    <div className="footer-contact">
      <h3>Contact</h3>
      <p> <img src="/location_on.png" alt="location" /> 339/97, Lakshmanaswamy Salai,<br />
         KK Nagar, Chennai - 600 078,<br />
        Tamil Nadu, INDIA.
      </p>

      <p> <img src="/phone.png" alt="phone" /> Landline: (+91) 44 - 42633329</p>
      <p>Mobile: (+91) 98402 64453</p>
      <p> <img src="/email.png" alt="email" /> enquiry@push.digital</p>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 Printing Electronics. All rights reserved.
  </div>
</footer>

    </>
  );
}

export default Home;