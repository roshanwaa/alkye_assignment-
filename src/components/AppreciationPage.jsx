import Rectangle29 from '../assets/Rectangle 29.png';
import Rectangle30 from '../assets/Rectangle 30.png';
import Rectangle31 from '../assets/Rectangle 31.png';

export const AppreciationPage = () => {
  return (
    <div>
      <div className="flex">
        <div className="p-16">
          <h1 className="font-oswald text-6xl">
            Employee{' '}
            <span className="text-orange-500">Appreciation Program</span>
          </h1>
          <p className="pt-12">
            Our Employee Appreciation Program is tailored to honor the ongoing
            commitment and efforts of our long-serving team members. Our 5 Year
            Club and 10 Year Club are special milestones within this program,
            celebrating employees who have dedicated half a decade or a full
            decade to our company mission. Each year, members of these clubs are
            invited to annual events held at select, memorable locations,
            reflecting our gratitude and recognition of their unwavering
            dedication. It&apos;s our way of saying thank you and ensuring that
            every significant chapter in our collective journey is celebrated
            with the grandeur it deserves
          </p>
        </div>
        <div className="">
          <img src={Rectangle29} alt="" />
        </div>
      </div>
      <div className="flex gap-12 px-12 py-6">
        <img src={Rectangle30} alt="" />
        <img src={Rectangle31} alt="" />
      </div>
    </div>
  );
};
