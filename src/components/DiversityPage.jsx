import bridge from '../assets/Group 1593.png';

export const DiversityPage = () => {
  return (
    <div className="h-screen bg-darkSlateGray">
      <div className="flex justify-between gap-8 mx-32">
        <div className="heading font-oswald text-6xl mt-16 text-white flex-1">
          <h1>
            We believe in{' '}
            <span className="text-orange-500">diversity & inclusion</span>
          </h1>
        </div>
        <div className="flex-1 mt-16 text-white">
          <p>
            At CaSE we do not just accept difference — we celebrate it, we
            support it, and we thrive on it for the benefit of our employees,
            our services, our industry and our community. We are proud to be an
            equal opportunity employer. Guided by our values and beliefs, we
            foster an inclusive workplace culture where employees thrive because
            of their differences, not in spite of them.
          </p>

          <p className="mt-8">
            Our values and beliefs, we foster an inclusive workplace culture
            where employees thrive because of their differences, not in spite of
            them Our Commitment to reinventing the standard. With more than 20
            nationalities represented in our global workforce, we firmly believe
            that our ability to deliver high-quality results is fueled by our
            active efforts to embed diversity and inclusion. We recognise,
            respect, and strive to create an environment where employees can
            excel and feel a true sense of belonging.
          </p>

          <p className="mt-8 font-bold">
            Some of our strategic initiatives include:
          </p>
        </div>
      </div>
      <div className="overflow-hidden">
        <img className="w-full" src={bridge} alt="" />
      </div>
    </div>
  );
};
