import React from 'react'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsapp,
  FaTwitter
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./FooterStyle.css";

export default function Footer() {
  return (
    <>
    <footer className='footer_container'>
      
      <div className='footer_main'>
        <ul>
         <h4> Shops </h4>
        <li> <Link href="./Men"> Mens shoes </Link>  </li>
      
        <li> <Link href="#"> Women shoes </Link>  </li>
        <li> <Link href="#"> Kids shoes </Link>  </li>
        <li> <Link href="#"> Brands </Link> </li>
        </ul>

<div className='footer_section2'>

<ul>
         <h4> Company </h4>
        <li> <Link href="#"> Connect with shoesHub </Link>  </li>
      
        <li> <Link href="#"> About metro shoesHub </Link>  </li>
        <li> <Link href="#"> Careers </Link>  </li>
        <li> <Link href="#">FAQs </Link>  </li>


        </ul>

</div>
<div className='footer_section3'>

<ul>
         <h4> More info </h4>
        <li> <Link href="#"> Secure shopping </Link>  </li>
      
        <li> <Link href="#"> Shipping & return policy</Link>  </li>
        <li> <Link href="#"> Term & conditions </Link>  </li>
        <li> <Link href="#">FAQs </Link>  </li>


        </ul>

</div>
<div className='footer_section4'>

<ul>
         <h4> Partners </h4>
        <li> <Link href="#"> Mochi shoes </Link>  </li>
      
        <li> <Link href="#"> Bilon </Link>  </li>
        


        </ul>

</div>



      </div>

      <div className='icons_footer '>
      <h4>FOLLOWS  US </h4>
      <ul className="social-media-desktop-footer">
        
            <li>
              <Link
                href="https://instagram.com/_rahilll_77?igshid=YmMyMTA2M2Y="
                target="_rahill">
                <FaFacebookSquare className="facebook1" />
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/_rahilll_77?igshid=YmMyMTA2M2Y="
                target="_rahill">
                <FaInstagramSquare className="instagram1" />
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/_rahilll_77?igshid=YmMyMTA2M2Y="
                target="_rahill">
                <FaWhatsapp className="whatsapp1" />
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/_rahilll_77?igshid=YmMyMTA2M2Y="
                target="_rahill">
                <FaTwitter className="twitter1" />
              </Link>
            </li>

          </ul>

        


      </div>
     
    </footer>
<div className='end_footer'>
    <h5> © 2022   SHOESHUB BRANDS LIMITED. ALL RIGHTS RESERVED. </h5>
    </div>

    </>
  )
}
