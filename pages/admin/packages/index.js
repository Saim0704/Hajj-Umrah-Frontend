import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index

export async function getStaticProps() {
    return {
      props: {
        asLayout: "DefaultLayout",
        withSideBar: true,
      },
    };
  }