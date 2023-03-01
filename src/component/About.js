import React from "react";
import Header from "./Header";
import "./AboutStyle.css";
import Footer from "./Footer";


function About() {
  return (
    <div>
      <Header />

      <h1 className="aboutOne">
        Welcome to <span>rShoesHub</span> Shoes
      </h1>

      <div className="aboutM">
        <p>rShoesHub is India’s largest sports and athleisure footwear brand. Incorporated in 2006, rShoesHub Activewear is one of the leading players in organized sports &
           casual footwear sector in India. Since 2016, the flagship brand "rShoesHub", has been the largest sports and athleisure footwear brand in India, in both volume and 
           value terms. The company’s products are available via an expansive Pan-India network of over 15,000 geo-tagged multi-brand retail stores, 35+ company-owned exclusive outlets,
            large format stores such as Walmart, rajjak Retail and Reliance Smart among others and all the leading e-commerce portals.</p>
            <br /> <br />

            <p>rShoesHub has a very deep rooted understanding of its customers know our consumers, hence the product offerings are created, keeping in mind what they aspire
               for- comfortable, durable & stylish shoes, which make them feel empowered and confident.</p>
               <br /> <br />

               <p>Today rShoesHub is India’s biggest sports & casual footwear brand selling more than 15 million pairs annually. The brand offers a wide variety of light weight casual 
                footwear with cool designs, reflecting the smart, carefree spirit of the young millennials.

</p>
      </div>
    <Footer />

    </div>
  );
}

export default About;
