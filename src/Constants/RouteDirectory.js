import Home from "../Containers/Home/Home";
import Dummy from "../Containers/Dummy/Dummy";
import { HomeOutlined } from "@material-ui/icons";
import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";


export const ROUTE_DIRECTORY = [
  {
    title: 'Home',
    pathname: '/home',
    component: Home,
    icon: <HomeOutlined />
  },
  {
    title: 'Dummy 1',
    pathname: '/dummy-1',
    component: Dummy,
    icon: <PhoneIcon />
  },
  {
    title: 'Dummy 2',
    pathname: '/dummy-2',
    component: Dummy,
    icon: <PhoneIcon />
  }
];

