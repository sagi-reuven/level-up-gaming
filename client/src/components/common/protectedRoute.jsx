import { Redirect, Route } from "react-router-dom";
import userService from "../../services/usersService";

/*  protected route is a component thats meant to replace a normal route and protect it from unlogged users.
if user is logged 
and returns either a component if user is logged or redirect him to signin if user isnt logged  */
const ProtectedRoute = ({ component: Component, render, biz, ...rest }) => {
  const isUserLoged = userService.isUserLogged();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isUserLoged) {
          return (
            <Redirect
              to={{
                pathname: "/signin",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
