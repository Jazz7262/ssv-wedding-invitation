import React from "react";
import "../styles/Slide.css";

function Slide() {
    return (
        <section id="slide">
            <div className="slide-wrapper">
                <div className="slide-content">
                    <div
                        className="img-container"
                        data-aos="zoom-out"
                        data-aos-offset="300"
                    >
                        <img alt="big_wheel" src="./assets/images/wheel.png" />
                    </div>
                    <div
                        className="text-content"
                        data-aos="fade-in"
                        data-aos-offset="300"
                        data-aos-delay="50"
                    >
                        <h4>We Are Arranging Our Daughter's Wedding</h4>
                        <h1>Save Our Date</h1>
                        <p>
                            05<sup>th</sup> November, 2023
                        </p>
                    </div>
                </div>
                <img
                    className="wheel wheel-top"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    src="../assets/images/wheel.png"
                    alt="Wheel"
                />
                <img
                    className="wheel wheel-bottom"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    src="../assets/images/wheel.png"
                    alt="Wheel"
                />
            </div>
        </section>
    );
}

export default Slide;
