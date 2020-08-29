import DashboardOutlinedIcon  from '@material-ui/icons/DashboardOutlined';
import InsertInvitationOutlinedIcon from '@material-ui/icons/InsertInvitationOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import Contracts from './Components/SideBar/contract.js';
import Events from './Components/SideBar/events.js';

const dashboardRoutes = [
  {
    name: "dashboard",
    label: "DashBoard",
    Icon: DashboardOutlinedIcon,
    items: [
      { name: "financialView", label: "Financial View", link: "/dashboard/financial"},
      { name: "procurementView", label: "Procurement View", link: "/dashboard/procurement"},
      { name: "calendarView", label: "Calendar View", link: "/dashboard/calendar"},
      { name: "portfolioView", label: "Portfolio View", link: "/dashboard/portfolio"}
    ]
  },
  { name: "contract", label: "Contracts", Icon: DescriptionOutlinedIcon, link: "/contracts", Component: Contracts},
  { name: "event", label: "Events", Icon: InsertInvitationOutlinedIcon, link: "/events", Component: Events},
  {
    name: "reports",
    label: "Reports",
    Icon: PostAddOutlinedIcon,
    items: [
      { name: "contractSummary", label: "Contract Summary", link: "/summary/contract"},
      { name: "vendorSummary", label: "Vendor Summary", link: "/summary/vendor"},
      { name: "portfolioSummary", label: "Portfolio Summary", link: "/summary/portfolio"}
    ]
  },
  {
    name: "templates",
    label: "Templates",
    Icon: DashboardOutlinedIcon,
    items: [
      { name: "contracts", label: "Contracts", link: "/template/contracts"},
      { name: "guides", label: "Guides", link: "/templates/guides"}
    ]
  }
];

export default dashboardRoutes;
