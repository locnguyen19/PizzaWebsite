
import './style.css'
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import products from "../data";
import Rating from './Rating';

const Pagination = () => {
    let opts = { format: "%s%v", symbol: "€" };
    const { addToCart } = useContext(CartContext);
    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = products.slice(pagesVisited, pagesVisited + usersPerPage).map((product) => {
        return (


            <div className="box">
                <div className="icons">
                    <a href="#" className="fas fa-heart" />
                    <a href="#" className="fas fa-share" />
                    <a href="#" className="fas fa-eye" />
                </div>
                <img src={product.image} alt="" />
                <div className="content">
                    <h3>{product.name}</h3>
                    <div className="price"> {formatCurrency(`${product.price}`, opts)}<span>{formatCurrency(`${product.prePrice}`, opts)}</span></div>
                    {/* <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                    </div> */}
                    <div className="stars">
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                        />
                    </div>
                    <button href="#" className="btn" onClick={() => addToCart(product)}>add to cart</button>
                </div>
            </div >

        );
    });

    const pageCount = Math.ceil(products.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <section className="products" id="products">
                <h1 className="heading"> latest <span>products</span> </h1>
                <div className="box-container">
                    {displayUsers}
                </div>
            </section>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns "}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    )
}

export default Pagination;