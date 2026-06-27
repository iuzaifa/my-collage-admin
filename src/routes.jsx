// src/routes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "./components/Layout/Layout";

// Pages
import Dashboard from "./pages/dashboard/Dashboard";
import AllStudent from "./pages/people/student/AllStudent";
import StudentList from "./pages/people/student/StudentList";
import AllTeachers from "./pages/people/teacher/AllTeacher";
import { PageNotFound } from "./pages/PageNotFound";



const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/students/all" element={<AllStudent />} />
        <Route path="/students/list" element={<StudentList />} />
        <Route path="/pages/people/teacher/AllTeacher" element={<AllTeachers />} />


        <Route path="*" element={<PageNotFound />} />


      </Route>

    </Routes>
  );
};

export default AppRoutes;
