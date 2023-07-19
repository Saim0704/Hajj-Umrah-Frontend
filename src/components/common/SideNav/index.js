import { useRouter } from "next/router";
import AuthCheck from "../AuthCheck";
import styles from "../../../../styles/Sidebar.module.css";

const sidebarArray = [
  {
    icon: "/icons/package/dashboard-icon.svg",
    title: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    icon: "/icons/package/application-icon.svg",
    title: "Applicants",
    href: "/admin/applicants",
  },
  {
    icon: "/icons/package/package-icon.svg",
    title: "Create Packages",
    href: "/admin/create-package/basic-details",
  },
  {
    icon: "/icons/package/employees-icon.svg",
    title: "Employees",
    href: "/admin/employees",
  },
  {
    icon: "/icons/package/company-iocn.svg",
    title: "Company Detail",
    href: "/admin/companyDetails",
  },
];
const SideNav = ({ children }) => {
  const router = useRouter();

  const isMobile = false;
  const isLoggedIn = true;

  return (
    <div className={styles.wrapper}>
      <AuthCheck>
        {isLoggedIn && (
          <>
            <div className={styles.sidebar}>
              <h1 className={styles.mainHeader}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
                My Account
              </h1>
              <div className={styles.sidebarNav}>
                <ul className={styles.menuList}>
                  {sidebarArray.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={styles.menu}
                        onClick={() => {
                          router.push(`${item.href}`, undefined, {
                            shallow: true,
                          });
                        }}>
                        <img src={item.icon}></img>
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className={styles.mainWrapper}>
              <div className={styles.title}>Create Umrah Package</div>
              <div className={styles.container}>{children}</div>
            </div>
          </>
        )}
      </AuthCheck>
    </div>
  );
};

export default SideNav;
