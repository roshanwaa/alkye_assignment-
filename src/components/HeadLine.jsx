export const HeadLine = () => {
  return (
    <div className="container mx-auto flex justify-between items-end">
      <div className="pb-56 headline">
        <p className="text-white">Home / Why work with us</p>
        <h1 className="text-6xl font-bold text-white">Headline #1</h1>
        <p className="text-white mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="pb-28 text-white flex gap-6 justify-end">
        <a href="">
          <i className="fa-solid fa-circle-chevron-left text-5xl"></i>
        </a>
        <a href="">
          <i className="fa-solid fa-circle-chevron-right text-5xl"></i>
        </a>
      </div>
    </div>
  );
};
