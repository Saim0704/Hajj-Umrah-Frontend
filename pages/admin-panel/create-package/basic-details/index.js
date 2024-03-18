import React from "react";
import BasicDetails from "src/components/feature/packageCreation/BasicDetails";
import Stepper from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <div>
      <Stepper activeStep="Basic Details">
        <BasicDetails />
      </Stepper>
    </div>
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
