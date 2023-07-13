import React from 'react'

const Applicant = () => {
  return (
    <h1>Applicant</h1>
  )
}

export default Applicant
export async function getStaticProps() {
    return {
      props: {
        asLayout: "DefaultLayout",
        withSideBar: true,
      },
    };
  }