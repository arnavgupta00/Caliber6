"use client";
import React, { useState } from "react";
import PricingTable from ".";
import Section from "../Div";
import Spacing from "../Spacing";

export default function ServicesTable(): JSX.Element {
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
              title="Individual Approach"
              subtitle="Migrations by Caliber6 ensure secure, accurate, and
timely transfer of your critical business information and
processes between technologies. Whether you are
upgrading, integrating, migrating systems. " // price="29"
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
              title="Innovative Solutions"
              subtitle="Partner with us for a meticulous and seamless migration experience that preserves your system integrity and enhances your technological capabilities." // price="199"
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
              title="Enterprise Migrations"
              subtitle="At Caliber6, we're always seeking talented individuals
who are passionate about making a difference. Explore
our diverse range of career opportunities and join a team
committed to driving innovation and excellence in
everything we do."
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
