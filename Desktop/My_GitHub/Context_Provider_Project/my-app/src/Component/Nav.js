import '../Component/Nav.css';
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";


const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <div className='nav__left'>
        TOPSHOP
      </div>
      <div className='nav__middle'>
        <ul class="main-menu">
          <li><a href="#" className="active">home</a></li>
          <li><a href="#">shop</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
      <div className='nav__right'>
        <div className='cart__icon'>
          <i
            className='fa fa-shopping-cart'
            aria-hidden='true'
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
