// Define menu items for admin role
let adminMenuItems = [
    {
      icon: "/icons/package/dashboard-icon.svg",
      title: "Create New Applicant",
      href: "/admin-panel/create-new-applicant",
    },
    {
      icon: "/icons/package/dashboard-icon.svg",
      title: "Create Agent",
      href: "/admin-panel/create-agent",
    },
    {
      icon: "/icons/package/package-icon.svg",
      title: "Create Package",
      href: "/admin-panel/create-package/basic-details",
    },
    {
      icon: "/icons/package/dashboard-icon.svg",
      title: "Dashboard",
      href: "/admin-panel/dashboard",
    },
    {
      icon: "/icons/package/employees-icon.svg",
      title: "Packages List",
      href: "/admin-panel/packages-list",
    },
    {
      icon: "/icons/package/application-icon.svg",
      title: "Applicants List",
      href: "/admin-panel/applicants-list",
    },
    {
      icon: "/icons/package/application-icon.svg",
      title: "Agent List",
      href: "/admin-panel/agent-list",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "New Booking",
      href: "/admin-panel/newBooking",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Booking List",
      href: "/admin-panel/bookingList",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Sightseeing",
      href: "/admin-panel/master-data/sightseeing",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Additional Items",
      href: "/admin-panel/master-data/additional-items",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Local Place",
      href: "/admin-panel/master-data/local-transport",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Travel By",
      href: "/admin-panel/master-data/travel-by",
    },
];

let agentMenuItems = [
    {
      icon: "/icons/package/dashboard-icon.svg",
      title: "Create New Applicant",
      href: "/admin-panel/create-new-applicant",
    },
    
    {
      icon: "/icons/package/package-icon.svg",
      title: "Create Package",
      href: "/admin-panel/create-package/basic-details",
    },
    {
      icon: "/icons/package/dashboard-icon.svg",
      title: "Dashboard",
      href: "/admin-panel/dashboard",
    },
    {
      icon: "/icons/package/employees-icon.svg",
      title: "Packages List",
      href: "/admin-panel/packages-list",
    },
    {
      icon: "/icons/package/application-icon.svg",
      title: "Applicants List",
      href: "/admin-panel/applicants-list",
    },
    
    {
      icon: "/icons/package/company-iocn.svg",
      title: "New Booking",
      href: "/admin-panel/newBooking",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Booking List",
      href: "/admin-panel/bookingList",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Sightseeing",
      href: "/admin-panel/master-data/sightseeing",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Additional Items",
      href: "/admin-panel/master-data/additional-items",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Local Place",
      href: "/admin-panel/master-data/local-transport",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Travel By",
      href: "/admin-panel/master-data/travel-by",
    },
];

export function getMenuItems(role) {
    switch (role) {
        case 'admin':
            return adminMenuItems;
        case 'agent':
            return agentMenuItems;
        default:
            return [];
    }
}


