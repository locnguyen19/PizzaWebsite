import products from "../../data";
import "../style.css";
import Pagination from "../Pagination";

const ProductList = () => {
  return (
    // <div className='products__wrapper'>
    //   {products.map((product) => (
    //     <ProductArray key={product.id} product={product} />
    //   ))}
    // </div>
    <div>
            <section className="products" id="products">
        <h1 className="heading"> latest <span>products</span> </h1>
        <div className="box-container">
        {/* {products.map((product) => (
        <Pagination key={product.id} product={product} />
       ))} */}
          {<Pagination/>}
        </div>
      </section>
        </div>
  );
};

export default ProductList;
