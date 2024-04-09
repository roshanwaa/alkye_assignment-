import { useState } from 'react';
import pageImage from '../assets/Rectangle39.png';

export const StayConnected = () => {
  const [updatesOpen, setUpdatesOpen] = useState(true);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [membershipsOpen, setMembershipsOpen] = useState(false);

  return (
    <div className="h-screen flex">
      <div className="flex-1 pt-20 ml-32">
        <div className="font-oswald text-6xl mb-10">
          <h1>
            We <span className="text-orange-500">stay connected</span>
          </h1>
        </div>
        <div className="mt-20">
          <div className="flex gap-8">
            <i className="fa-solid fa-display text-3xl"></i>
            <div className="">
              <h1
                className="text-xl cursor-pointer"
                onClick={() => setUpdatesOpen(!updatesOpen)}>
                Quarterly Business Updates
              </h1>
              {updatesOpen && (
                <p className="mt-4 max-w-[543px]">
                  We strive to stay connected as a team through communication
                  and collaboration. This materializes every quarter through our
                  Quarterly Business Update events. These gatherings are
                  immersive sessions where every team member, regardless of rank
                  or tenure, comes together to contribute to our overarching
                  business strategy, and stay connected. They are opportunities
                  to learn from our seasoned leaders and to also share personal
                  insights and achievements that can steer our collective
                  future. In an ever-evolving engineering landscape, staying
                  connected isn’t just a benefit—it’s essential.
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-8 mt-12">
            <i className="fa-regular fa-comments text-3xl"></i>
            <div className="">
              <h1
                className="text-xl cursor-pointer"
                onClick={() => setEventsOpen(!eventsOpen)}>
                Industry Events & Networking
              </h1>
              {eventsOpen && (
                <p className="mt-4 max-w-[543px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil autem eaque, beatae molestias corrupti provident
                  adipisci sunt dolores, perferendis cumque voluptatum
                  cupiditate dolorem a animi, impedit ipsam? Reiciendis, maiores
                  reprehenderit.
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-8 mt-12">
            <i className="fa-regular fa-address-book text-3xl"></i>
            <div className="">
              <h1
                className="text-xl cursor-pointer"
                onClick={() => setMembershipsOpen(!membershipsOpen)}>
                Associations Memberships
              </h1>
              {membershipsOpen && (
                <p className="mt-4 max-w-[543px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis explicabo consectetur quas, id laboriosam maiores
                  praesentium nam laudantium quos nisi debitis placeat possimus
                  rerum dignissimos, cupiditate exercitationem aspernatur.
                  Adipisci, numquam.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block flex-1 relative">
        <img className="w-full h-full object-cover" src={pageImage} alt="" />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute bottom-0 right-0 m-6 text-white">
          <i className="fa-solid fa-circle-chevron-left text-5xl mr-4"></i>
          <i className="fa-solid fa-circle-chevron-right text-5xl mr-8"></i>
        </div>
      </div>
    </div>
  );
};
