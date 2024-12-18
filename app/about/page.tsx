'use client'
import React from "react"
const About = () => {
    return (
        <div className="bg-gray-50 py-20">
           <div className="container mx-auto px-6 lg:px-20">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    About Us
                </h1>
                <div className="space-y-6 text-gray-700">
                    <p>
                    Wickramasooriya Enterprises is a renowned name in Sri Lanka, recognized for its excellence in providing top-quality solutions across diverse industries. Established with a vision to deliver superior services, we have consistently maintained our commitment to innovation, integrity, and customer satisfaction.
                    </p>
                    <p>
                        With decades of experience, we have established ourselves as a trusted partner for businesses and individuals alike. Our expertise spans a wide range of sectors, ensuring that we cater to the unique needs of each client with unmatched professionalism.
                    </p>
                    <p>
                        At Wickramasooriya Enterprises, we pride ourselves on our skilled team, advanced technology, and unwavering dedication to excellence. Our mission is to exceed expectations and set benchmarks in the industry, driving progress and creating lasting relationships with our clients.
                    </p>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Why Choose Us?
                    </h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Extensive Industry Experience</li>
                        <li>Commitment to innovation and quality</li>
                        <li>Customer-centric approach</li>
                        <li>Skilled and professional team</li>
                        <li>Reliable and efficient solutions</li>
                    </ul>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Our Vision
                    </h2>
                    <p>
                    To be the most trusted and innovative enterprise, delivering excellence and creating value for our customers and stakeholders.
                    </p>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Our Mission
                    </h2>
                    <p>
                    To provide outstanding solutions tailored to the needs of our clients, leveraging expertise, technology, and a passion for excellence.
                    </p>
                </div>
           </div>
        </div>
    )
}

export default About;