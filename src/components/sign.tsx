import Image from "next/image";
import { useCallback, useState } from "react";
import logo from "../asset/LOGO.png";
export default function Sign() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const variantToggle = useCallback((current: string) => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  return (
    <div>
      <div>
        <Image src={logo} alt="Insta logo" />
      </div>
    </div>
  );
}
