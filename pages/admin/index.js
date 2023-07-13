import React from 'react'

const Package = () => {
  return (
    <div>Package</div>
  )
}

export default Package

export async function getStaticProps() {
    return {
      props: {
        asLayout: "DefaultLayout",
        withSideBar: true,
      },
    };
  }