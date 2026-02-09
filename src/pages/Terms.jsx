import { motion } from 'framer-motion';

const Terms = () => {
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
              Terms & Conditions
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
                  1. Agreement to Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and
                  provisions of this agreement. If you do not agree to these terms, please do not use this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  2. Use License
                </h2>
                <p className="leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on FASHION's website
                  for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                  transfer of title.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  3. Product Information
                </h2>
                <p className="leading-relaxed">
                  We strive to provide accurate product descriptions and images. However, we do not warrant that
                  product descriptions, pricing, or other content is accurate, complete, reliable, current, or
                  error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  4. Pricing and Availability
                </h2>
                <p className="leading-relaxed">
                  All prices are subject to change without notice. We reserve the right to limit quantities of
                  any products or services and to refuse service to anyone at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  5. Returns and Refunds
                </h2>
                <p className="leading-relaxed">
                  Items may be returned within 30 days of purchase in unworn condition with original tags
                  attached. Refunds will be processed to the original payment method within 5-10 business days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  FASHION shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages resulting from your use of or inability to use the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  7. Governing Law
                </h2>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the
                  State of New York, and you irrevocably submit to the exclusive jurisdiction of the courts in
                  that location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-black mb-4">
                  8. Contact Information
                </h2>
                <p className="leading-relaxed">
                  Questions about the Terms & Conditions should be sent to us at legal@fashion.com or
                  123 Fashion Street, New York, NY 10013.
                </p>
              </section>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
