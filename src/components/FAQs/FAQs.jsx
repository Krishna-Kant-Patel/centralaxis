import React from "react";

const faqs = [
  {
    question: "Are these solutions applicable to me if I am operating a co-location?",
    answer:
      "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.",
  },
  {
    question: "Do you provide ongoing support and maintenance for your solutions?",
    answer:
      "Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
  },
  {
    question: "How do I get started?",
    answer:
      "Set up a demo and we'll guide you through our offerings and start a trial!",
  },
  {
    question: "How does pricing work?",
    answer:
      "Depending on your requirements, we offer flexible pricing models.",
  },
];

export default function FAQSection() {
  return (
    <section className=" py-6 px-20 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="inline-block px-4 py-1 mb-3 text-sm bg-white/10 text-[#FFFFFF] rounded-full">
          FAQs
        </span>
        <h2 className="text-4xl text-[#FAFAFA] md:text-4xl font-semibold mb-2">
          Frequently asked questions
        </h2>
        <p className="text-gray-400 text-base md:text-lg">
          Find answers to common questions about our solutions.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-[#FAFAFA] text-lg mb-2">
              {faq.question}
            </h3>
            <p className="text-[#71717A] text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
