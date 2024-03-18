import React from "react";
import Accommodation from "src/components/feature/packageCreation/Accommodation";
import Stepper from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <Stepper activeStep="Accommodation">
      <Accommodation />
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
