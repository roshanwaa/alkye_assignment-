import Rectangle20 from '../assets/Rectangle 20.png';
import Rectangle21 from '../assets/Rectangle 21.png';
import Rectangle22 from '../assets/Rectangle 22.png';
import Rectangle23 from '../assets/Rectangle 23.png';
import Rectangle27 from '../assets/Rectangle 27.png';
//  <img src={Rectangle20} alt="" className="object-contain" />;
export const SuccessPage = () => {
  return (
    <>
      <div className="m-10">
        <div className="angry-grid">
          <div id="item-0">
            <img src={Rectangle20} alt="" className="object-contain" />
          </div>
          <div id="item-1" className="p-28">
            <h1 className="font-oswald text-6xl">
              We celebrate <span className="text-orange-500">success</span>
            </h1>
            <p className="pt-6">
              At CaSE we understand that every achievement, big or small, is a
              result of the hard work and dedication of our team members. We
              take pride in celebrating these moments because they underscore
              the commitment and effort put into each project.
            </p>
            <p className="pt-6">
              Some of our favourite events on the calendar include our coveted
              Melbourne Cup event and our always amazing Christmas Party.
              In-between, our team celebrate together during team cycling
              events, regular team dinners and social morning teas to celebrate
              milestones and special days. Taking the time to celebrate wins is
              our way of showing gratitude and ensuring everyone knows their
              efforts make a difference.
            </p>
          </div>
          <div id="item-2">
            <img src={Rectangle21} alt="" className="object-contain" />
          </div>
          <div id="item-3">
            <img src={Rectangle22} alt="" className="object-contain" />
          </div>
          <div id="item-4">
            <img src={Rectangle23} alt="" className="object-contain" />
          </div>
          <div id="item-5">
            <img src={Rectangle27} alt="" className="object-contain" />
          </div>
        </div>
      </div>
    </>
  );
};
