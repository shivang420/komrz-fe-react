import React, {useState} from 'react';
import { ProSidebar, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import '../../css/layout/NavBar.scss';
import DashboardOutlinedIcon  from '@material-ui/icons/DashboardOutlined';
import InsertInvitationOutlinedIcon from '@material-ui/icons/InsertInvitationOutlined';
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
                <img alt="Komrz" src="./images/project_logo.png" />
                < ArrowBackIosIcon onClick={onCollapsed}/>
            </div>)
        );
    }

    return(
        <>
            {logo()}
            <ProSidebar collapsed={isCollapsed} breakPoint>
                <SidebarContent>
                    <Menu >
                        <MenuItem icon={<DashboardOutlinedIcon/>} >
                            Dashboard
                            <Link to="/contracts"/>
                        </MenuItem>
                        <SubMenu title="Components" icon={<InsertInvitationOutlinedIcon/>}>
                            <MenuItem >Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </>
    )
}