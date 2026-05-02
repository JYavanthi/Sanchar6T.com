
import React, { useState, useContext } from "react";
import axios from "axios";
import { CheckCircle } from "lucide-react";
import logo from "../assets/logo.jpeg";
import facebookIcon from "../assets/facebook.png";
import instaIcon from "../assets/instagram.png";
import emailIcon from "../assets/email.png";
import { UserContext } from "../components/context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    Fname: "",
    Mname: "",
    Lname: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const toggleForm = (type: "login" | "signup") => {
    setIsLogin(type === "login");
    setForm({
      Fname: "",
      Mname: "",
      Lname: "",
      email: "",
      phoneNumber: "",
      password: "",
      gender: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? "http://localhost:5000/api/login"
        : "http://localhost:5000/api/signup";

      const res = await axios.post(url, form);

      if (res.data.success) {
        login(res.data.user);
        setPopupMessage(isLogin ? "Login Successful!" : "Signup Successful!");
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
        }, 2000);
      } else {
        alert(res.data.message);
      }
    } catch (err: any) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://productcatalo.my.canva.site/buses/_assets/media/c01490272e707359a4126caf49dd4d20.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {showPopup && (
        <div
          className="absolute inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          style={{ backdropFilter: "blur(3px)" }}
        >
          <div
            className="bg-white p-8 rounded-2xl shadow-2xl text-center animate-fade-in"
            style={{
              maxWidth: "350px",
              width: "90%",
              borderTop: "6px solid #3D85C6",
            }}
          >
            <CheckCircle size={60} color="#3D85C6" className="mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {popupMessage}
            </h2>
            <p className="text-gray-500">Redirecting to home page...</p>
          </div>
        </div>
      )}

      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">
          <div className="hidden md:block md:w-1/2 relative">
            <div
              className="absolute top-6 left-0 right-0 bg-[#3D85C6]/80 text-white px-4 py-4 text-center text-[35px] font-semibold shadow-md"
              style={{ lineHeight: "1.2" }}
            >
              Travel is the only thing<br />you buy that makes you<br />Richer
            </div>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://productcatalo.my.canva.site/buses/_assets/media/8ed4ef5c78e88bb6e8aab6ed25ef25d8.jpg')",
              }}
            ></div>
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex justify-center mb-4">
              <img src={logo} alt="Logo" className="w-24 md:w-32" />
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              {[facebookIcon, instaIcon, emailIcon].map((icon, i) => (
                <button
                  key={i}
                  className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:shadow-md transition-shadow"
                >
                  <img src={icon} alt="social" className="w-6 h-6" />
                </button>
              ))}
            </div>

            {/* ✅ Creative Toggle Buttons */}
          
<div className="flex justify-center mb-6 relative bg-gray-200 rounded-full p-1 w-80 mx-auto">
  {/* Sliding background */}
  <div
    className={`absolute top-0 left-0 h-full w-1/2 bg-[#3D85C6] rounded-full shadow-md transition-all duration-300`}
    style={{
      transform: isLogin ? "translateX(0%)" : "translateX(100%)",
    }}
  ></div>

  {/* Login Button */}
  <button
    className={`relative z-10 w-1/2 py-3 text-center font-semibold transition-colors duration-300 ${
      isLogin ? "text-white" : "text-gray-700"
    }`}
    onClick={() => toggleForm("login")}
  >
    Login
  </button>

  {/* Sign Up Button */}
  <button
    className={`relative z-10 w-1/2 py-3 text-center font-semibold transition-colors duration-300 ${
      !isLogin ? "text-white" : "text-gray-700"
    }`}
    onClick={() => toggleForm("signup")}
  >
    Sign Up
  </button>
</div>


            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <input
                    name="Fname"
                    placeholder="First Name*"
                    value={form.Fname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                  />
                  <input
                    name="Mname"
                    placeholder="Middle Name"
                    value={form.Mname}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                  />
                  <input
                    name="Lname"
                    placeholder="Last Name*"
                    value={form.Lname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
                  />
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </>
              )}

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
              />
              <input
                name="phoneNumber"
                placeholder="Phone Number"
                value={form.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-black"
              />

              <button
                type="submit"
                className="w-full py-2 bg-[#3D85C6] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;
