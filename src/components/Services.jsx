import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

export const Services = () => {
  const imageMap = {
    savings: assets.savings,
    loans: assets.loans,
    credit: assets.credit,
    investment: assets.investment,
    billpay: assets.billpay,
    business: assets.business,
  };
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async ()=> {
      try{
        const response = await fetch("/db.json");
        const data = await response.json();
        setServices(data.services);
      } catch (error){
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="bg-white py-8">
      <span className="text-4xl font-bold">Services</span>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {services.map((service) => (
          <div key={service.id} className='flex flex-row gap-4 items-start'>
            <img
              src={imageMap[service.image]}
              alt={service.title}
              className='w-12 h-12 object-contain'
            />
            <div className='flex flex-col gap-2'>
              <h3 className='text-green-500/70 font-bold text-xl'>{service.title}</h3>
              <p className='text-gray-600 text-sm md:text-base'>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}