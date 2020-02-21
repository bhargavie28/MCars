import React from "react";
import Divider from '@material-ui/core/Divider';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import Home from "@material-ui/icons/Home";
import Business from "@material-ui/icons/Business";
import AccountBalance from "@material-ui/icons/AccountBalance";

import innova from "assets/img/innova-crysta.png";
import xuv500 from "assets/img/xuv500.png";
import Ertiga from "assets/img/Ertiga.png";
import Brezza from "assets/img/Brezza.png";

import Polo from "assets/img/Polo.png";
import Vento from "assets/img/Vento.png";
import scross from "assets/img/scross.png";
import Baleno from "assets/img/Baleno.png";
import SwiftDezire from "assets/img/swift-dezire.png";
import i20 from "assets/img/i20.png";
import Swift from "assets/img/Swift.png";
import i10 from "assets/img/i10.png";







// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.js";

const useStyles = makeStyles(styles);

export default function PricingPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>Pick the best car for you</h2>
          <h5 className={classes.description}>
            You have Free Unlimited Updates and Premium Support on each package.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3}> 
          <Card pricing plain>
            <CardBody pricing plain>
              <h4 className={classes.cardCategory}>Innova Crysta</h4>
              <div>
                <img src={innova} height= "100" width = "150"/>
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                Rs.4500/-
              </h3>
              <p className={classes.cardCategory}>
                This is good if your team size is between 7 and 8 Persons.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardBody>
              <h6 className={classes.cardCategory}>XUV 500</h6>
              <div className={classes.icon}>
                <Home className={classes.iconRose} />
              </div>
              <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                Rs.3500/-
              </h3>
              <p className={classes.cardDescription}>
                This is good if your team size is between 7 and 8 Persons.
              </p>
              <Button round color="rose">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem> */}
        {/* <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h6 className={classes.cardCategory}>MEDIUM COMPANY</h6>
              <div className={classes.icon}>
                <Business className={classes.iconWhite} />
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                $69
              </h3>
              <p className={classes.cardCategory}>
                This is good if your company size is between 11 and 99 Persons.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h6 className={classes.cardCategory}>MEDIUM COMPANY</h6>
              <div className={classes.icon}>
                <Business className={classes.iconWhite} />
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                $69
              </h3>
              <p className={classes.cardCategory}>
                This is good if your company size is between 11 and 99 Persons.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h6 className={classes.cardCategory}>MEDIUM COMPANY</h6>
              <div className={classes.icon}>
                <Business className={classes.iconWhite} />
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                $69
              </h3>
              <p className={classes.cardCategory}>
                This is good if your company size is between 11 and 99 Persons.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h6 className={classes.cardCategory}>MEDIUM COMPANY</h6>
              <div className={classes.icon}>
                <Business className={classes.iconWhite} />
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                $69
              </h3>
              <p className={classes.cardCategory}>
                This is good if your company size is between 11 and 99 Persons.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h6 className={classes.cardCategory}>MEDIUM COMPANY</h6>
              <div className={classes.icon}>
                <Business className={classes.iconWhite} />
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                $69
              </h3>
              <p className={classes.cardCategory}>
                This is good if your company size is between 11 and 99 Persons.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h6 className={classes.cardCategory}>MEDIUM COMPANY</h6>
              <div className={classes.icon}>
                <Business className={classes.iconWhite} />
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                $69
              </h3>
              <p className={classes.cardCategory}>
                This is good if your company size is between 11 and 99 Persons.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h6 className={classes.cardCategory}>MEDIUM COMPANY</h6>
              <div className={classes.icon}>
                <Business className={classes.iconWhite} />
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                $69
              </h3>
              <p className={classes.cardCategory}>
                This is good if your company size is between 11 and 99 Persons.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h6 className={classes.cardCategory}>ENTERPRISE</h6>
              <div className={classes.icon}>
                <AccountBalance className={classes.iconWhite} />
              </div>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                $159
              </h3>
              <p className={classes.cardCategory}>
                This is good if your company size is 99+ persons.
              </p>
              <Button round color="white">
                Choose plan
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          
{/* <h1 className={classes.title}>Pick the best car for you</h1> */}
          </GridItem>
          </GridContainer>
          <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {innova} height= "100" width= "150" />
           <h3>Innova Crysta</h3>
           <h3>Rs.4500/-</h3>

           </div>
           <Divider  />
            </GridItem>
          <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {xuv500} height= "100" width= "150" />
           <h3>XUV 500</h3>
           <h3>Rs.3500/-</h3>

           </div>
           <Divider  />

            </GridItem>
          <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {Ertiga} height= "100" width= "150" />
           <h3>Ertiga</h3>
           <h3>Rs.3200/-</h3>

           </div>
           <Divider  />

            </GridItem>
          <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {Brezza} height= "100" width= "150" />
           <h3>Brezza</h3>
           <h3>Rs.3000/-</h3>

           </div>
           <Divider  />

           </GridItem>
           <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {Polo} height= "100" width= "150" />
           <h3>Polo</h3>
           <h3>Rs.3000/-</h3>

           </div>
           <Divider  />

           </GridItem>
           <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {Vento} height= "100" width= "150" />
           <h3>Vento</h3>
           <h3>Rs.3000/-</h3>

           </div>
           <Divider  />

           </GridItem>
           <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {scross} height= "100" width= "150" />
           <h3>SCross</h3>
           <h3>Rs.3000/-</h3>

           </div>
           <Divider  />

           </GridItem>
           <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {Baleno} height= "100" width= "150" />
           <h3>Baleno</h3>
           <h3>Rs.3000/-</h3>

           </div>
           <Divider  />

           </GridItem>
           <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {SwiftDezire} height= "100" width= "150" />
           <h3>Dezire</h3>
           <h3>Rs.2700/-</h3>

           </div>
           <Divider  />

           </GridItem>
           <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {i20} height= "100" width= "150" />
           <h3>I20</h3>
           <h3>Rs.2500/-</h3>

           </div>
           <Divider  />

           </GridItem>
           <GridItem xs={12} sm={12} md={3}>
         <div>

           <img src = {Swift} height= "100" width= "150" />
           <h3>Swift</h3>
           <h3>Rs.2500/-</h3>

           </div>
           <Divider  />

          </GridItem>
           <GridItem xs={12} sm={12} md={3}>
         <div>
           <img src = {i10} height= "100" width= "150" />
           <h3>I10</h3>
           <h3>Rs.2000/-</h3>

           </div>
           <Divider  />

            </GridItem>
      </GridContainer>
    </div>
  );
}
