import Dashboard from "@/app/Pages/Dashboard/page";
import ManageEmploye from "@/app/Pages/Employees/page";
import Salary from "@/app/Pages/Salary/page";
import Task from "@/app/Pages/Task/page";
import GeneralSettings from "@/app/Pages/General/GeneralSettings/page";
import AccountSettings from "@/app/Pages/General/AccountSettings/page";
import GroupChat from "@/app/Pages/General/GroupChat/page";
import Attedance from "@/app/Pages/Attedance/page";
import Letters from "@/app/Pages/Letters/page";
import Announcement from "@/app/Pages/Announcement/page";
import ReferalCode from "@/app/Pages/ReferalCode/page";

export const MasterRegion = [
  { title: "Dashboard", component: Dashboard, path: "dashboard" },
  { title: "Employees", component: ManageEmploye, path: "employees" },
  { title: "Salary", component: Salary, path: "salary" },
  { title: "Task", component: Task, path: "task" },
  { title: "Referal Code", component: ReferalCode, path: "referal-code" },
];
   
export const ManagementRegion = [
  { title: "Attendance", component: Attedance, path: "attendance" },
  { title: "Letter", component: Letters, path: "letter" },
  { title: "Announcement", component: Announcement, path: "announcement" }
];
   
export const GeneralRegion = [
  { title: "Group Chat", component: GroupChat, path: "GroupChat" },
  { title: "General Settings", component: GeneralSettings, path: "GeneralSettings" },
  { title: "Account Settings", component: AccountSettings, path: "AccountSettings" },
];
 
export const MenuRegions = {
  Master: MasterRegion,
  Management: ManagementRegion,
  General: GeneralRegion,
};