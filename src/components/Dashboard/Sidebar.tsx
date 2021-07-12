import React from "react";
import { Button } from "react-bootstrap";
import { NavLink, useRouteMatch } from "react-router-dom";
import routes from '../../routes/dashboard.routes';


export default function Sidebar() {
   const match = useRouteMatch();

   return <div className={"bg-dark bg-gradient text-white py-3 px-2 h-100"}>
      <h4>Dashboard</h4>
      <hr className={"bg-white"} />
      <div className={"w-100 pb-5"}>
         {
            routes.map((route, idx) => (
               <Button
                  key={idx}
                  as={NavLink}
                  to={match.path + route.path}
                  exact={route.exact}
                  variant={"link"}
                  className={"text-white text-left"}
                  activeClassName={"bg-primary"}
                  block
               >{route.title}</Button>
            ))
         }
      </div>
   </div>;
}
