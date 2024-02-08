import React, { useState } from "react";
import styles from "./App.module.css";

function FoodOrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order successful! Your order was ${order}. Please show your confirmation number for pickup.`);
  };
  return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="phone">Phone:</label>
        <input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
        ></input>
        <label htmlFor="address">Address:</label>
        <input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
        ></input>
        <label htmlFor="order">Order</label>
        <input
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
        ></input>
        <button className={styles.button} type="submit">Submit Order</button>
      </form>
  );
}

export default FoodOrderForm;