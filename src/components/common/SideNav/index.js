import { useRouter } from "next/router";
import AuthCheck from "../AuthCheck";
import styles from '@/styles/Sidebar.module.css'


const SideNav = ({ children }) => {
  const router = useRouter();

  const isMobile = false
  const isLoggedIn = true

  const sidebarArray = [
    {
      title:'Dashboard',
      href:"/admin/dashboard"
    },
    {
      title:'Applicants',
      href:"/admin/applicants"
    },
    {
      title:'Packages',
      href:"/admin/packages"
    },
    {
      title:'Employees',
      href:"/admin/employees"
    },
    {
      title:'Company Detail',
      href:"/admin/companyDetails"
    }
  ]
  
  
  return (
    <div className={styles.wrapper}>
      <AuthCheck>
        {isLoggedIn && (
          <>
            <div className={styles.sidebar}>
              <h1 className={styles.mainHeader}>MY ACCOUNT</h1>
              <div className={styles.sidebarNav}>
                <ul className={styles.menuList}>
                  {
                    sidebarArray.map((item,index) =>{
                      return(
                        <li
                        key={index}
                        className={styles.menu}
                    onClick={() => {
                      router?.push(`${item.href}`);
                    }}>
                        {item.title} 
                        </li>
                      )
                    })
                  }                  
                </ul>
              </div>
            </div>

            <div className={styles.mainWrapper}>
              <div className={styles.title}>
                Create Umrah Package
              </div>
              <div className={styles.container}>
              {children}
              </div>
            </div>
          </>
        )}
      </AuthCheck>
    </div>
  );
};

export default SideNav;
