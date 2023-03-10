import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isNavExpanded, setIsNavExpanded] = React.useState(false)

    return (
        <div className={isNavExpanded ? 'sidebar' : 'sidebar__ls'}>
            <div className='sidebar__icons'>
                <div>
                    <i className="bi bi-list stf" id='bi-list' onClick={() => { setIsNavExpanded(!isNavExpanded); }}></i>
                </div>
                <div>
                    <i className="bi bi-bullseye stf"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Dashboard</h5>
                </div>
                <div >
                    <i className="bi bi-star-fill stf"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'}  >Profile</h5>
                </div>
                <div >
                    <i className="bi bi-heart-fill stf"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Favorites</h5>
                </div>
                <div >
                    <i className="bi bi-bar-chart-line-fill stf"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Charts</h5>
                </div>
                <div >
                    <i className="bi bi-geo-alt-fill stf"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Maps</h5>
                </div>
                <div >
                    <i className="bi bi-send stf"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Send</h5>
                </div>
                <div >
                    <i className="bi bi-gear-fill stf"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Config</h5>
                </div>
                <div >
                    <i className="bi bi-shield-lock-fill stf"></i>
                    <h5 className={isNavExpanded ? 'sidebar__text' : 'sidebar__text__invisible'} >Security</h5>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
