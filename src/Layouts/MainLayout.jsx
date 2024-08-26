import React from 'react'
import Courses from '../components/Courses/courses'
import { Outlet } from 'react-router-dom'
import Table from '../components/Table/table'

export default function MainLayout() {
    return (
        <div>
            <Courses />
            {/* <Table /> */}
            <Outlet />
        </div>
    )
}
