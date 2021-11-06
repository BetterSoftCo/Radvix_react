import { Redirect, Route, RouteProps } from "react-router";
import { toast } from "react-toastify";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  ...routeProps
}: ProtectedRouteProps) {
  console.log(routeProps);

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    toast.error("You do not have access to this route !", {
      position: toast.POSITION.TOP_RIGHT,
    });
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
}
