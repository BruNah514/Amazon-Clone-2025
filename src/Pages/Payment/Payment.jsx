import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement, } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormatter/CurrencyFormatter";
import { axiosInstance } from "../../Api/Axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/Firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action";
function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const handleChange = (e) => {
     //console.log(e.error.message);
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      // 1. Contact Backend function to get client secret code (key)
      setProcessing(true);
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
       console.log(response.data);
      const clientSecret = response.data?.clientSecret;
console.log(clientSecret);

      // 2. Client Side (React side confirmation)
      const {paymentIntent}  = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(paymentIntent);
    
      await db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent?.id)
        .set({
          basket: basket,
          amount: paymentIntent?.amount,
          created: paymentIntent?.created,
        });
      dispatch({
        type: Type.EMPTY_BASKET,
      });
      setProcessing(false);
      navigate("/orders", { state: { msg: "You have Placed a new Order" } });
    } catch (error) {
      console.log("Error", error);
      setProcessing(false);
}
};


  return (
    <LayOut>
      {/* {header} */}
      <div className={classes.payment__header}>
        checkout ({totalItem}) items
      </div>
      {/* { payment method} */}
      <section className={classes.payment}>
        {/* {address} */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>user.email</div>
            <div>123 React Lane</div>
            <div>Chicago,IL</div>
          </div>
        </div>
        <hr />

        {/* {product} */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* {card from} */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* {error} */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* {card element} */}
                <CardElement onChange={handleChange} />
                {/* {price} */}
                <div className={classes.payment__Price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p> Total Order | </p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit">
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please Wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;