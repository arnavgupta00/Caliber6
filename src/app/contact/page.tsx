"use client";
import Div from "@/components/Div";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import ContactInfoWidget from "@/components/Widget/ContactInfoWidget";
import sendEmail from "@/utils/nodeMailer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    mobile: "",
    description: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendEmail(formData.email, formData.subject, formData.description  , formData.fullName, formData.mobile)
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      mobile: "",
      description: ""
    });
  };

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between p-0">
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container pl-24 pr-24">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Work with us."
              subtitle="Ready to take your business to the next level? 
                Contact us today to explore how our tailored digital solutions can drive your success."
              btnLink="/contact"
            />
            <Spacing lg="55" md="30" />
            <ContactInfoWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row" onSubmit={handleSubmit}>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Subject*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Description*</label>
                <textarea
                  cols={30}
                  rows={7}
                  className="cs-form_field"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button type="submit" className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
    </main>
  );
}
