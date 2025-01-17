import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser} = useAuthContext()
  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        //done changes in vite.config file to remove cors error
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if(data.error) {
        throw new Error(data.error)
      }
      if (res.ok) {
        toast.success(data.message || "Signup successful!");
        // Optionally, redirect user or clear form fields
      } else {
        toast.error(data.error || "Signup failed. Please try again.");
      }
      //here we will use local storage with the help of context
      localStorage.setItem("chat-user",JSON.stringify(data))
      //context
      setAuthUser(data);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputError({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("passwords do not match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must contain atleast 6 characters");
    return false;
  }

  return true;
}
