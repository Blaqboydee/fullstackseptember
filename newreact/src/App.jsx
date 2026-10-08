import { useState } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Notfound from "./pages/Notfound";
import Home from "./components/Home";
import Activites from "./components/Activites";
import Products from "./pages/Products";
import Usersdummy from "./pages/Usersdummy";
import ProductPage from "./pages/ProductPage";
import Users from "./components/Users";
import axios from "axios";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  console.log(location.pathname); //profile

  const paths = ["/dashboard", "/profile"];

  const shouldHaveNavbar = paths.includes(location.pathname);

  console.log(shouldHaveNavbar);

  const user = true;

  const demoUser = {
    username: "Guest",
  };

  const [userdetails, setUserdetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handledetails = (e) => {
    setUserdetails({ ...userdetails, [e.target.name]: e.target.value });
    console.log(userdetails);
  };

  const register = () => {
    if (Object.values(userdetails).includes("")) {
      alert("please fill all fields");
    } else {
      console.log(userdetails);

      // fetch("http://localhost:3000/users/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(userdetails)
      // }).then(res => res.json()).then(data => console.log(data))

      axios
        .post("http://localhost:3000/users/signup", userdetails)
        .then((res) => navigate('/login'));
    }
  };

  return (
    <>
      {shouldHaveNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <Landingpage handledetails={handledetails} register={register} />
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Products />} />
        <Route path="/usersdummy/:id" element={<Usersdummy />} />
        <Route path="/usersdummy/:id" element={<Usersdummy />} />
        <Route path="/productpage/:id" element={<ProductPage />} />
        <Route
          path="/dashboard"
          element={
            users.length > 0 ? (
              <Dashboard user={users[0]} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="activities" element={<Activites />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
