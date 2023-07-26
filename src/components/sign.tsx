/* eslint-disable @next/next/no-img-element */
// import googleLogo from "../asset/google.png";
import carosol from "../asset/carousel 2.png";
import frame from "../asset/frames.png";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import InputField from "./inputField";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
} from 'firebase/auth'
import { auth } from '../Firebase/firebase';

export default function Sign() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const router = useRouter()

  const variantToggle = useCallback((current: any) => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (variant === "register") {
      const userData = {
        email: email,
        password: password,
        username: userName,
        full_name: fullName,
      };
      
      console.log("Signup data:", userData);
      
      try {
       router.push('/');
        return createUserWithEmailAndPassword(auth, email, password
      );

      } catch (error) {
        console.log("Error occurred during signup:", error);
      }
    } else {
    const userData = {
        email: email,
        password: password,
      };
      console.log("Login data:", userData);
      try {
        // Sign in the user with the provided email and password
        router.push('/'); // Redirect to the home page after successful login
       return signInWithEmailAndPassword(auth, email, password);

      } catch (error) {
        console.log("Error occurred during login:");
      }
    }
  };

  return (
    // <div className="  border-solid border-2 border-indigo-600 bg-gray-100 px-5 w-80 ">
    //   <div className="">
    //     <Image src={logo} alt="Insta logo" />
    //     <p>Sign up to see photos and videos of your friends.</p>
    //   </div>
    //   <button>
    //     <Image src={googleLogo} alt="google " />
    //     <p>Continue with google</p>
    //   </button>
    // </div>
    <>
      <div className="flex border-solid border-2 border-indigo-600 justify-center items-center">
        <div className="flex mr-8">
          <Image className="" src={frame} alt="frame" />
          <Image className="-ml-72" src={carosol} alt="carosol" />
        </div>
        <div className="flex justify-center">
          <form onSubmit={handleSignup} className="bg-white bg-opacity-50 px-16 py-16 self-center mt-4 lg:max-w-lg rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <>
                  <InputField
                    label="Username"
                    onChange={(e: any) => setUserName(e.target.value)}
                    value={userName}
                    id="name"
                  />
                  <InputField
                    label="FullName"
                    onChange={(e: any) => setFullName(e.target.value)}
                    value={fullName}
                    id="fullName"
                  />
                </>
              )}

              <InputField
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
                id="Email"
              />
              <InputField
                label="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
                id="Password"
              />
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
            <button type="submit"  className="bg-blue-600 text-white rounded-md w-full mt-8 py-3 transition hover:bg-blue-700">
              {variant === "register" ? "Sign up" : "Log in"}
            </button>
            <p className="text-neutral-900 mt-10">
              {variant === "register"
                ? "Already have an account?"
                : " First time using Instagram?"}
              <span
                onClick={variantToggle}
                className="text-blue-500 font-semibold ml-2 hover:underline cursor-pointer"
              >
                {variant === "register" ? "Log In" : " Create an account"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
