import React, { useEffect, useState } from "react";
import { AiFillEye, AiOutlineEdit, AiFillDelete, AiFillPlusCircle } from "react-icons/ai";
import { ErrorToast } from 'src/components/common/Toater';
import fetcher from "src/dataProvider";
import Link from "next/link";
import { useMutation } from "react-query";
const Index = () => {
	const [ziarahPlaces,setZiarahPlaces] = useState([])
	const activityItems = [
		{
			user: {
				name: "Michael Foster",
				imageUrl:
					"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
			commit: "2d89f0c8",
			branch: "main",
			status: "Completed",
			duration: "25s",
			date: "45 minutes ago",
			dateTime: "2023-01-23T11:00",
		},
		{
			user: {
				name: "Lindsay Walton",
				imageUrl:
					"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
			commit: "249df660",
			branch: "main",
			status: "Completed",
			duration: "1m 32s",
			date: "3 hours ago",
			dateTime: "2023-01-23T09:00",
		},
		{
			user: {
				name: "Courtney Henry",
				imageUrl:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
			commit: "11464223",
			branch: "main",
			status: "Error",
			duration: "1m 4s",
			date: "12 hours ago",
			dateTime: "2023-01-23T00:00",
		},
		{
			user: {
				name: "Courtney Henry",
				imageUrl:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
			commit: "dad28e95",
			branch: "main",
			status: "Completed",
			duration: "2m 15s",
			date: "2 days ago",
			dateTime: "2023-01-21T13:00",
		},
		{
			user: {
				name: "Michael Foster",
				imageUrl:
					"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
			commit: "624bc94c",
			branch: "main",
			status: "Completed",
			duration: "1m 12s",
			date: "5 days ago",
			dateTime: "2023-01-18T12:34",
		},
		{
			user: {
				name: "Courtney Henry",
				imageUrl:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
			commit: "e111f80e",
			branch: "main",
			status: "Completed",
			duration: "1m 56s",
			date: "1 week ago",
			dateTime: "2023-01-16T15:54",
		},
		{
			user: {
				name: "Michael Foster",
				imageUrl:
					"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
			commit: "5e136005",
			branch: "main",
			status: "Completed",
			duration: "3m 45s",
			date: "1 week ago",
			dateTime: "2023-01-16T11:31",
		},
		{
			user: {
				name: "Whitney Francis",
				imageUrl:
					"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
			commit: "5c1fd07f",
			branch: "main",
			status: "Completed",
			duration: "37s",
			date: "2 weeks ago",
			dateTime: "2023-01-09T08:45",
		},
	];
	const { mutate: fetchZiarahPlaces } = useMutation(
        () => fetcher.get(`/v1/master-data/type?type=SIGHTSEEING`, "raw"),
        {
            onSuccess: (res) => {
                setZiarahPlaces(res.data.SIGHTSEEING)
            },
            onError: ({ response }) => {
                console.log(response.data);
                ErrorToast.fire({
                    icon: "error",
                    title: response.data.message || "Unable Get SIGHTSEEING Places List",
                })
            },
        }
    );
	useEffect(() => {
        fetchZiarahPlaces();
    }, [])
	return (
		<>
			<div className="p-5">
				<div className="bg-white p-4 rounded-xl shadow-md overflow-x-scroll">
					<div className="items-center justify-between flex">
						<h2 className="px-4 text-base font-semibold leading-7 text-black sm:px-6 lg:px-8">
							Sightseeing Places (Ziarah)
						</h2>
						<Link
							href="/admin/master-data/sightseeing/create"
							className="inline-flex items-center gap-x-2 rounded-md bg-[#06603C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							<AiFillPlusCircle className="mr-2" />
							Add Sightseeing Places
						</Link>
					</div>
					<table className="mt-6 w-full whitespace-nowrap text-left">
						<colgroup>
							<col className="w-full sm:w-4/12" />
							<col className="lg:w-4/12" />
							<col className="lg:w-2/12" />
							<col className="lg:w-1/12" />
							<col className="lg:w-1/12" />
						</colgroup>
						<thead className="border-b border-white/10 text-sm leading-6 text-black">
							<tr>
								<th
									scope="col"
									className="py-4 pl-4 pr-8 font-bold sm:table-cell lg:pl-8"
								>
									Place Name
								</th>
								<th
									scope="col"
									className="py-2 pl-0 pr-4 text-right font-bold sm:pr-8 sm:text-left lg:pr-20"
								>
									Short Description
								</th>
								<th
									scope="col"
									className="hidden py-2 pl-0 pr-8 font-bold md:table-cell lg:pr-20"
								>
									Status
								</th>
								<th
									scope="col"
									className="py-2 pl-0 pr-4 text-center font-bold sm:table-cell sm:pr-6 lg:pr-8"
								>
									Action
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-white/5">
							{ziarahPlaces.map((item,index) => (
								<tr key={index}>
									<td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
										<div className="flex items-center gap-x-4">
											<div className="truncate text-sm font-medium leading-6 text-black">
												{item.name}
											</div>
										</div>
									</td>
									<td className="py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
										<div className="flex gap-x-3">
											<div className="font-mono text-sm leading-6 text-gray-400">
												{item.description}
											</div>
										</div>
									</td>
									<td className="py-4 text-sm leading-6 sm:pr-8 lg:pr-20">
										<div className="flex items-center justify-end gap-x-2 sm:justify-start">
											<div className="hidden text-black sm:block">
												{item.status === "ACTIVE" ? "Active" : "InActive"}
											</div>
										</div>
									</td>
									<td className="py-2 pl-0 pr-4 text-sm text-center leading-6 text-gray-400 md:table-cell sm:pr-6 lg:pr-8">
										<div className="flex items-center justify-end gap-x-2 sm:justify-start">
											<AiFillEye className="cursor-pointer text-2xl" />
											<AiOutlineEdit className="cursor-pointer text-2xl" />
											<AiFillDelete className="cursor-pointer text-2xl" />
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{/* </div> */}
				</div>
			</div>
		</>
	);
};

export default Index;
export async function getStaticProps() {
	return {
		props: {
			asLayout: "DefaultLayout",
			withSideBar: true,
			pageTitle: "Sightseeing (Ziarah)",
		},
	};
}
