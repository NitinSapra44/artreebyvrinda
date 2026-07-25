"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const leftImagery =
  "https://www.figma.com/api/mcp/asset/7f8d210c-9a83-48e2-8f5f-3a88606e5e67";
const asteriskIcon =
  "https://www.figma.com/api/mcp/asset/4c3831cc-4625-4cb7-bc78-4c75d201f114";
const chevronDownIcon =
  "https://www.figma.com/api/mcp/asset/3090e591-7a40-43df-a9c8-cb3feb6f7a94";

const COMMISSION_TYPES = [
  "Custom Trousseaus",
  "Bespoke Gift Packaging",
  "Hand-Painted Portrait",
  "Full Bridal Assemblage",
];

const BUDGET_RANGES = [
  "₹15,000 - ₹35,000",
  "₹35,000 - ₹75,000",
  "₹75,000 - ₹1,50,000",
  "₹1,50,000+",
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  commissionType: string;
  deliveryDate: string;
  budgetRange: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  commissionType: COMMISSION_TYPES[0],
  deliveryDate: "",
  budgetRange: BUDGET_RANGES[0],
  message: "",
};

export default function ContactHeroSplit() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "bg-[rgba(250,248,245,0.1)] border border-[#5a1e29] rounded flex h-11 items-start px-4 py-3 w-full font-sans text-[13px] text-cream placeholder:text-cream/70 focus:outline-none focus:border-gold-light transition-colors";

  return (
    <section className="bg-cream flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch lg:items-center px-6 py-16 md:px-20 md:py-24">
      <div className="flex items-end p-8 md:p-12 relative rounded-lg w-full lg:w-[560px] h-[420px] md:h-[560px] lg:h-[700px] shrink-0 overflow-hidden">
        <img
          alt="Vrinda Malhotra hand-painting a portrait in the studio"
          className="absolute inset-0 object-cover rounded-lg size-full"
          src={leftImagery}
        />
        <div className="absolute bg-maroon/50 inset-0 rounded-lg" />
        <div className="flex flex-col gap-5 items-start relative w-full">
          <img alt="" className="size-8" src={asteriskIcon} />
          <p className="font-serif italic leading-[1.3] text-cream text-2xl md:text-[36px]">
            &ldquo;Every wedding has its own secret melody. Let us craft its
            tangible, beautifully gilded frame.&rdquo;
          </p>
          <p className="font-sans font-semibold text-gold-light text-[11px] tracking-[2.5px] uppercase">
            — Vrinda Malhotra
          </p>
        </div>
      </div>

      <div className="bg-maroon flex flex-col gap-7 items-start p-8 md:p-12 rounded-xl w-full lg:w-[656px] shadow-[0px_16px_20px_0px_rgba(66,18,29,0.2)]">
        {submitted ? (
          <div className="flex flex-col gap-4 items-start w-full py-12">
            <p className="font-serif font-semibold text-cream text-3xl">
              Thank You, {form.name || "Friend"}
            </p>
            <p className="font-sans leading-[1.6] text-[#d49a9a] text-sm">
              Your atelier inquiry has been received. We will revert with
              customized proposals within 48 hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setForm(INITIAL_STATE);
                setSubmitted(false);
              }}
              className="bg-gold-light border border-gold rounded flex items-center justify-center py-4 w-full mt-4"
            >
              <span className="font-sans font-bold text-maroon text-[13px] tracking-[2.5px] uppercase">
                Send Another Inquiry
              </span>
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-7 items-start w-full"
          >
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-serif font-semibold text-cream text-3xl">
                Atelier Inquiry
              </p>
              <p className="font-sans text-[#d49a9a] text-sm">
                Submit your inquiry below. We will revert with customized
                proposals within 48 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
              <label className="flex flex-col gap-2 items-start flex-1 min-w-0 w-full">
                <span className="font-sans font-semibold text-[#d49a9a] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                  Your Name
                </span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="e.g. Meera Sen"
                  className={inputClasses}
                />
              </label>
              <label className="flex flex-col gap-2 items-start flex-1 min-w-0 w-full">
                <span className="font-sans font-semibold text-[#d49a9a] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                  Phone Number
                </span>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="e.g. +91 99800 12345"
                  className={inputClasses}
                />
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
              <label className="flex flex-col gap-2 items-start flex-1 min-w-0 w-full">
                <span className="font-sans font-semibold text-[#d49a9a] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                  Email Address
                </span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="e.g. meera@gmail.com"
                  className={inputClasses}
                />
              </label>
              <label className="flex flex-col gap-2 items-start flex-1 min-w-0 w-full">
                <span className="font-sans font-semibold text-[#d49a9a] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                  Commission Type
                </span>
                <div className="relative w-full">
                  <select
                    value={form.commissionType}
                    onChange={handleChange("commissionType")}
                    className={`${inputClasses} appearance-none pr-9 cursor-pointer`}
                  >
                    {COMMISSION_TYPES.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-maroon text-cream"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                  <img
                    alt=""
                    src={chevronDownIcon}
                    className="absolute right-4 top-1/2 -translate-y-1/2 size-3.5 pointer-events-none"
                  />
                </div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
              <label className="flex flex-col gap-2 items-start flex-1 min-w-0 w-full">
                <span className="font-sans font-semibold text-[#d49a9a] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                  Desired Delivery Date
                </span>
                <input
                  type="text"
                  required
                  value={form.deliveryDate}
                  onChange={handleChange("deliveryDate")}
                  placeholder="e.g. October 15, 2026"
                  className={inputClasses}
                />
              </label>
              <label className="flex flex-col gap-2 items-start flex-1 min-w-0 w-full">
                <span className="font-sans font-semibold text-[#d49a9a] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                  Estimated Budget Range
                </span>
                <div className="relative w-full">
                  <select
                    value={form.budgetRange}
                    onChange={handleChange("budgetRange")}
                    className={`${inputClasses} appearance-none pr-9 cursor-pointer`}
                  >
                    {BUDGET_RANGES.map((range) => (
                      <option
                        key={range}
                        value={range}
                        className="bg-maroon text-cream"
                      >
                        {range}
                      </option>
                    ))}
                  </select>
                  <img
                    alt=""
                    src={chevronDownIcon}
                    className="absolute right-4 top-1/2 -translate-y-1/2 size-3.5 pointer-events-none"
                  />
                </div>
              </label>
            </div>

            <label className="flex flex-col gap-2 items-start w-full">
              <span className="font-sans font-semibold text-[#d49a9a] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
                Tell us about your celebration / vision
              </span>
              <textarea
                value={form.message}
                onChange={handleChange("message")}
                placeholder="Share any specific bridal color themes, family portrait sizes, or favorite ribbons..."
                rows={4}
                className={`${inputClasses} h-[100px] resize-none py-4`}
              />
            </label>

            <button
              type="submit"
              className="bg-gold-light border border-gold rounded flex items-center justify-center py-4 w-full"
            >
              <span className="font-sans font-bold text-maroon text-[13px] tracking-[2.5px] uppercase">
                Send Atelier Inquiry
              </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
