import React from 'react'
import Dashboard from './dashboard';

const Package = () => {
  return (
    <div>
      <Dashboard />
    </div>
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