import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

function PrivateRoute(props) {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  if (token) {
    return (
      <>
        <NavBar />
        <div className="page-content m-16 ">
          {props.role === user.role || !props.role ? props.component : null}
        </div>
        <Footer />
      </>
    );
  } else {
    return <Navigate to={"/signin"} replace />;
  }
}

export default PrivateRoute;
