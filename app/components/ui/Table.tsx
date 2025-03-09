'use client';
import { useUsers } from "@/app/server/Hooks/useUsers";
import React, { useState } from "react";
import ColumnTable from "../Atoms/ColumnTable";
import SearchBar from "../Atoms/SearchBar";
import DataContent from "../Atoms/dataContent";
import RowContent from "../molecules/RowContent";
import Link from "next/link";
import LinkText from "../Atoms/LinkText";
import CheckBox from "../Atoms/checkBox";
import { Dropdown } from "../Dropdown";
import { Button, Skeleton } from "antd";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";

const TableUI = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { data, isLoading, error } = useUsers();

  console.log(data);

  if (isLoading) {
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 p-7">
        <div>
          <Button className="bg-black" onClick={toggleDropdown} type="primary" icon={<IoIosArrowDropdown className="w-2.5 h-2.5 ml-2" />}>Action</Button>
          {isDropdownOpen && (
            <Dropdown />
          )}
        </div>

        <SearchBar placeholder="Search for users" />
        </div>
  
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="p-4">
                <Skeleton.Avatar active size="small" shape="square" />
              </th>
              <ColumnTable text="Name" />
              <ColumnTable text="Position" />
              <ColumnTable text="Division" />
              <ColumnTable text="Departement" />
              <ColumnTable text="Action" />
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-4">
                  <Skeleton.Avatar active size="small" shape="square" />
                </td>
                <td className="px-6 py-4">
                  <Skeleton active title={{ width: "80%" }} paragraph={false} />
                </td>
                <td className="px-6 py-4">
                  <Skeleton active title={{ width: "60%" }} paragraph={false} />
                </td>
                <td className="px-6 py-4">
                  <Skeleton active title={{ width: "60%" }} paragraph={false} />
                </td>
                <td className="px-6 py-4">
                  <Skeleton active title={{ width: "60%" }} paragraph={false} />
                </td>
                <td className="px-6 py-4">
                  <Skeleton.Button active />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("Users Data:", data);  
  console.log("Error:", error);
  console.log( "Tipe Data :",  typeof data);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 p-7">
        <div>
        <Button onClick={toggleDropdown} type="primary" icon={<IoIosArrowDropdown className="w-2.5 h-2.5 ml-2" />}>Action</Button>

          {isDropdownOpen && (
            <Dropdown />
          )}
        </div>

        <SearchBar placeholder="Search for users" />
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="p-4">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
            </th>
            <ColumnTable text="Name" />
            <ColumnTable text="Position" />
            <ColumnTable text="Division" />
            <ColumnTable text="Departement" />
            <ColumnTable text="Action" />
          </tr>
        </thead>
        <tbody>
          {data.map((user: { id: string; name: string; email: string; role?: { name: string }; division: { name: string }; department: { name: string } }) => (
            <tr
              key={user.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <CheckBox />
              <th className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src="" alt={user.name} /> */}
                <div className="pl-3">
                  <div className="text-base font-semibold">{user.name}</div>
                  <div className="font-normal text-gray-500">{user.email}</div>
                </div>
              </th>
              <RowContent text={user.role?.name ?? "No Role"} />
              <RowContent text={user.division.name} />
              <RowContent text={user.department.name} />
              <DataContent>
                <LinkText text="Edit User" />
              </DataContent>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUI;
