import Link from 'next/link';
import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>E</span>-Shop</h6>
            <p>House My Brand mendesain pakaian untuk yang muda, tua & semua orang di antaranya – tetapi yang terpenting, untuk yang modis</p>
            {/* <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul> */}
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><Link href="#">Order Status</Link></li>
              <li><Link href="#">Shipping and Delivery</Link></li>
              <li><Link href="#">Returns</Link></li>
              <li><Link href="#">Payment options</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><Link href="#">Gift Cards</Link></li>
              <li><Link href="#">Find a store</Link></li>
              <li><Link href="#">Newsletter</Link></li>
              <li><Link href="#">Bacome a member</Link></li>
              <li><Link href="#">Site feedback</Link></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><Link href="#">store@uikit.com</Link></li>
              <li><Link href="#">Hotline: +1 131 138 138</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY ICEO.CO - ©</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer