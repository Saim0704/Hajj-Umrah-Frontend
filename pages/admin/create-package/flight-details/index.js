import React from "react";
import FlightDetails from "src/components/feature/packageCreation/FlightDetails";
import Steps from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <Steps activeStep="Flight Details">
      <FlightDetails />
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
