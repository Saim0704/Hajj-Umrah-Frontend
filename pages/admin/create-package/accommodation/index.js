import React from "react";
import Accommodation from "src/components/feature/packageCreation/Accommodation";
import Steps from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <Steps activeStep="Accommodation">
      <Accommodation />
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
