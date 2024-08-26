import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Courses from './components/Courses/courses';
import CourseDetails from './components/CourseDetails/course-Details';
export default function App() {
  let route = createBrowserRouter([
    {
      path:'/',
      // element:<MainLayout />,
      children: [
        { path: '/', element: <Courses /> },
        { path: 'courses', element: <Courses /> },
        { path: 'courseDetails', element: <CourseDetails /> }


      ]
    }
  ])
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}
