import React from 'react';
import Rectangle29 from '../assets/Rectangle 29.png';
import Rectangle30 from '../assets/Rectangle 30.png';
import Rectangle31 from '../assets/Rectangle 31.png';

export const AppreciationPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="font-oswald text-4xl md:text-6xl mb-8 md:mb-0">
            Employee{' '}
            <span className="text-orange-500">Appreciation Program</span>
          </h1>
          <p className="text-lg md:text-xl">
            Our Employee Appreciation Program honors the ongoing commitment and
            efforts of our long-serving team members. Celebrating milestones of
            5 and 10 years, members are invited to annual events held at select,
            memorable locations, reflecting our gratitude and recognition of
            their dedication.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={Rectangle29} alt="Rectangle29" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-8">
        <img src={Rectangle30} alt="Rectangle30" className="w-1/2" />
        <img src={Rectangle31} alt="Rectangle31" className="w-1/2" />
      </div>
    </div>
  );
};
