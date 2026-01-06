import React, { useEffect } from "react";
import "./Gallery.css";

const IMAGES = [
  // Row 1
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  // Row 2
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a",
  "https://images.unsplash.com/photo-1618220179428-22790b461013",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea",
  // Row 3
  "https://images.unsplash.com/photo-1617806118233-18e1de247200",
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",
  "https://images.unsplash.com/photo-1617104678098-de229db51175",
  // Row 4
  "https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
];

const Gallery = () => {
  useEffect(() => {
    // Scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    const onScroll = () => {
      reveals.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Lightbox events handled with state-like DOM manipulation
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    const clickHandlers = [];
    document.querySelectorAll(".gallery-card img").forEach((img) => {
      const handler = () => {
        if (lightbox && lightboxImg) {
          lightbox.style.display = "flex";
          lightboxImg.src = img.src;
        }
      };
      img.addEventListener("click", handler);
      clickHandlers.push({ img, handler });
    });

    const closeHandler = () => {
      if (lightbox) lightbox.style.display = "none";
    };
    if (lightbox) lightbox.addEventListener("click", closeHandler);

    return () => {
      clickHandlers.forEach(({ img, handler }) =>
        img.removeEventListener("click", handler)
      );
      if (lightbox) lightbox.removeEventListener("click", closeHandler);
    };
  }, []);

  return (
    <div className="gallery-page">
      {/* HEADER */}

      {/* HERO */}
      <section className="hero reveal active">
        <div className="hero-content">
          <h1>Step Into Luxury Living</h1>
          <p>
            Experience refined elegance through curated decor, from serene
            Buddha statues to exquisite floral accents that elevate your space.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section" id="gallery">
        <h2 className="section-title reveal">Store Gallery</h2>

        <div className="gallery-grid">
          {IMAGES.map((src, idx) => (
            <div key={idx} className="gallery-card reveal">
              <img src={src} alt={`Gallery ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="extra-section reveal">
        <h2>Experience Home Decor Differently</h2>
        <p>
          Our store is not just a place to buy decor; it’s a journey into
          refined living. Every display, every corner, and every curated piece
          reflects our commitment to craftsmanship, quality, and timeless
          elegance. Step in and feel the inspiration, the balance, and the
          warmth that turns a house into a home.
        </p>
      </section>

      {/* LIGHTBOX */}
      <div id="lightbox">
        <span className="close">×</span>
        <img className="lightbox-img" id="lightbox-img" alt="Preview" />
      </div>
    </div>
  );
};

export default Gallery;
