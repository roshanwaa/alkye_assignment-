export const RectangleConnected = () => {
  return (
    <div className="bg-darkSlateGray flex justify-around h-28 items-center">
      <div className="">
        <p className="text-gray-500">01</p>
        <div className="flex items-center gap-10">
          <h1 className="text-white">We Stay Connected</h1>
          <a href="">
            <i className="fa-solid fa-circle-chevron-right text-4xl text-white" />
          </a>
        </div>
      </div>
      <div className="h-28 border-l-2 border-black"></div>
      <div className="">
        <p className="text-gray-500">02</p>
        <div className="flex items-center gap-10">
          <h1 className="text-white">We believe in diversity & inclusion</h1>
          <a href="">
            <i className="fa-solid fa-circle-chevron-right text-4xl text-white" />
          </a>
        </div>
      </div>
      <div className="h-28 border-l-2 border-black"></div>
      <div className="">
        <p className="text-gray-500">03</p>
        <div className="flex items-center  gap-10">
          <h1 className="text-white">We celebrate success</h1>
          <a href="">
            <i className="fa-solid fa-circle-chevron-right text-4xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};
