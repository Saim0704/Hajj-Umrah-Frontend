import React from "react";
import TourItinerary from "src/components/feature/packageCreation/TourItinerary";
import Stepper from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <Stepper activeStep="Tour Itinerary">
      <TourItinerary />
    </Stepper>
  );
};

export default Index;
export async function getStaticProps() {
  return {
    props: {
      asLayout: "DefaultLayout",
      withSideBar: true,
    },
  };
}
