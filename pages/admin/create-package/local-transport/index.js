import React from "react";
import LocalTransport from "src/components/feature/packageCreation/LocalTransport";
import Steps from "src/components/feature/packageCreation/steps";

const Index = () => {
  return (
    <Steps activeStep="Local Transport">
      <LocalTransport />
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
