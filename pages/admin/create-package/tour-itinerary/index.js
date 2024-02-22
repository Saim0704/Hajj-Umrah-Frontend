import React from "react";
import TourItinerary from "src/components/feature/packageCreation/TourItinerary";
import Steps from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <Steps activeStep="Tour Itinerary">
      <TourItinerary />
    </Steps>
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
