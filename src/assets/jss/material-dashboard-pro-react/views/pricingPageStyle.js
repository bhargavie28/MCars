import {
  container,
  defaultFont,
  cardTitle,
  roseColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.js";

const pricingPageStyle = theme => ({
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  title: {
    textAlign: "center",
    fontSize: "30px",
    fontStyle: "Arial",
    color: "#0F52BA"
  },
  description: {
    fontSize: "18px",
    color: whiteColor,
    textAlign: "center"
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important"
  },
  cardCategory: {
    color: grayColor[0],
    marginTop: "10px"
  },
  cardCategoryWhite: {
    color: whiteColor,
    marginTop: "10px"
  },
  icon: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid " + grayColor[11],
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconWhite: {
    color: whiteColor
  },
  iconRose: {
    color: roseColor[0]
  },
  marginTop30: {
    marginTop: "30px"
  },
  car: {
    height: "100",
    width: "100"
  }
});

export default pricingPageStyle;
