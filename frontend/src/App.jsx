import React, { useContext } from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./Components/Signup";
import Contacts from "./Contact/Contacts";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "./Context/Authprovider";

const App = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-100 dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
