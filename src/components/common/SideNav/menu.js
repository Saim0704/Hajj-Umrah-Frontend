// Define menu items for admin role
let adminMenuItems = [
    {
      icon: "/icons/package/dashboard-icon.svg",
      title: "Create New Applicant",
      href: "/admin/create-new-applicant",
    },
    {
      icon: "/icons/package/dashboard-icon.svg",
      title: "Create Agent",
      href: "/admin/create-agent",
    },
    {
      icon: "/icons/package/package-icon.svg",
      title: "Create Package",
      href: "/admin/create-package/basic-details",
    },
    {
      icon: "/icons/package/dashboard-icon.svg",
      title: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      icon: "/icons/package/employees-icon.svg",
      title: "Packages List",
      href: "/admin/packages-list",
    },
    {
      icon: "/icons/package/application-icon.svg",
      title: "Applicants List",
      href: "/admin/applicants-list",
    },
    {
      icon: "/icons/package/application-icon.svg",
      title: "Agent List",
      href: "/admin/agent-list",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "New Booking",
      href: "/admin/newBooking",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Booking List",
      href: "/admin/bookingList",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Sightseeing",
      href: "/admin/master-data/sightseeing",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Additional Items",
      href: "/admin/master-data/additional-items",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Local Place",
      href: "/admin/master-data/local-transport",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Travel By",
      href: "/admin/master-data/travel-by",
    },
];

let agentMenuItems = [
    {
      icon: "/icons/package/dashboard-icon.svg",
      title: "Create New Applicant",
      href: "/admin/create-new-applicant",
    },
    
    {
      icon: "/icons/package/package-icon.svg",
      title: "Create Package",
      href: "/admin/create-package/basic-details",
    },
    {
      icon: "/icons/package/dashboard-icon.svg",
      title: "Dashboard",
      href: "/admin/dashboard",
    },
    {
      icon: "/icons/package/employees-icon.svg",
      title: "Packages List",
      href: "/admin/packages-list",
    },
    {
      icon: "/icons/package/application-icon.svg",
      title: "Applicants List",
      href: "/admin/applicants-list",
    },
    
    {
      icon: "/icons/package/company-iocn.svg",
      title: "New Booking",
      href: "/admin/newBooking",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Booking List",
      href: "/admin/bookingList",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Sightseeing",
      href: "/admin/master-data/sightseeing",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Additional Items",
      href: "/admin/master-data/additional-items",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Local Place",
      href: "/admin/master-data/local-transport",
    },
    {
      icon: "/icons/package/company-iocn.svg",
      title: "Master Data Travel By",
      href: "/admin/master-data/travel-by",
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


