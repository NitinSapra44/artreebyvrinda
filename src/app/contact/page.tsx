import type { Metadata } from "next";
import ContactHeroSplit from "@/components/contact/ContactHeroSplit";
import StudioInformation from "@/components/contact/StudioInformation";

export const metadata: Metadata = {
  title: "Contact | Artree by Vrinda Malhotra",
  description:
    "Submit an atelier inquiry for bespoke trousseaus, gifting, and hand-painted portraiture, or visit the Delhi NCR studio by appointment.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSplit />
      <StudioInformation />
    </>
  );
}
