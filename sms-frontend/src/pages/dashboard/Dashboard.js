import React from 'react'
import { connect } from 'react-redux'
import { Widget, Widget2, Widget3 } from './dashboardComponents/dashboardWidgetSection/Widgets';
import DashboardMain from './dashboardComponents/dashMainSection/DashboardMain';

export const Dashboard = (props) => {
    return (
        <div id="dashboard-page">
            <header className="dashboard-title">Dashboard</header>
            <section id="dash-widget">
                <Widget />
                <Widget2 />
                <Widget3 />
            </section>
            <DashboardMain />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
