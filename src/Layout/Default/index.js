import Index from "@/pages/admin";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import SideNav from "@/src/components/common/SideNav";
import { memo } from "react";



const DefaultLayout = ({ children, hideHeader,withSideBar, customStyles = {}, ...rest }) => {

  return (
    <div style={{ ...customStyles.wrapper }}>
      {!hideHeader && <Header {...rest} />}


      {!!withSideBar ? (
        <div style={{ minHeight: "100vh",display:'flex',width:'100%'}}>
          <SideNav {...rest}>
            {children}
          </SideNav>
        </div>
      ) : (
        <div style={{ minHeight: "100vh" }}>{children}</div>
      )}
      <Footer {...rest} />
    </div>
  );
};

export default memo(DefaultLayout);
