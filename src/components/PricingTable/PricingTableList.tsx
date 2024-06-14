"use client";
import React, { useState } from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";

export default function PricingTableList(): JSX.Element {
  const [tab, setTab] = useState<string>("monthly");
  return (
    <Section className="position-relative">
      {/* <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li
          className={tab === "monthly" ? "active" : ""}
          onClick={() => setTab("monthly")}
        >
          Monthly
        </li>
        <li
          className={tab === "yearly" ? "active" : ""}
          onClick={() => setTab("yearly")}
        >
          Yearly
        </li> 
      </ul> */}
      <Section className="row">
        <Section className="col-lg-4">
          {tab === "monthly" && (
            <PricingTable
              title="Collaboration"
              subtitle="It's our cornerstone. We work hand-in-hand with you, fostering productive communication and mutual trust to co-develop innovative solutions for your business."
              // price="29"
              // currency="$"
              // timeline="monthly"
              // features={[
              //   "Static responsive website",
              //   "Video marketing",
              //   "Keywords research",
              //   "Facebook campaign",
              //   "eCommerce solution",
              //   "Google adword",
              // ]}
              // btnText="Purchase Now"
              // btnLink="/"
            />
          )}
          {tab === "yearly" && (
            <PricingTable
              title="Standard"
              subtitle=""
              // price="59"
              // currency="$"
              // timeline="yearly"
              // features={[
              //   "Static responsive website",
              //   "Video marketing",
              //   "Keywords research",
              //   "Facebook campaign",
              //   "eCommerce solution",
              //   "Google adword",
              // ]}
              // btnText="Purchase Now"
              // btnLink="/"
            />
          )}
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          {tab === "monthly" && (
            <PricingTable
              title="Excellence"
              subtitle="It's embedded in everything we do. From meticulous attention to detail to our commitment to continuous improvement, we go above and beyond to deliver exceptional results."
              // price="199"
              // currency="$"
              // timeline="monthly"
              // features={[
              //   "Static responsive website",
              //   "Video marketing",
              //   "Keywords research",
              //   "Facebook campaign",
              //   "eCommerce solution",
              //   "Google adword",
              // ]}
              // btnText="Purchase Now"
              // btnLink="/"
            />
          )}
          {tab === "yearly" && (
            <PricingTable
              title="Professional"
              subtitle=""
              // price="399"
              // currency="$"
              // timeline="yearly"
              // features={[
              //   "Static responsive website",
              //   "Video marketing",
              //   "Keywords research",
              //   "Facebook campaign",
              //   "eCommerce solution",
              //   "Google adword",
              // ]}
              // btnText="Purchase Now"
              // btnLink="/"
            />
          )}
          <Spacing lg="25" md="25" />
        </Section>
        <Section className="col-lg-4">
          {tab === "monthly" && (
            <PricingTable
              title="Innovation"
              subtitle="It's our driving force. We thrive on pushing boundaries, exploring new technologies, and thinking outside the box to bring fresh ideas and transformative solutions to benefit your business."
              // price="299"
              // currency="$"
              // timeline="monthly"
              // features={[
              //   "Static responsive website",
              //   "Video marketing",
              //   "Keywords research",
              //   "Facebook campaign",
              //   "eCommerce solution",
              //   "Google adword",
              // ]}
              // btnText="Purchase Now"
              // btnLink="/"
            />
          )}
          {tab === "yearly" && (
            <PricingTable
              title="Ultimate"
              subtitle=""
              // price="599"
              // currency="$"
              // timeline="yearly"
              // features={[
              //   "Static responsive website",
              //   "Video marketing",
              //   "Keywords research",
              //   "Facebook campaign",
              //   "eCommerce solution",
              //   "Google adword",
              // ]}
              // btnText="Purchase Now"
              // btnLink="/"
            />
          )}
          <Spacing lg="25" md="25" />
        </Section>
      </Section>
    </Section>
  );
}
