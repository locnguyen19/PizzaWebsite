import React from 'react'
import './style.css'


export default function SlideCarousel() {
    return (
        <div>
            <section className="home" id="home">
                <div className="slide-container active">
                    <div className="slide">
                        <div className="content">
                            <span>nike red shoes</span>
                            <h3>nike metcon shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
                            <a href="#" className="btn">add to cart</a>
                        </div>
                        <div className="image">
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/224c1576-1a7c-4a84-8800-dacd9ee4ae16/metcon-7-training-shoe-LSwmqj.png" className="shoe" alt="" />
                            <img src="images/home-text-1.png" className="text" alt="" />
                        </div>
                    </div>
                </div>
                <div className="slide-container">
                    <div className="slide">
                        <div className="content">
                            <span>nike blue shoes</span>
                            <h3>nike metcon shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
                            <a href="#" className="btn">add to cart</a>
                        </div>
                        <div className="image">
                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/52d39c0f-85ce-4559-a38d-a16741c03601/metcon-7-amp-training-shoes-zrRV5L.png" className="shoe" alt="" />
                            <img src="images/home-text-2.png" className="text" alt="" />
                        </div>
                    </div>
                </div>
                <div className="slide-container">
                    <div className="slide">
                        <div className="content">
                            <span>nike yellow shoes</span>
                            <h3>nike metcon shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores et eos eaque veritatis aut laboriosam earum dolorem iste atque.</p>
                            <a href="#" className="btn">add to cart</a>
                        </div>
                        <div className="image">
                            <img src="images/home-shoe-3.png" className="shoe" alt="" />
                            <img src="images/home-text-3.png" className="text" alt="" />
                        </div>
                    </div>
                </div>
                <div id="prev" className="fas fa-chevron-left" onclick="prev()" />
                <div id="next" className="fas fa-chevron-right" onclick="next()" />
            </section>
        </div>
    )
}
