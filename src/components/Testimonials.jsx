import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      role: 'Fashion Blogger',
      content: "The quality of the clothes is absolutely amazing. I've never been more impressed with an online purchase. Highly recommended!",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      id: 2,
      name: 'James L.',
      role: 'Verified Buyer',
      content: "Fast shipping and great customer service. The fit was perfect and exactly as described. Will definitely be shopping here again.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
    {
      id: 3,
      name: 'Emily R.',
      role: 'Interior Designer',
      content: "I love the minimalist aesthetic of this brand. The pieces are timeless and versatile. A great addition to my wardrobe.",
      rating: 4,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-neutral-600">
            Real stories from our community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-accent-gold mb-6">
                 <FaQuoteLeft size={32} className="opacity-20 text-black" />
              </div>
              
              <p className="text-neutral-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-neutral-500">{testimonial.role}</p>
                </div>
                 <div className="ml-auto flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} size={14} />
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
