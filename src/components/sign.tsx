import carosol from "../asset/carousel 2.png";
import frame from "../asset/frames.png";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import InputField from "./inputField";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/firebase';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import Styles from '../styles/signUpStyle.module.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import toast, { Toaster } from 'react-hot-toast';

export default function Sign() {
    const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [variant, setVariant] = useState("login");
  const router = useRouter();

  const variantToggle = useCallback((current: any) => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (variant === "register") {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success ("register success")
        router.push('/');

      } catch (error) {
        toast.error("email already exist")
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success ("login success")
        router.push('/'); // Redirect to the home page after successful login

      } catch (error) {
        toast.error("wrong email or password")
      }
    }
  };
  
  // const formik = useFormik({
  //   initialValues: {
  //     userName: '',
  //     fullName: '',
  //     email: '',
  //     password: '',
  //     variant: 'login'
  //   },
  //   onSubmit: async (values) => {
  //     console.log(values)
      
  //     if (values.variant === "login") {
  //       console.log("Login form submitted:", values); // Add this line to check if the login form is submitted
  //       // ... login logic ...
  //     }
  //     try {
        
  //       if (values.variant === "register") {
  //         await createUserWithEmailAndPassword(auth, values.email, values.password);
  //         router.push('/');
  //       } 
  //        else if (values.variant === "login") {
  //         console.log("what")
  //          await signInWithEmailAndPassword(auth, values.email, values.password);
  //         router.push('/');
  //       } 
  //       else {
  //         console.log("some problem")
  //       }
  //     } catch (error) {
  //       if (error === 'auth/email-already-in-use') {
  //         alert("Email already exists. Please use a different email.");
  //       } else if (error === 'auth/wrong-password' || error === 'auth/user-not-found') {
  //         alert("Wrong email or password.");
  //       } else {
  //         alert("An error occurred. Please try again later.");
  //       }
  //     }
  //   },
    
  //   validationSchema: Yup.object({
  //     userName: Yup.string().required(''),
  //     fullName: Yup.string().required(''),
  //     email: Yup.string().email('Please enter a valid email address').required('Email is required'),
  //     password: Yup.string().required('Password is required'),
  //   }),
  // });
 
  
  return (
    <>
      <div className="flex border-solid border-2 border-indigo-600 justify-center items-center">
        <div className="flex mr-8">
          <Image className="" src={frame} alt="frame" />
          <Image className="-ml-72" src={carosol} alt="carosol" />
        </div>
        <div  className="flex justify-center">
          <form onSubmit={handleSignup} className="bg-white bg-opacity-50 px-16 py-16 self-center mt-4 lg:max-w-lg rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <>
                  <InputField
                    label="UserName"
                    value={userName}
                    onChange={(e: any) => setUserName(e.target.value)}
                    //onChange={formik.handleChange}
                    id="userName"
                  />
                  {/* {formik.touched.userName && formik.errors.userName && (
                    <div className={Styles.error}>{formik.errors.userName}</div>
                  )} */}

                  <InputField
                    label="FullName"
                    value={fullName}
                    //onChange={formik.handleChange}
                    onChange={(e: any) => setFullName(e.target.value)}
                    id="fullName"
                  />
                  {/* {formik.touched.fullName && formik.errors.fullName && (
                    <div className={Styles.error}>{formik.errors.fullName}</div>
                  )} */}
                </>
              )}

              <InputField
                label="Email"
                value={email}
               // onChange={formik.handleChange}
                onChange={(e: any) => setEmail(e.target.value)}
                id="email"
              />
              {/* {formik.touched.email && formik.errors.email && (
                <div className={Styles.error}>{formik.errors.email}</div>
              )} */}

              <InputField
                label="Password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
                //onChange={formik.handleChange}
                id="password"
              />
              {/* {formik.touched.password && formik.errors.password && (
                <div className={Styles.error}>{formik.errors.password}</div>
              )} */}
            </div>

            <p className="text-gray-500 font-medium font-sans text-xs mt-5 text-center">
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <Link href="https://www.facebook.com/help/instagram/261704639352628">
                <span className=" text-blue-500 font-semibold ml-2 hover:underline cursor-pointer">
                  Learn More
                </span>
              </Link>
            </p>
            <p className="text-gray-500 font-medium font-sans text-xs mt-5 text-center">
              By signing up, you agree to our{" "}
              <span className=" text-blue-500 font-semibold  hover:underline cursor-pointer">
                Terms
              </span>{" "}
              ,{" "}
              <span className=" text-blue-500 font-semibold hover:underline cursor-pointer">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className=" text-blue-500 font-semibold  hover:underline cursor-pointer">
                cookies.
              </span>
            </p>
            <button type="submit" className="bg-blue-600 text-white rounded-md w-full mt-8 py-3 transition hover:bg-blue-700">
              {variant === "register" ? "Sign up" : "Log in"}
            </button>
            <p className="text-neutral-900 mt-10">
              {variant === "register"
                ? "Already have an account?"
                : " First time using Instagram?"}
              <span
               onClick={variantToggle}
                // onClick={() => formik.submitForm()} 
                className="text-blue-500 font-semibold ml-2 hover:underline cursor-pointer"
              >
                {variant === "register" ? "Log In" : " Create an account"}
              </span>
            </p>
          </form>
          {/* <p className="text-neutral-900 mt-10">
              {formik.values.variant === "register"
                ? "Already have an account?"
                : " First time using Instagram?"}
              <span
                onClick={variantToggle}
                className="text-blue-500 font-semibold ml-2 hover:underline cursor-pointer"
              >
                {formik.values.variant === "register" ? "Log In" : " Create an account"}
              </span>
            </p> */}
        </div>
      </div>
    </>
  );
}
