interface BannerProps {
    message: string;
    buttonText: string;
    buttonLink: string;
  }
  
  const Banner = ({ message, buttonText, buttonLink }: BannerProps) => {
    return (
      <section className="bg-yellow-500 text-gray-800 py-8 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">{message}</h2>
          <a
            href={buttonLink}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            {buttonText}
          </a>
        </div>
      </section>
    );
  };
  
  export default Banner;
  