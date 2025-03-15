'use client';
import { useUsers } from "@/app/server/Hooks/useUsers";
import React, { useState } from "react";
import ColumnTable from "../Atoms/ColumnTable";
import SearchBar from "../Atoms/SearchBar";
import DataContent from "../Atoms/dataContent";
import RowContent from "../molecules/RowContent";
import Alert from "@/app/components/ui/Alert";
import CheckBox from "../Atoms/checkBox";
import { Skeleton, Tooltip } from "antd";
import Button from "../Atoms/Button";
import { useDispatch } from "react-redux";
import { setCustomMenu } from "@/app/libs/features/sidebar/sidebarSlice";
import addEmployees from "@/app/Pages/Employees/AddEmployees"
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import ModalsComponent from "../molecules/Modals";
import ModalsEdit from "./ModalsEdit";
const TableUI = () => {
  const dispatch = useDispatch();

  const navToAddEmployees = () => {
    dispatch(setCustomMenu(addEmployees));
  };

 
  const [openModals, setOpenModasl] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [userID, setUserID] = useState<number | null>(null);

  const { data: users = [], isLoading, error } = useUsers();

  const handleEdit = (id : number) => {
    setUserID(id);
    setOpenModalEdit(true);
  }

  if (isLoading) {
    return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 p-7">
        <div>
          <Button icon={AiOutlineUserAdd} clicked={navToAddEmployees} text="Add Employee"/>
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

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 p-7">
        <div>
        <Button color="Primary" icon={AiOutlineUserAdd} clicked={navToAddEmployees} text="Add Employee"/>
        </div>

        <SearchBar placeholder="Search for users" />
      </div>

      <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-text dark:text-textDark uppercase bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="p-4">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-600" />
            </th>
            <ColumnTable text="Name" />
            <ColumnTable text="Position" />
            <ColumnTable text="Division" />
            <ColumnTable text="Departement" />
            <ColumnTable text="Action" />
          </tr>
        </thead>
        <tbody>
          {users?.map((user : any) => (
            <tr
              key={user.id}
              className="bg-white border-b dark:bg-zinc-900 dark:border-gray-700
               hover:bg-gray-200 dark:hover:bg-gray-900">
                <td className="w-4 p-4">
                <CheckBox />
                </td>
              <th className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img className="w-10 h-10 rounded-full" src="" alt={user.name} /> */}
                <div className="pl-3">
                  <div className="text-base font-semibold">{user.fullname}</div>
                  <div className="font-normal text-gray-500">{user.email}</div>
                </div>
              </th>
              <RowContent text={user.role?.name ?? "No Role"} />
              <RowContent text={user.division.name} />
              <RowContent text={user.department.name} />
              <DataContent>
                <div className="flex gap-5">
                  <Tooltip title="Edit" placement="topLeft" color="blue">
                  <RiPencilFill onClick={() => handleEdit(user.id)} className="text-primaryLight700 cursor-pointer" size={25}/>
                  </Tooltip>
                  <ModalsEdit Open={openModalEdit} Close={() => setOpenModalEdit(false)}
                  userID={userID ?? 0}/>
                  <Tooltip title="Delete" className="text-red-700 cursor-pointer" placement="topLeft" color="red">
                      <FaRegTrashAlt onClick={() => setOpenModasl(true)} size={23}/>
                  </Tooltip>
                    <Alert isOpen={openModals} onClose={() => setOpenModasl(false)}/>
                </div>
              </DataContent>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUI;
