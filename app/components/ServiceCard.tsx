interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

const ServiceCard = ({icon, title, description} : ServiceCardProps) => {
    return (
        <div className="bg-white shadow-md rouned-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-yellow-500 text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

export default ServiceCard;