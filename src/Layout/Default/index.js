import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import { memo } from "react";



const DefaultLayout = ({ children, hideHeader, customStyles = {}, ...rest }) => {

  return (
    <div style={{ ...customStyles.wrapper }}>
      {!hideHeader && <Header {...rest} />}
        <div style={{ minHeight: "90vh" }}>{children}</div>
      <Footer {...rest} />
    </div>
  );
};

export default memo(DefaultLayout);
