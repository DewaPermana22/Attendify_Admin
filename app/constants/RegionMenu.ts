import Dashboard from "@/app/Dashboard/page"
import ManageEmploye from "@/app/Employees/page"
import Salary from "@/app/Salary/page"
import Task from "@/app/Task/page"
import Settings from "@/app/Settings/page"
import Attedance from "@/app/Attedance/page"
import Letters from "@/app/Letters/page"
import Announcement from "@/app/Announcement/page"

export const MasterRegion = [
    { title: "Dashboard", component :  Dashboard},
    { title: "Employees",  component : ManageEmploye},
    { title: "Salary", component :  Salary},
    { title: "Task", component : Task }
  ];
  
  export const ManagementRegion = [
    { title: "Attendance", component : Attedance },
    { title: "Letter", component : Letters },
    { title: "Announcement", component : Announcement }
  ];
  
  export const SettingsRegion = [
    { title: "Settings", component : Settings }
  ];

  export const MenuRegions = {
    Master: MasterRegion,
    Management: ManagementRegion,
    Settings: SettingsRegion,
  };
  