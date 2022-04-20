import React from 'react'
import './style.css'

export default function Service() {
    return (
        <div>
            <section className="service">
                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-shipping-fast" />
                        <h3>fast delivery</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-undo" />
                        <h3>10 days replacements</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
                    </div>
                    <div className="box">
                        <i className="fas fa-headset" />
                        <h3>24 x 7 support</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, fugit.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
