import { Metadata } from "next";
import ContactPage from "./contactPage";

export const metadata: Metadata = {
  applicationName: "Caliber6 ",
  title: {
    default: "Contact Us - Caliber6",
    template: "Contact Us - Caliber6",  // Set specific title for Contact Us  page
  },
  description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  openGraph: {
    type: "website",
    siteName: "Caliber6",
    title: {
      default: "Contact Us - Caliber6",  // Specific title for Open Graph
      template: "Contact Us - Caliber6",
    },
    description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  },
  twitter: {
    card: "summary",
    title: {
      default: "Contact Us - Caliber6",  // Specific title for Twitter
      template: "Contact Us - Caliber6",
    },
    description: "Learn more about Caliber6 and our mission to empower businesses through strategic digital solutions.",
  },
};

export default function Page() {
  return <ContactPage />;
}