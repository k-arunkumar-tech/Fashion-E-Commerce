import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all unworn items with tags attached. Items must be in original condition. Return shipping is free for defective items, otherwise a flat rate of $7.99 applies.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping (2-3 business days) is available at checkout. International shipping times vary by location.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes! We ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination. Customs fees may apply depending on your country.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Cash on Delivery for select locations.',
    },
    {
      question: 'How do I find my size?',
      answer: 'Each product page has a size guide link with detailed measurements. We recommend measuring yourself and comparing to our size chart for the best fit.',
    },
    {
      question: 'Can I cancel or modify my order?',
      answer: 'You can cancel or modify your order within 2 hours of placing it. After that, orders are processed and cannot be changed. Please contact support immediately if you need assistance.',
    },
    {
      question: 'Do you offer gift cards?',
      answer: 'Yes! Digital gift cards are available in denominations of $25, $50, $100, and $200. They never expire and can be used on any purchase.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-neutral-300">
              Find answers to common questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-neutral-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <span className="flex-shrink-0">
                    {openIndex === index ? (
                      <IoRemove size={24} />
                    ) : (
                      <IoAdd size={24} />
                    )}
                  </span>
                </button>

                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t px-6 py-4 text-neutral-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-8 bg-neutral-50"
          >
            <h3 className="text-xl font-display font-bold mb-2">
              Still have questions?
            </h3>
            <p className="text-neutral-600 mb-4">
              Our customer support team is here to help
            </p>
            <a href="/contact" className="text-black font-semibold hover:underline">
              Contact Us →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
