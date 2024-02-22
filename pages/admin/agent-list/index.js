import React from 'react'
import UnderMaintenance from 'src/components/common/UnderMaintenance'

const index = () => {
    return (
        <div><UnderMaintenance /></div>
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