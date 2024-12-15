async function fetchServices() {
    const res = await fetch('/api/services');
    if (!res.ok) throw new Error('Failed to fetch services');
    return res.json();
  }
  
  export default async function ServicesPage() {
    const services = await fetchServices();
  
    return (
      <div className="py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service: { id: number; icon: string; title: string; description: string }) => (
              <div key={service.id} className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="text-yellow-500 text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  