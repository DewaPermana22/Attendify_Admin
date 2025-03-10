import Dashboard from "@/app/Dashboard/page";
import ManageEmploye from "@/app/Employees/page";
import Salary from "@/app/Salary/page";
import Task from "@/app/Task/page";
import Settings from "@/app/Settings/page";
import Attedance from "@/app/Attedance/page";
import Letters from "@/app/Letters/page";
import Announcement from "@/app/Announcement/page";
import ReferalCode from "@/app/ReferalCode/page";

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
   
export const SettingsRegion = [
  { title: "Settings", component: Settings, path: "settings" }
];
 
export const MenuRegions = {
  Master: MasterRegion,
  Management: ManagementRegion,
  Settings: SettingsRegion,
};