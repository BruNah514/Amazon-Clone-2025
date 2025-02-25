import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
// function Header() {
//   return (
//     <>
//     <section>
//       <div className={classes.header_container}>
//         {/* { logo } */}
//         <div className={classes.logo_container}>
//           <Link to="/">
//             <img
//               src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
//               alt=""
//             />
//           </Link>
//           <span>
//             <SlLocationPin />
//           </span>

//           <div className={classes.delivery}>
//             <p>Delivered to</p>
//             <span>Ethiopia</span>
//           </div>
//         </div>

//         {/* {search} */}
//         <div className={classes.search}>
//           <select name="" id="">
//             <option value="">All</option>
//           </select>
//           <input type="text" name="" id="" placeholder="search product" />
//           {/* {icon} */}
//           <BsSearch size={29} />
//         </div>
//         {/* {right side link} */}
//         <div className={classes.order_container}>
//           <Link to="" className={classes.language}>
//             <img
//               src="https://img.freepik.com/free-photo/united-states-america-flag-background_23-2148157263.jpg?semt=ais_hybrid"
//               alt=""
//             />
//             <select name="" id="">
//               <option value="">EN</option>
//             </select>
//           </Link>
//           {/* {three components} */}
//           <Link to="/SignUp">
//             <p>Sign in</p>
//             <span>Account & Lists</span>
//           </Link>
//           {/* {orders} */}
//           <Link to="/Orders">
//             <p>returns</p>
//             <span>& orders</span>
//           </Link>
//           {/* {cart} */}
//           <Link to="/Carts" className={classes.cart}>
//             {/* {icon} */}
//             <BiCart size={35} />
//             <span>0</span>
//           </Link>
//         </div>
//       </div>

//     </section>
//      <LowerHeader/>
//      </>
//   );

 
// }
// export default Header;



const Header = () => {
  return (
    <div>   <section>
      <div className={classes.header_container}>
        {/* { logo } */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt=""
            />
          </Link>
          <span>
            <SlLocationPin />
          </span>

          <div className={classes.delivery}>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>

        {/* {search} */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          {/* {icon} */}
          <BsSearch size={29} />
        </div>
        {/* {right side link} */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img
              src="https://img.freepik.com/free-photo/united-states-america-flag-background_23-2148157263.jpg?semt=ais_hybrid"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          {/* {three components} */}
          <Link to="/SignUp">
            <p>Sign in</p>
            <span>Account & Lists</span>
          </Link>
          {/* {orders} */}
          <Link to="/Orders">
            <p>returns</p>
            <span>& orders</span>
          </Link>
          {/* {cart} */}
          <Link to="/Carts" className={classes.cart}>
            {/* {icon} */}
            <BiCart size={35} />
            <span>0</span>
          </Link>
        </div>
      </div>

    </section>
     <LowerHeader/></div>
  )
}

export default Header