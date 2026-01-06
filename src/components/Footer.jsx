import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="decor-footer">
      <div className="footer-deal">
        <h3>WE DEAL IN</h3>
        <p>
          Artificial Grass <span>|</span> Artifacts <span>|</span> Artificial Flowers <span>|</span> 
          Artificial Plants <span>|</span> Vertical Grass <span>|</span> Blinds <span>|</span> 
          Exterior Blinds <span>|</span> Curtains <span>|</span> Handicrafts <span>|</span> 
          Statues <span>|</span> Planters <span>|</span> Pebble Stones <span>|</span> 
          Indoor Outdoor Fountains <span>|</span> Vases Pots <span>|</span> Wall Floor Carpets <span>|</span> 
          Wall Papers <span>|</span> Wall Murals <span>|</span> Wall Decor <span>|</span> 
          Wall Clocks <span>|</span> Wet Cloth Hangers <span>|</span> Invisible Grills <span>|</span> 
          VOX Ceiling Designs Wall Panels <span>|</span> Mosquito Sliding Doors & many more
        </p>
        <h4>WE DO INTERIOR DESIGNS AND WORKS</h4>
      </div>
      
      <div className="footer-top">
        <div className="footer-col">
          <h4>SUPPORT</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/gallery">Stores</a></li>
            <li><a href="#">The Blog</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>GET IN TOUCH</h4>
          <p><i className="fa-brands fa-whatsapp"></i> +91 96661 93636</p>
          <p><i className="fa-regular fa-envelope"></i> homedecor3636@gmail.com</p>
          <p><i className="fa-solid fa-location-dot"></i> Opp. Old Murali Theatre,<br/>Women’s College Road,<br/>Srikakulam – 532001</p>
        </div>
        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <div className="footer-social">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-brand-text">HOME DECOR</div>
      <div className="footer-bottom">
        <p>© 2026 Home Decor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
