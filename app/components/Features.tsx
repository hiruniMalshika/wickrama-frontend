'use client';
import { motion } from "framer-motion";

interface Feature {
    icon: string;
    title: string;
    description: string;
}

const Features = ({ features }: {features: Feature[] })=> {
    return (
        <section id="services" className="bg-section">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-secondary">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                            initial={{opacity: 0, x: -50}}
                            whileInView={{ opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{ duration: 0.5, delay: index * 0.2}}
                            >
                                <div className="text-amber-400 text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-4xl font-semibold mb-2 text-secondary">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                        </motion.div>    
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Features;