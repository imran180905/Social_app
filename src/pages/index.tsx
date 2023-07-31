import { Inter } from "next/font/google";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
        console.log(user.displayName)
      } else {
        setUser(null)
      }
      console.log("loading")
    })

    return () => unsubscribe()
  }, [])
  const logout = async() => {
    setUser(null)
    await signOut(auth)
  }
  return <div>
    {/* <Link href='/about' style={{background: "green", color: "white", display: "grid", alignItems: "center", justifyContent: "center"}}>About</Link> */}
    {user ? (
              <div>
                <button style={{background: 'gray'}}
                  onClick={() => {
                    logout()
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link style={{background: 'blue'}} href="/signUp" passHref>
                  login
                </Link>
              </>
            )}
  </div>;
}
