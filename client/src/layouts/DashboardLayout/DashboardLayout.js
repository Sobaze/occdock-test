import React from 'react'
import Admin from '../Admin/Admin'
import User from '../User/User'

const DashboardLayout = ({ isAdmin }) => {
    return (
        <>   
            {
                isAdmin ?
                    <Admin /> :
                    <User />
            }
        </>
    )
}

export default DashboardLayout
