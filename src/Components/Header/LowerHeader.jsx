import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
            <AiOutlineMenu/>
            <p>All</p>
        </li>
        {/* <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li> */}
        <li>Medical Care</li>
        <li>Groceries</li>
        <li>Best Sellers</li>
        <li>Amazon Basic</li>
        <li>New Releases</li>
        <li>Prime</li>
        <li>Music</li>
        <li>Customer Service</li>
        {/* <li>Today's Deals</li>
        <li>Amazon Home</li>
        <li>Registry</li>
        <li>Books</li>
        <li>Pharmacy</li> */}
      </ul>
    </div>
  )
}

export default LowerHeader
