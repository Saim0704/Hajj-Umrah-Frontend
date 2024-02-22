import React from "react";
import BasicDetails from "src/components/feature/packageCreation/BasicDetails";
import Steps from "src/components/feature/packageCreation/steps";

const index = () => {
  return (
    <Steps activeStep="Basic Details">
      <BasicDetails />
    </Steps>
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
