const styles = {
  wrapper: {
    display: "flex",
    width: "100%",

    "& .allmargin": {
      marginTop: "40px",
      "@media(max-width:668px)": {
        marginTop: "25px",
      },
    },
  },
  sidebar: {
    backgroundColor: "red",
    display: "flex",
    width: "140px",
    flexDirection: "column",
    flex: "0 0 140px",
    height: "auto",
    "@media(max-width:668px)": {
      position: "fixed",
      bottom: "0",
      width: "100%",
      zIndex: "99",
      display: "none",
    },
  },
  sidebarNav: {
    "& ul": {
      margin: "0",
      padding: "0",
      "@media(max-width:668px)": {
        display: "flex",
      },
      "& li": {
        display: "block",
        fontWeight: "600",
        fontSize: "15px",
        color: "#000",
        textAlign: "center",
        padding: "13px",
        cursor: "pointer",

        "& span": {
          border: "1px solid #888BA8",
          borderRadius: "100px",
          width: "55px",
          height: "55px",
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
          "& img": {
            width: "25px",
            mixBlendMode: "exclusion",
          },
        },
        "@media(max-width:668px)": {
          width: "100%",
          padding: "10px 0",
          fontSize: "14px",
          fontWeight: "700",
          "&:nth-child(5)": {
            display: "none",
          },
          "&:nth-child(6)": {
            display: "none",
          },

          "& span": {
            width: "40px",
            height: "40px",
          },
          "& img": {
            width: "20px",
          },
        },
      },
    },
    "& .activeNav": {
      backgroundColor: "blue",
    },
  },
  mainWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "0px",
    backgroundColor: "pink",
    minHeight: "100vh",
    overflow: "hidden",
  },
  contentFavtv: {
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    "@media(max-width:668px)": {
      padding: "15px",
    },
  },
};

export default styles;
