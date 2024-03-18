import React from 'react'

const CompanyDetails = () => {
  return (
    <h1>CompanyDetails</h1>
  )
}

export default CompanyDetails

export async function getStaticProps() {
    return {
      props: {
        asLayout: "DefaultLayout",
        withSideBar: true,
      },
    };
  }