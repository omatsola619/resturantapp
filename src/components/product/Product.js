import React from "react";
import "./Product.css";
import P1 from "./img/p1.jpg";
import P2 from "./img/p2.jpg";
import P3 from "./img/p3.jpg";
import P4 from "./img/p4.jpg";
import P5 from "./img/p5.jpg";
import P6 from "./img/p6.jpg";

// product component page
function Product() {
  return (
    <div className="product__container">
      <div className="product__header">
        <h2>
          Our <span>Dishes</span>
        </h2>
      </div>

      <div className="product__body">
        <div className="product__item">
          <img src={P1} alt="" />
          <div className="product__details">
            <h4>Dish 1</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              rerum?
            </p>
            <hr />
            <span>$5,000</span>
          </div>
        </div>
        <div className="product__item">
          <img src={P2} alt="" />
          <div className="product__details">
            <h4>Dish 2</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              rerum?
            </p>
            <hr />
            <span>$5,000</span>
          </div>
        </div>
        <div className="product__item">
          <img src={P3} alt="" />
          <div className="product__details">
            <h4>Dish 3</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              rerum?
            </p>
            <hr />
            <span>$5,000</span>
          </div>
        </div>
        <div className="product__item">
          <img src={P4} alt="" />
          <div className="product__details">
            <h4>Dish 4</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              rerum?
            </p>
            <hr />
            <span>$5,000</span>
          </div>
        </div>
        <div className="product__item">
          <img src={P5} alt="" />
          <div className="product__details">
            <h4>Dish 5</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              rerum?
            </p>
            <hr />
            <span>$5,000</span>
          </div>
        </div>
        <div className="product__item">
          <img src={P6} alt="" />
          <div className="product__details">
            <h4>Dish 6</h4>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              rerum?
            </p>
            <hr />
            <span>$5,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
