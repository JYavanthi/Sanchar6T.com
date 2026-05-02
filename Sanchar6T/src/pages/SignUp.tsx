import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import des from "../assets/signup-design.png";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Eye, EyeOff } from "lucide-react";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.fname.trim()) {
      alert("Please enter first name");
      return;
    }

    if (!form.lname.trim()) {
      alert("Please enter last name");
      return;
    }

    if (!form.email.trim()) {
      alert("Please enter email");
      return;
    }

    if (!form.password.trim()) {
      alert("Please enter password");
      return;
    }

    if (!form.phone.trim()) {
      alert("Please enter phone number");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userType: 2, // change if needed
          status: "Active",
          password: form.password,
          firstName: form.fname,
          middleName: null,
          lastName: form.lname,
          email: form.email,
          contactNo: form.phone,
          gender: null,
          aadharNo: null,
          pancardNo: null,
          bloodGroup: null,
          primaryUser: true,
          age: null,
          address: null,
          alternativeNumber: null,
          remarks: null,
          companyName: null,
          companyID: null,
          companyAddress: null,
          shopAddress: null,
          organisation: null,
          city: null,
          state: null,
          comments: null,
          gst: null,
          amount: null,
          type: null,
          transactionLimit: null,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message || "Signup successful");

        setForm({
          fname: "",
          lname: "",
          email: "",
          password: "",
          phone: "",
        });

        navigate("/LoginPage");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong while signing up");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[150vh] w-full flex-col items-center justify-center bg-[#113855]">
      {/* TOP DESIGN */}
      <div className="m-[10px]">
        <img src={des} className="w-[450px]" alt="design" />
      </div>

      {/* CARD */}
      <div className="w-[700px] rounded-[50px] bg-white px-[30px] pb-[30px] pt-[10px] text-center">
        {/* LOGO */}
        <div className="inline-block">
          <img src={logo} className="mb-[10px] w-[193px]" alt="logo" />
        </div>

        {/* TITLE */}
        <h2 className="mb-[5px] text-[38px] tracking-[1px] text-[#072b46]">
          Welcome To Sanchar6T
        </h2>

        <p className="mb-[15px] text-[21px] text-[#d14a4a]">
          Create your account – Sanchar6T makes travel simple and hassle-free.
        </p>

        {/* GOOGLE */}
        <button
          type="button"
          className="w-[52%] rounded-[53px] border-2 border-[#262222] bg-white px-[10px] py-[10px] text-[22px]"
        >
          Continue with Google
        </button>

        {/* DIVIDER */}
        <div className="my-[15px] text-[20px] text-[#666]">
          <span>or, sign up with Email.</span>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="w-full">
          {/* NAME ROW */}
          <div className="mb-[6px] flex gap-[28px]">
            <div className="flex-1">
              <label className="mb-[14px] ml-[10px] block text-start text-[24px] font-bold text-[#124d7d]">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                value={form.fname}
                onChange={handleChange}
                className="h-[64px] w-full rounded-[18px] border border-[#8a8a8a] px-[18px] text-[22px] outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="mb-[14px] ml-[10px] block text-start text-[24px] font-bold text-[#124d7d]">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                value={form.lname}
                onChange={handleChange}
                className="h-[64px] w-full rounded-[18px] border border-[#8a8a8a] px-[18px] text-[22px] outline-none"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="mb-[28px]">
            <label className="mb-[14px] ml-[10px] block text-start text-[24px] font-bold text-[#124d7d]">
              Email
            </label>

            <div className="relative">
              <Mail
                className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#3b82f6]"
                size={26}
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter E-mail"
                className="h-[64px] w-full rounded-[18px] border border-[#8a8a8a] pl-[55px] pr-[18px] text-[22px] outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mb-[28px]">
            <label className="mb-[14px] ml-[10px] block text-start text-[24px] font-bold text-[#124d7d]">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="h-[64px] w-full rounded-[18px] border border-[#8a8a8a] pl-[18px] pr-[55px] text-[22px] outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[#3b82f6]"
              >
                {showPassword ? <EyeOff size={26} /> : <Eye size={26} />}
              </button>
            </div>
          </div>

          {/* PHONE */}
          <div className="mb-[28px]">
            <label className="mb-[14px] ml-[10px] block text-start text-[24px] font-bold text-[#124d7d]">
              Phone Number
            </label>

            <div className="flex w-full">
              <span className="flex h-[64px] min-w-[78px] items-center justify-center rounded-l-[18px] border border-[#8a8a8a] bg-[#f5f5f5] text-[20px]">
                +91
              </span>

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter Phone No"
                className="h-[64px] w-full rounded-r-[18px] border border-[#8a8a8a] px-[18px] text-[22px] outline-none"
              />
            </div>
          </div>

          {/* CHECKBOX */}
          <div className="mb-[15px] flex gap-2 text-left text-[21px]">
            <input type="checkbox" />
            <span>
              By providing your phone number, you agree to receive SMS updates.
            </span>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="mt-[10px] mb-[17px] w-[71%] rounded-[60px] bg-[#1e4e73] px-[12px] py-[15px] text-[24px] text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          {/* TERMS */}
          <p className="text-[18px] text-[#666]">
            By Signing Up, you agree to our Terms and Privacy Policy
          </p>

          {/* SIGNIN */}
          <p className="mb-[10px] text-[18px]">
            Already have an account?{" "}
            <Link to="/LoginPage" className="cursor-pointer text-[#1e4e73]">
              Sign in
            </Link>
          </p>

          <Link
            to="/Agent-Login"
            className="rounded-[60px] bg-[#1e4e73] px-[10px] py-[5px] text-white"
          >
            Agent LogIn
          </Link>
        </form>

        {/* CAPTCHA */}
        <div className="mt-[15px] flex items-center gap-[10px] border border-[#ccc] p-[22px]">
          <div className="h-[20px] w-[20px] border border-black"></div>
          <span>I'm not a robot</span>
        </div>
      </div>

      {/* BOTTOM DESIGN */}
      <div className="m-[10px]">
        <img src={des} className="w-[450px]" alt="design" />
      </div>
    </div>
  );
};

export default Signup;