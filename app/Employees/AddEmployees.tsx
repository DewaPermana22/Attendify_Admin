"use client";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../components/Atoms/Button";
import HeaderContent from "../components/Atoms/HeaderContent";
import { useUsers } from "../server/Hooks/useUsers";
import { MdArrowBackIosNew } from "react-icons/md";
import { setCustomMenu as setSidebarCustomMenu } from "../libs/features/sidebar/sidebarSlice";
import { RootState } from "../libs/store";
import FormAdd from "../components/ui/FormAdd";
export default function AddEmployees() {
  const dispatch = useDispatch();
  const customMenu = useSelector((state: RootState) => state.sidebar.customMenu);
  const { data, error } = useUsers();

    console.log("Users Data:", data);
    console.log("Error:", error);

    if (error) return <div>Error loading users</div>;
    if (!data || data.length === 0) return <div>Loading...</div>;

    return (
      <>
      <div className="flex items-center justify-between">
        <HeaderContent title="Add Employees" subtitle="Add New Employee" />
        <div>
        <ButtonComponent clicked={() => customMenu && dispatch(setSidebarCustomMenu(null))} icon={MdArrowBackIosNew} text="Back" />
        </div>
       </div>

       {/* Form */}
       <FormAdd />
      </>
       
    );
}
