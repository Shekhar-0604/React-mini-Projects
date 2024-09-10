import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import {
  Calendar,
  Flag,
  HelpCircle,
  Home,
  Layers,
  LayoutDashboard,
  Settings,
  StickyNote,
} from "lucide-react";
import HomePage from "./Components/Pages/HomePage";
import ProjectsPage from "./Components/Pages/ProjectsPage";
import Dashboard from "./Components/Pages/Dashboard";
import CalendarPage from "./Components/Pages/CalendarPage";
import Task from "./Components/Pages/Task";
import Reporting from "./Components/Pages/Reporting";
import SettingsPage from "./Components/Pages/SettingsPage";
import Help from "./Components/Pages/Help";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Sidebar sidebardata={data} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/calender" element={<CalendarPage />} />
          <Route path="/task" element={<Task />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

const data = [
  {
    title: "Home",
    icon: <Home />,
    path: "/",
  },
  {
    title: "Dashboard",
    icon: <LayoutDashboard />,
    path: "/dashboard",
  },
  {
    title: "Projects",
    icon: <StickyNote />,
    path: "/projects",
  },
  {
    title: "Calender",
    icon: <Calendar />,
    path: "/calender",
  },
  {
    title: "Task",
    icon: <Layers />,
    path: "/task",
  },
  {
    title: "Reporting",
    icon: <Flag />,
    path: "/reporting",
  },
  {
    title: "Setting",
    icon: <Settings />,
    path: "/settings",
  },
  {
    title: "Help",
    icon: <HelpCircle />,
    path: "/help",
  },
];
