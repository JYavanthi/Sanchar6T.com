
// import React, { useState } from "react";
// import logo from "../assets/logo.jpeg"; // Your logo
// import facebookIcon from "../assets/facebook.png"; // Facebook icon
// import instaIcon from "../assets/instagram.png"; // Instagram icon
// import emailIcon from "../assets/email.png"; // Email icon

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({ email, password });
//   };

//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://productcatalo.my.canva.site/buses/_assets/media/c01490272e707359a4126caf49dd4d20.jpg')",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//       {/* Centered Form */}
//       <div className="relative z-10 flex items-center justify-center h-full px-4">
//         <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">

//           {/* Slider/Image Section */}
//           <div className="hidden md:block md:w-1/2 relative">
//             {/* Text Overlay at Top Stretched */}
//             <div className="absolute top-6 left-0 right-0 bg-[#3D85C6]/80 text-white px-4 py-4 text-center text-[35px] font-semibold shadow-md">
//   Travel is the only thing<br />you buy that makes you<br />Richer
// </div>

//             {/* Image */}
//             <div
//               className="h-full w-full bg-cover bg-center"
//               style={{
//                 backgroundImage:
//                   "url('https://productcatalo.my.canva.site/buses/_assets/media/8ed4ef5c78e88bb6e8aab6ed25ef25d8.jpg')",
//               }}
//             ></div>
//           </div>

//           {/* Form Section */}
//           <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center ">
            
//             {/* Logo */}
//             <div className="flex justify-center mb-4">
//               <img src={logo} alt="Logo" className="w-24 md:w-32" />
//             </div>

//             {/* Social Login Icons Below Logo */}
//             <div className="flex justify-center space-x-6 mb-6">
//               <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:shadow-md transition-shadow">
//                 <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
//               </button>
//               <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:shadow-md transition-shadow">
//                 <img src={instaIcon} alt="Instagram" className="w-6 h-6" />
//               </button>
//               <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:shadow-md transition-shadow">
//                 <img src={emailIcon} alt="Email" className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Login Form */}
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
//                   placeholder="Enter your email"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
//                   placeholder="Enter your password"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Login
//               </button>
//             </form>

//             <p className="text-center text-sm text-[#3D85C6] mt-6">
//               Don't have an account? <a href="#" className="text-[#3D85C6]-600 font-medium hover:underline">Sign Up</a>
//             </p>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import logo from "../assets/logo2.jpeg";
import facebookIcon from "../assets/facebook1.png";
import instaIcon from "../assets/insta.jpg";
import emailIcon from "../assets/mail.png";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter email or phone number");
      return;
    }

    if (!password.trim()) {
      alert("Please enter password");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailOrPhone: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful");
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-[150vh] w-full bg-[url('https://productcatalo.my.canva.site/buses/_assets/media/c01490272e707359a4126caf49dd4d20.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="grid h-[600px] w-[1100px] grid-cols-[1.1fr_0.9fr] overflow-hidden rounded-[30px]">
          <div className="flex items-start bg-[url('https://productcatalo.my.canva.site/buses/_assets/media/8ed4ef5c78e88bb6e8aab6ed25ef25d8.jpg')] bg-cover bg-center">
            <div className="mt-[15px] flex w-full flex-col gap-4 bg-[rgba(34,45,138,0.78)] px-[30px] py-[12px] text-center text-[32px] font-medium leading-[1.08] text-white">
              <span>TRAVEL IS THE ONLY THING</span>
              <span>YOU BUY THAT MAKES YOU</span>
              <span>RICHER</span>
            </div>
          </div>

          <div className="flex flex-col items-center bg-gradient-to-b from-[#2e3192] to-[#1b1f6a] p-[40px]">
            <img src={logo} alt="logo" className="mb-5 w-[160px]" />

            <div className="mb-10 flex gap-[50px]">
              {[facebookIcon, instaIcon, emailIcon].map((icon, i) => (
                <div
                  key={i}
                  className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white/10"
                >
                  <img
                    src={icon}
                    alt="icon"
                    className="w-[35px] rounded-[57%]"
                  />
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex w-full flex-col">
              <div className="mb-[30px] border-b-2 border-white">
                <input
                  type="text"
                  placeholder="Email / Phone No."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent py-[10px] text-[20px] text-white outline-none placeholder:text-white"
                />
              </div>

              <div className="mb-[30px] border-b-2 border-white">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent py-[10px] text-[20px] text-white outline-none placeholder:text-white"
                />
              </div>

              <div className="mb-[30px] text-right text-[14px] text-white">
                Forgot Your Password?
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mb-5 rounded-[30px] bg-white py-[12px] text-[18px] text-[#1b1f6a] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Please wait..." : "Enter"}
              </button>

              <div className="flex justify-center text-center text-white">
                <p>Don’t have an Account?</p>
                <Link to="/Sign-up" className="ml-[5px] text-[15px]">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
