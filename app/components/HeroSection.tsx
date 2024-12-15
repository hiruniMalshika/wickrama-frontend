"use client";
import { motion } from "framer-motion";
const HeroSection = () =>{
    return (
        <motion.section
            className="bg-cover bg-center h-screen flex items-center justify-center text-center"
            style={{ backgroundImage: 'url(/frontimage3.jpg)'}}
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
        >
            <motion.div
             className="text-white px-6 max-w-2xl"
             initial={{ scale: 0.8, opacity: 0}}
             animate={{ scale: 1, opacity: 1}}
             transition={{ duration: 1, delay: 0.5}}
             >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to <span className="text-yellow-400">Wickramasooriya Enterprises</span>
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Industrial Solutions for a Sustainable Future
                </p>
                <motion.a
                    href="#services"
                    className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
                    whileHover={{ scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    Explore Services
                </motion.a>
            </motion.div>

        </motion.section>
    )
}
export default HeroSection;