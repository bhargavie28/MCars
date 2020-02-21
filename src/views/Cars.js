import React from "react";

import innova from "assets/img/innova-crysta.png";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";
const useStyles = makeStyles(styles);




export default function Cars() {
    const classes = useStyles();

    return(
        <div>
            <h4>  Innova Crysta</h4>
<img src = {innova} height= "100" width= "150"/>
<h4>Rs.4500/-</h4>
        </div>
    );
}
