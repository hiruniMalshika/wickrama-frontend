const Footer = () =>{
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} WickramaEnterprises. All Rights Reserved.
                </p>
                <ul className="flex justify-center space-x-4 mt-4">
                    <li>
                        <a href="/privacy-policy" className="hover:text-yellow-400">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/terms" className="hover:text-yellow-400">
                            Terms of Service
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-yellow-400">
                            Contact
                        </a>
                    </li>

                </ul>
            </div>

        </footer>
    )
}

export default Footer;