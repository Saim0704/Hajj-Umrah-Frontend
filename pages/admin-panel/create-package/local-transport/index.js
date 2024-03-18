import React from "react";
import LocalTransport from "src/components/feature/packageCreation/LocalTransport";
import Stepper from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <Stepper activeStep="Local Transport">
      <LocalTransport />
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
