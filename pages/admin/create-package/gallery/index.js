import React from "react";
import { Gallery } from "src/components/feature/packageCreation/Gallery";
import Steps from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <Steps activeStep="Gallery">
      <Gallery />
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
