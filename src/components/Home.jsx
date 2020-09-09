import React from "react";
import "../assets/css/Home.css";
import HomeImage from "../assets/images/landingImage.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={HomeImage} alt="backgroundImage" />
        {/* Row1 */}
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix stand Mixer for Baking Styling Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
            rating={4}
          />
        </div>
        {/* Row2 */}
        <div className="home__row">
          <Product
            id="67548967"
            title="Kenwood kMix stand Mixer for Baking Styling Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="90876543"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="67458923"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
            rating={5}
          />
        </div>
        {/* Row3 */}
        <div className="home__row">
          <Product
            id="90234867"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
