import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideNavbar from './SideNavbar';


export const Dashboard = () => {
    return (
        <div>
            <SideNavbar/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
