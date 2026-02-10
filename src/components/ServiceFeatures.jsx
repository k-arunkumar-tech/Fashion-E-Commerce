import { motion } from 'framer-motion';
import { FaShippingFast, FaUndo, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaShippingFast size={32} />,
      title: 'Free Shipping',
      description: 'On all orders over $100',
    },
    {
      icon: <FaUndo size={32} />,
      title: 'Easy Returns',
      description: '30-day money back guarantee',
    },
    {
      icon: <FaHeadset size={32} />,
      title: '24/7 Support',
      description: 'Dedicated support team',
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: 'Secure Payment',
      description: '100% secure checkout',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-neutral-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-neutral-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mb-4 text-black">
                {feature.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-500 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
