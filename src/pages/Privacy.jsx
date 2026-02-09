import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Privacy Policy
            </h1>
            <p className="text-neutral-300 mt-2">Last updated: February 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 text-neutral-700"
            >
              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  1. Information We Collect
                </h2>
                <p className="leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account,
                  place an order, subscribe to our newsletter, or contact customer service. This may include
                  your name, email address, postal address, phone number, and payment information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="leading-relaxed">
                  We use the information we collect to process your orders, communicate with you about your
                  purchases, send you marketing communications (with your consent), improve our services,
                  and protect against fraudulent transactions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  3. Information Sharing
                </h2>
                <p className="leading-relaxed">
                  We do not sell or rent your personal information to third parties. We may share your
                  information with service providers who assist us in operating our website and conducting
                  our business, subject to confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  4. Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  5. Your Rights
                </h2>
                <p className="leading-relaxed">
                  You have the right to access, correct, or delete your personal information. You may also
                  opt out of marketing communications at any time. To exercise these rights, please contact us
                  at privacy@fashion.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  6. Cookies
                </h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience,
                  analyze site traffic, and understand where our visitors are coming from.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  7. Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by
                  posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  8. Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at privacy@fashion.com
                  or write to us at 123 Fashion Street, New York, NY 10013.
                </p>
              </section>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
