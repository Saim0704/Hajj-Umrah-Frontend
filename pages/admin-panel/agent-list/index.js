import React from "react";
import UnderMaintenance from "src/components/common/UnderMaintenance";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";


const index = () => {
  const people = [
    {
      ApplicantId: '01',
      ApplicantFullName: 'Abdullah',
      PhoneNo: '9879966778',
      EmailId: 'abdul@gmail.com',
      Date: '19/8/23',
      PassportNo: 'PM01299N',
      VisaValidity: '19/8/23',
      Visastatus: 'Pending',
      
    },
    // More people...
  ];
  return (
    <>
      <section className="p-5 bg-white">
        <div className="bg-white p-5 drop-shadow-2xl rounded-xl">
          <hi className="text-xl">Filter by</hi>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5 py-2">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Agent Full Name"
                  className="border-gray-300 bg-gray-200 rounded-lg w-full mt-2"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Agent Number"
                  className="border-gray-300 bg-gray-200 rounded-lg w-full mt-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border-gray-300 bg-gray-200 rounded-lg w-full mt-2"
                />
              </div>
              <div>
                <button className="bg-[#00A852] text-white py-2 mt-2 w-full rounded-md">
                  <b>Search</b>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="">
            
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle px-4">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-[#024228] ">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-center text-[12px] text-white" style={{borderRight: '1px solid #00A852'}}
                        >
                          Agent No.
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-[12px] text-white" style={{borderRight: '1px solid #00A852'}}
                        >
                         Agent Full Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-[12px] text-white" style={{borderRight: '1px solid #00A852'}}
                        >
                          Agency Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-[12px] text-white" style={{borderRight: '1px solid #00A852'}}
                        >
                          Active Packages
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-[12px] text-white" style={{borderRight: '1px solid #00A852'}}
                        >
                          Expired Packages
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-[12px] text-white" style={{borderRight: '1px solid #00A852'}}
                        >
                          Verificatipn Status
                        </th>
                        
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-center text-[12px] text-white" style={{borderRight: '1px solid #00A852'}}
                        >
                          Action
                        </th>
                        {/* <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">Edit</span>
                        </th> */}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {people.map((person) => (
                        <tr key={person.ApplicantId} style={{borderBottom: '1px solid #BEBEBE '}}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-center text-gray-900 sm:pl-0">
                            {person.ApplicantId}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-center font-medium text-gray-900 sm:pl-0">
                            {person.ApplicantFullName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">
                            {person.PhoneNo}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">
                            {person.EmailId}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">
                            {person.Date}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">
                            {person.PassportNo}
                          </td>
                          
                          
                          <td className="relative whitespace-nowrap py-4 pl-3 text-center pr-4 text-sm font-medium sm:pr-0">
                            <div className="flex justify-evenly	">
                            <MdEdit className="text-2xl text-[#00A852] cursor-pointer	"/><FaRegEye className="text-2xl text-[#00A852] cursor-pointer	"/><MdDeleteSweep className="text-2xl text-red-600 cursor-pointer	"/>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

export async function getStaticProps() {
  return {
    props: {
      asLayout: "DefaultLayout",
      withSideBar: true,
    },
  };
}
