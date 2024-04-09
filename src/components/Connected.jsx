import { RectangleConnected } from './RectangleConnected';
import { StayConnected } from './StayConnected';

export const Connected = () => {
  return (
    <>
      <div>
        <RectangleConnected />
      </div>
      <div className="">
        <StayConnected />
      </div>
    </>
  );
};
