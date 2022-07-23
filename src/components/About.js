import React, { Component } from "react";
import "./About.css";
import video1 from "./videos/about2.mp4";
import Player from "react-player";

const About = () => {
  function t() {
    return true;
  }
  return (
    <div className="about">
      <div id="pic">
        <span className="writen ab">About</span>
        <span className="writen sen">Sen Opulence</span>
        <Player
          className="test"
          width={"100%"}
          controls={true}
          height={"53vw"}
          url={video1}
          playing={t()}
          loop={true}
        />
      </div>
      <dl className="article">
        <dt>
          <h1 className="hed">What is Sen Opulence?</h1>
        </dt>
        <dd>
          Sen Opulence is more than just an affiliated website; it is a
          lifestyle brand rooted in the core values of freedom of expression,
          equality and the conviction that pleasure is a fundamental human
          right. A purveyor of culture and an avid supporter of art, innovation
          and bold perspectives. As the world progresses, so do we. We are
          undergoing a major transformation, inside and out. We remain committed
          to our role as a progresssive force and a cultural leader, but we're
          changing the lens.
        </dd>
      </dl>
      <dl className="article1">
        <dt>
          <h1 className="hed">Our affiliated partner are:</h1>
        </dt>
        <dd>
          <h2>Amazon (India) Affiliate Program </h2>
          <img
            src="https://nichehacks.imgix.net/c779832bfb7c5b1c4744add7df5e3c3b.jpg"
            style={{ height: "30vw", width: "55vw" }}
          ></img>
          <br></br>
          Amazon India offers an amazing
          affiliate program called Amazon Associates. Unlike other affiliate
          programs, it pays you for all the products that a visitor buys after
          following your links and not just for the specific products that you
          advertise. You can earn up to 15% in referrals by advertising Amazon
          products. Amazon is well known for its high commission rates so rest
          assured that you could make a handsome amount of money by being an
          Amazon Associate. Amazon pays its affiliates on a monthly basis. The
          payments reach you approx. 60 days following the end of a calendar
          month. You can choose to get paid through cheque or NEFT (National
          Electronic Funds Transfer). Your minimum earned commission must be Rs.
          2500 in the case of cheque and Rs. 1000 in the case of NEFT. To help
          you track your progress, Amazon has some useful apps and tools that
          are available round the clock. Please note that the affiliate program
          is offered free of cost and you are not charged anything for using
          various tools and reports. People love to buy from Amazon and often
          more than one product in a single session, so it makes perfect sense
          to be an affiliate with Amazon India.
          <h2>Flipkart Affiliate Program </h2>
          <img
            src="https://indianaffiliateprograms.com/wp-content/uploads/2014/12/top-online-shopping-affiliate-programs-india.jpg"
            style={{ height: "30vw", width: "55vw" }}
          ></img>
          <br></br>
          To make moneywith Flipkart’s affiliate program, you need to place
          product banners or links on your website. Send traffic to Flipkart.com
          and earn up to 15% every time a user clicks on those banners or links
          and makes a purchase. An affiliate is paid in cash through EFT or in
          the form of gift vouchers. If you choose to get paid in cash, the
          minimum commission required is Rs. 1000. To get paid in gift vouchers,
          you need to accumulate at least Rs. 250 as commission. Joining the
          Flipkart affiliate program does not require any charges or hidden
          fees. Your earnings for a product reflect in your account once the
          order is delivered. Usually, you can see your earnings in approx. 3 to
          5 working days. Flipkart provides you with robust and intuitive tools
          to track your progress. You can always check your referral and payment
          status with various tools and reports. Over the last few years,
          Flipkart has become a household name in India when it comes to online
          shopping. Advertise its products to make some money starting today.
          <h2>AliExpress Affiliate Program </h2>
          <img
            src="https://www.cuelinks.com/blog/wp-content/uploads/2017/05/aliexpress.png"
            style={{ height: "30vw", width: "70vw" }}
          ></img>
          Started as a business to business portal for buying and selling
          products, AliExpress has today expanded into one of the largest and
          most far-reaching e-commerce marketplace in the world. A platform
          allowing Chinese manufacturers to sell their goods and services
          worldwide, AliExpress brings you just about everything online.
          However, what makes the AliExpress affiliate program best is the fact
          that it is available in 5 different languages and it ships to over 200
          countries in the world. This site is primarily focused on gaining
          loyal customers from United States, Russia, Brazil and Spain, for
          which it offers a really great affiliate commission to its partners.
          If you have an international audience, the AliExpress affiliate
          program is the easiest to promote as it offers millions of products
          across a vast range of categories all over the world. Sign up for it
          now.
        </dd>
      </dl>
    </div>
  );
};
export default About;
