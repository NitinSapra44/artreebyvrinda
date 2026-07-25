"use client";

import { useState, type FormEvent } from "react";

const messageCircleIcon =
  "https://www.figma.com/api/mcp/asset/442361e1-0753-44e6-a78a-c4364287ea2d";
const mailIcon =
  "https://www.figma.com/api/mcp/asset/faee3148-2077-4d4d-97fd-f9629399e987";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="bg-cream flex flex-col gap-14 items-center px-6 py-16 md:px-20 md:py-[120px]"
    >
      <div className="flex flex-col gap-3 items-center">
        <p className="font-sans font-bold text-gold text-xs tracking-[3px] uppercase">
          Begin Your Design
        </p>
        <h2 className="font-serif font-normal text-maroon text-3xl md:text-[40px] text-center">
          Let&rsquo;s Create Something Beautiful
        </h2>
        <div className="h-px w-16 bg-gold-light" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center w-full max-w-[1280px]">
        <div className="flex flex-col gap-8 items-start w-full lg:w-[515px] shrink-0">
          <h3 className="font-serif font-medium text-maroon text-2xl md:text-[28px]">
            Custom Commissions &amp; Gifting Inquiries
          </h3>
          <p className="font-sans leading-[1.6] text-plum text-[15px]">
            I limit our trousseau bookings monthly to ensure Vrinda
            personally styling each collection. Please fill in the details
            about your celebration to secure your slot.
          </p>
          <div className="flex flex-col gap-6 items-start w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-cream-soft flex items-center justify-center rounded-full size-11 shrink-0">
                <img alt="" className="size-5" src={messageCircleIcon} />
              </div>
              <div className="flex flex-col gap-0.5 items-start">
                <p className="font-sans font-semibold text-gold text-[11px] tracking-[1px] uppercase">
                  WhatsApp Inquiry
                </p>
                <p className="font-sans font-semibold text-maroon text-sm">
                  +91 98100 12345
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-cream-soft flex items-center justify-center rounded-full size-11 shrink-0">
                <img alt="" className="size-5" src={mailIcon} />
              </div>
              <div className="flex flex-col gap-0.5 items-start">
                <p className="font-sans font-semibold text-gold text-[11px] tracking-[1px] uppercase">
                  Atelier Mail
                </p>
                <p className="font-sans font-semibold text-maroon text-sm">
                  vrinda@artreebyvrinda.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-maroon shadow-[0px_16px_20px_0px_rgba(66,18,29,0.2)] flex flex-col gap-6 items-start p-8 md:p-12 rounded-xl w-full"
        >
          <p className="font-serif font-semibold text-cream text-2xl">
            Inquire Online
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
            <label className="flex flex-col gap-2 items-start flex-1 w-full">
              <span className="font-sans font-semibold text-[#d8c9b5] text-xs tracking-[1px] uppercase">
                Your Name
              </span>
              <input
                type="text"
                placeholder="Vrinda Malhotra"
                className="bg-cream/10 border border-[#5a1e29] rounded h-11 px-4 py-3 text-[#d8c9b5] text-[13px] placeholder:text-[#d8c9b5]/70 w-full focus:outline-none focus:border-gold-light"
              />
            </label>
            <label className="flex flex-col gap-2 items-start flex-1 w-full">
              <span className="font-sans font-semibold text-[#d8c9b5] text-xs tracking-[1px] uppercase">
                Your Email
              </span>
              <input
                type="email"
                placeholder="hello@artree.com"
                className="bg-cream/10 border border-[#5a1e29] rounded h-11 px-4 py-3 text-[#d8c9b5] text-[13px] placeholder:text-[#d8c9b5]/70 w-full focus:outline-none focus:border-gold-light"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 items-start w-full">
            <span className="font-sans font-semibold text-[#d8c9b5] text-xs tracking-[1px] uppercase">
              Event / Trousseau Delivery Date
            </span>
            <input
              type="text"
              placeholder="e.g. October 24, 2026"
              className="bg-cream/10 border border-[#5a1e29] rounded h-11 px-4 py-3 text-[#d8c9b5] text-[13px] placeholder:text-[#d8c9b5]/70 w-full focus:outline-none focus:border-gold-light"
            />
          </label>

          <label className="flex flex-col gap-2 items-start w-full">
            <span className="font-sans font-semibold text-[#d8c9b5] text-xs tracking-[1px] uppercase">
              What are you envisioning?
            </span>
            <textarea
              placeholder="Tell us about the hampers, custom portrait, or bridal palette wishes..."
              rows={4}
              className="bg-cream/10 border border-[#5a1e29] rounded p-4 text-[#d8c9b5] text-[13px] placeholder:text-[#d8c9b5]/70 w-full resize-none focus:outline-none focus:border-gold-light"
            />
          </label>

          <button
            type="submit"
            className="bg-gold-light border border-gold rounded flex items-center justify-center py-4 w-full"
          >
            <span className="font-sans font-bold text-maroon text-[13px] tracking-[2px] uppercase">
              {submitted ? "Thank You — We'll Be in Touch" : "Send Inquiry"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
