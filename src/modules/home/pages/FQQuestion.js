/** @format */

import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import frequently from "../../../assets/images/Faq.jpg";

function FQQuestion() {
  return (
    <div>
      <Box component="img" src={frequently} sx={{ width: "100%" }}></Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: { xs: 3, md: 10 },
          flexWrap: { xs: "wrap", md: "wrap", lg: "noWrap" },
          p: 1,
          height: "9 0vh",
        }}
      ></Box>

      <Typography
        sx={{
          fontSize: { xs: 24, md: 45, lg: 55 },
          color: "white",
          position: "absolute",
          top: "30%",
          left: "10%",
          fontWeight: "800",
        }}
      >
        Got a Question? <br /> Get your Answer
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 24, md: 45, lg: 55 },
          color: "black",
          fontWeight: "800",
        }}
      >
        Your Rigth To Know
        <Divider />
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          marginTop: "3rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
          alignContent: "center",
        }}
      >
        <Card sx={{ minWidth: 275, width: "20%", marginBottom: "3rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question of the day
            </Typography>
            <Typography variant="h5" component="div">
              Gwapo bako?
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"> Read More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275, width: "20%", marginBottom: "3rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question of the day
            </Typography>
            <Typography variant="h5" component="div">
              Gwapo bako?
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"> Read More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275, width: "20%", marginBottom: "3rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question of the day
            </Typography>
            <Typography variant="h5" component="div">
              Gwapo bako?
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"> Read More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275, width: "20%", marginBottom: "3rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question of the day
            </Typography>
            <Typography variant="h5" component="div">
              Gwapo bako?
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"> Read More</Button>
          </CardActions>
        </Card>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          marginTop: "3rem",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ minWidth: 275, width: "20%", marginBottom: "3rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question of the day
            </Typography>
            <Typography variant="h5" component="div">
              Gwapo bako?
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"> Read More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275, width: "20%", marginBottom: "3rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question of the day
            </Typography>
            <Typography variant="h5" component="div">
              Gwapo bako?
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"> Read More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275, width: "20%", marginBottom: "3rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question of the day
            </Typography>
            <Typography variant="h5" component="div">
              Gwapo bako?
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"> Read More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275, width: "20%", marginBottom: "3rem" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question of the day
            </Typography>
            <Typography variant="h5" component="div">
              Gwapo bako?
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"> Read More</Button>
          </CardActions>
        </Card>
      </div>
      <div
        style={{ marginTop: "50px", justifyContent: "center", display: "flex" }}
      >
        <Button variant="contained" disableElevation>
          Load more
        </Button>
      </div>
    </div>
  );
}

export default FQQuestion;
