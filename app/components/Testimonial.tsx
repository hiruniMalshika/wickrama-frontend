'use client';
import {motion} from 'framer-motion'

interface Testimonial {
    name: string;
    quote: string;
    image?: string; // Optional image
  }
  
  const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
    return (
      <section className="bg-dark py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
            >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 text-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition"
                whileHover={{scale: 1.05}}
              >
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                )}
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  