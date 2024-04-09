import Rectangle19 from '../assets/Rectangle 19.png';

export const StoryPage = () => {
  return (
    <div className="bg-darkSlateGray h-screen flex items-center justify-around">
      <div className="">
        <img src={Rectangle19} alt="" />
      </div>
      <div className="text-white w-1/2">
        <div className="flex items-end">
          <span className="text-orange-500 text-9xl customQuot transform rotate-180">
            &quot;
          </span>
          <p className="ml-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales
            turpis et lacinia fermentum. Curabitur vestibulum at arcu sed
            blandit. In consequat euismod purus nec imperdiet.
          </p>
        </div>
        <p className="mt-8 ml-14">
          Title <br />
          Name
        </p>
        <div className="mt-8 flex items-center">
          <a href="">
            <i
              className="fa-solid fa-circle-chevron-right text-2xl mr-4"
              aria-hidden="true"
            />
          </a>
          <p className="ml-4">Read my story</p>
        </div>
        <div className="mt-32 text-white float-end">
          <i
            className="fa-solid fa-circle-chevron-left text-5xl mr-4"
            aria-hidden="true"></i>
          <i
            className="fa-solid fa-circle-chevron-right text-5xl mr-8"
            aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
