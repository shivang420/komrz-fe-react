import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon } = item;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      // toggleCollapse();
    }
    if (!items) {
      console.log(item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className={
          "sidebar-item-expand-arrow sidebar-item-expand-arrow-expanded"
        }
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <>    
      <ListItem
        // className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <div
          style={{ paddingLeft: depth * depthStep }}
          className="sidebar-item-content"
        >
          <div className="sidebar_label">
            {Icon && <Icon className="sidebar-item-icon" />}
            <div className="sidebar-item-text">{label}</div>
          </div>
        </div>
        {expandIcon}
      </ListItem>
      <div className="sidebar_drop">
        <Collapse in={!collapsed} timeout="auto" unmountOnExit>
          {Array.isArray(items) ? (
            <List disablePadding dense>
              {items.map((subItem, index) => (
                <React.Fragment key={`${subItem.name}${index}`}>
                  {subItem === "divider" ? (
                    <Divider style={{ margin: "100px 0" }} />
                  ) : (
                    <SidebarItem
                      depth={depth + 1}
                      depthStep={depthStep}
                      item={subItem}
                    />
                  )}
                </React.Fragment>
              ))}
            </List>
          ) : null}
        </Collapse>
      </div>
    </>
  );
}

function Sidebar({ items, depthStep, depth, expanded }) {
  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img alt="Komrz" src="./images/project_logo.png" />
      </div>
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" ? (
              <Divider style={{ margin: "10px 0" }} />
            ) : (
              <div className="sidebar-item-content">
                <SidebarItem
                  depthStep={depthStep}
                  depth={depth}
                  expanded={expanded}
                  item={sidebarItem}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
