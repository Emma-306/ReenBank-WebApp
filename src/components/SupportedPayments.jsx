import { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

export const SupportedPayments = () => {
  const imageMap = {
    verve: assets.verve,
    visa: assets.visa,
    paypal: assets.paypal,
    payoneer: assets.payoneer
  }
  const [paymentMethods, setPaymentMethods] = useState([]);

  useEffect(() => {
    const fetchPaymentMethods = async ()=> {
      try{
        const response = await fetch('/db.json');
        const data = await response.json();
        setPaymentMethods(data.paymentMethods);
      } catch (error){
        console.error('Error fetching services:', error);
      }
    };
    fetchPaymentMethods();
  }, []);
  return (
    <>
    <h1 className='text-2xl md:text-3xl font-bold text-center mb-4 text-black/80'>Supported by various finance services</h1>
    <div className='flex flex-row py-12 gap-4 md:gap-12 items-center justify-between w-full flex-wrap'>
      {paymentMethods.map((method) => (
          <img src={imageMap[method.method]} alt="" key={method.id} className='h-8 sm:h-10 md:h-12 xl:h-16 w-auto ' />
      ))}
    </div>
  </>
  )
}
