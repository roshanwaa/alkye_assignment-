import Navbar from './components/Navbar';
import './App.css';
import { HeadLine } from './components/HeadLine';
import { Connected } from './components/Connected';
import { DiversityPage } from './components/DiversityPage';
import { SuccessPage } from './components/SuccessPage';
import { AppreciationPage } from './components/AppreciationPage';
import { StoryPage } from './components/StoryPage';
import { GlobalBusiness } from './components/GlobalBusiness';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <div className="min-h-screen bg-custom-background bg-cover bg-center flex flex-col">
        <Navbar />
        <div className="flex-1"></div>
        <HeadLine />
      </div>
      <Connected />
      <DiversityPage />
      <SuccessPage />
      <AppreciationPage />
      <StoryPage />
      <GlobalBusiness />
      <Footer />
    </>
  );
};
