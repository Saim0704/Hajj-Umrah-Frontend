import React from "react";
import Ctable from "src/components/master-data/local-transport/Ctable";

const Index = () => {
	return (
		<div className="p-5">
			<div className="bg-white p-4 rounded-xl shadow-md">
				<Ctable/>
			</div>
		</div>
	);
};

export default Index;
export async function getStaticProps() {
	return {
		props: {
			asLayout: "DefaultLayout",
			withSideBar: true,
			pageTitle: "Local Transport Place"
		},
	};
}
