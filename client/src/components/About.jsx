import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about-container">

      <div className="about-content">
          <img className="about-image" src="https://live.staticflickr.com/65535/51485066195_1e6e4531b0_k_d.jpg" />
        <div className="about-text">

        <p>
          Let’s face it, the rate at which your baby grows is both a miracle and a bit jarring.
          They come, you blink, and next thing you know, they’re exercising free will and
          nothing you just bought them fits. While I don’t know what to tell you about your
          baby prematurely learning the word “no”, I can help with the clothes.
        </p>
          
        <p>
          Wear It, Baby! is a company that was created to ease the stress of parenthood by providing you a
          way to save money, space and time when it comes to choosing, storing and ultimately
          getting rid of the clothes your baby no longer has need for.
        </p>
          
        <p> Wear It, Baby! makes it easy: find your child’s current size, pick their style, Wear It, Baby! and
          when they’ve outgrown that size, send it back and get your next box. It’s that simple! Wear It, Baby!
          inventory is either brand new or gently used but no worries; you’ll never receive an item where you can
          tell the difference!
          </p>

          <p>
          No more storing tons of too small tees, no more sorting through sizes, giving away
          an item here and there, no more spending on clothes that get worn a handful of times and then get packed
          away, and no more overstuffed closets and drawers, wondering what to do with it all. You know what to do,
          Wear It, Baby!
        </p>

        <p>
            Have extra clothes not from Wear It, Baby!? Head over to our FAQs to find out what’s in it for you when
            you send in additional items. Can’t wait to see you Wear It, Baby!
        </p>
        </div>
        <div className="about-buttons">
        <Link to="/inventory">
          <button className="btn">Shop With WIB!</button>
          </Link>
          <Link to="/add">
          <button className="btn"> Work With WIB!</button>
          </Link>
          <Link to="/contact">
          <button className="btn">Contact WIB!</button>
          </Link>
        </div>

      </div>
      
    </div>
  )
}

export default About
