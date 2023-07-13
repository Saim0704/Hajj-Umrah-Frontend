import React from 'react'

const Employee = () => {
  return (
    <div>Employee</div>
  )
}

export default Employee

export async function getStaticProps() {
    return {
      props: {
        asLayout: "DefaultLayout",
        withSideBar: true,
      },
    };
  }