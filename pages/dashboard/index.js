import { Fragment } from "react";
import AboutOurProgram from "../../components/aboutOurProgram/aboutOurProgram";
import CarouselView from "../../components/bannerCarousel/carousel";
import VideoTutorial from "../../components/stemVideoTutorials/stemVideoTutorials";
import StemInnovation from "../../components/stemInnovation/stemInnovation";
import StemClubGuides from "../../components/stemClubGuides/stemClubGuides";
import PracticalBooks from "../../components/practicalBooks/PracticalBooks";
import ContactUs from "../../components/contactUs/contactUs";

function HomePage() {
  return (
    <Fragment>
      <CarouselView></CarouselView>
      <AboutOurProgram></AboutOurProgram>
      <VideoTutorial></VideoTutorial>
      <StemInnovation></StemInnovation>
      <StemClubGuides></StemClubGuides>
      <PracticalBooks></PracticalBooks>
      <ContactUs></ContactUs>
    </Fragment>
  )
}

export default HomePage;
