import React, {useState} from 'react';
import { ProSidebar, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import '../../css/layout/NavBar.scss';
import DashboardOutlinedIcon  from '@material-ui/icons/DashboardOutlined';
import InsertInvitationOutlinedIcon from '@material-ui/icons/InsertInvitationOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function NavBar(props){
    const [isCollapsed, setIsCollapsed] = useState(false);
    const onCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    }
    const logo = () => {
        return(
            isCollapsed ? (<div className="sidebar_mini_logo">
                <img alt="Komrz" src="./images/project_mini_logo.png" />
                <div onClick={onCollapsed}>
                    <ArrowForwardIos />
                </div>
            </div>) 
            : (<div className="sidebar_logo">
                <img alt="......Komrz" src="./images/project_logo.png" />
                < ArrowBackIosIcon onClick={onCollapsed}/>
            </div>)
        );
    };

    return(
        <>
            {logo()}
            <ProSidebar collapsed={isCollapsed} breakPoint>
                <SidebarContent>
                    <Menu >
                        <SubMenu title="DashBoard" defaultOpen icon={< DashboardOutlinedIcon />}>
                            <MenuItem>
                                Financial View
                                <Link to="/dashboard/financial" />
                            </MenuItem>
                            <MenuItem>
                                Procurement View
                                <Link to="/dashboard/procurement" />
                            </MenuItem>
                            <MenuItem>
                                Calendar View
                                <Link to="/dashboard/calendar" />
                            </MenuItem>
                            <MenuItem>
                                Portfolio View
                                <Link to="/dashboard/portfolio" />
                            </MenuItem>
                        </SubMenu>
                        <MenuItem icon={<DescriptionOutlinedIcon/>} >
                            Contracts
                            <Link to="/contracts"/>
                        </MenuItem>
                        <MenuItem icon={<InsertInvitationOutlinedIcon/>} >
                            Events
                            <Link to="/events"/>
                        </MenuItem>
                        <SubMenu title="Reports" icon={< PostAddOutlinedIcon />}>
                            <MenuItem>
                                Contract Summary
                                <Link to="/summary/contract" />
                            </MenuItem>
                            <MenuItem>
                                Vendor Summary
                                <Link to="/summary/vendor" />
                            </MenuItem>
                            <MenuItem>
                                Portfolio Summary
                                <Link to="/summary/portfolio" />
                            </MenuItem>
                        </SubMenu>
                        <SubMenu title="Templates" icon={< DashboardOutlinedIcon />}>
                            <MenuItem>
                                Contracts
                                <Link to="/templates/contracts" />
                            </MenuItem>
                            <MenuItem>
                                Guides
                                <Link to="/templates/guides" />
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </>
    )
}