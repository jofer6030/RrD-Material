import { Grid } from "@mui/material";
import { AccountBalance, Category, Home } from "@mui/icons-material";
import { Link, Outlet } from "react-router-dom";

import "./style.css";

const SideBar = () => {
  return (
    <Grid container className="sidebar">
      <Grid item xs={2} md={3} lg={2} className="sideBarContainer">
        <Grid
          container
          alignItems="center"
          justifyContent="space-evenly"
          className="logoContainer"
        >
          <Grid item xs={2}>
            <img
              src="https://images.vexels.com/media/users/3/137617/isolated/lists/c45afb857e72b86e87baaf255f71ff37-resumen-logo-geometrico.png"
              alt="Logo"
              className="imgLogo"
            />
          </Grid>
          <h1 className="logoTitle">IMM Market</h1>
        </Grid>

        <Grid container direction="column" alignItems="center" mt={4}>
          <Grid item className="imgAvatarContainer" mb={2}>
            <img
              src="https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318011_960_720.png"
              alt="avatar"
              className="imgAvatar"
            />
          </Grid>
          <span className="nameAvatar">Randall Cohen</span>
        </Grid>

        <Grid
          container
          direction="column"
          mt={8}
          alignItems="flex-start"
          paddingLeft={8}
        >
          <Grid container mb={4} className="linksSideBar" alignItems="flex-end">
            <Home />
            <Link to="/">Home</Link>
          </Grid>
          <Grid container mb={4} className="linksSideBar" alignItems="flex-end">
            <AccountBalance />
            <Link to="products">Productos</Link>
          </Grid>
          <Grid container mb={4} className="linksSideBar" alignItems="flex-end">
            <Category />
            <Link to="categories">Category</Link>
          </Grid>
          <Grid container mb={4} className="linksSideBar" alignItems="flex-end">
            <Category />
            <Link to="users">Users</Link>
            <Link to="dashboard">Dashboard</Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10} md={9} lg={10} className="contenido">
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default SideBar;
