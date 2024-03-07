import React from "react";
import BasicDetails from "src/components/feature/packageCreation/BasicDetails";
import Stepper from "src/components/feature/packageCreation/steps";

const index = () => {
  return (
    <Stepper activeStep="Basic Details">
      <BasicDetails />
    </Stepper>
  );
};

export default index;

export async function getStaticProps() {
  return {
    props: {
      asLayout: "DefaultLayout",
      withSideBar: true,
    },
  };
}
