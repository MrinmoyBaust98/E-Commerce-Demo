import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.initialize";

// firebase app initialize
initializeAuthentication();

// use firebase start
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // for sign in
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // for log Out
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  // special observation state change or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);
  return {
    signInUsingGoogle,
    user,
    logOut,
  };
};
export default useFirebase;
