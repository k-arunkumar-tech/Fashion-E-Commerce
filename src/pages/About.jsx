import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-96 bg-neutral-900 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white max-w-3xl mx-auto px-4"
        >
          <h1 className="text-5xl font-display font-bold mb-4">Our Story</h1>
          <p className="text-xl text-neutral-200">
            Crafting timeless fashion since 2020
          </p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              At FASHION, we believe that style is personal and timeless. Our mission is to provide 
              premium quality clothing that empowers individuals to express their unique identity 
              with confidence. We're committed to sustainable practices, ethical sourcing, and 
              creating pieces that last beyond seasons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We source the finest materials and work with skilled artisans to create pieces that stand the test of time.',
              },
              {
                title: 'Sustainability',
                description: 'Environmental responsibility is at the core of everything we do, from sourcing to packaging.',
              },
              {
                title: 'Innovation',
                description: 'We blend classic design with modern innovation to create fashion that\'s both timeless and contemporary.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-display font-bold mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800',
              'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Fashion ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
