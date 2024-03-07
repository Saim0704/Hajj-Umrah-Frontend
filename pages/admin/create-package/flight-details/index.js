import React from "react";
import FlightDetails from "src/components/feature/packageCreation/FlightDetails";
import Stepper from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <Stepper activeStep="Flight Details">
      <FlightDetails />
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
