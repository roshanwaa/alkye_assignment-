import map from '../assets/Group 1585.png';
export const GlobalBusiness = () => {
  return (
    <div className="h-screen p-14">
      <div className="text-center flex justify-center ">
        <h1 className="text-5xl w-2/3">
          As a <span className="text-orange-500">global business,</span> we
          encourage you to contact us no matter where you are located in the
          world.
        </h1>
      </div>
      <div className="text-center">
        <p className="pt-8">Browse our job opportunities across the globe.</p>
        <div className="flex items-center justify-center pt-8">
          <p className=" text-orange-500 text-2xl">OPEN ROLES</p>
          <a href="#">
            <i
              className="fa-solid fa-arrow-right text-orange-500 text-2xl ml-8"
              aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <img src={map} alt="" />
      </div>
    </div>
  );
};
