import React from "react";
import { Gallery } from "src/components/feature/packageCreation/Gallery";
import Stepper from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <Stepper activeStep="Gallery">
      <Gallery />
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
