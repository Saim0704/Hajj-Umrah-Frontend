import React from "react";
import BasicDetails from "src/components/feature/packageCreation/BasicDetails";
import Steps from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <div>
      <Steps activeStep="Basic Details">
        <BasicDetails />
      </Steps>
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
