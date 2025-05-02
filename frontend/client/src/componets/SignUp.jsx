import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
      const togglePassword = () => {
        setShowPassword((prev) => !prev);
      };
  return (
    <div className="bg-orange-400 h-screen w-screen text-black flex items-center  justify-between p-4">
         <div>
           <h1 className="text-4xl font-bold">
             Supa<span className="text-white">Menu</span>
           </h1>
         </div>
         <div className="bg-white flex flex-col  gap-2  rounded-lg shadow-lg w-[400px]">
           <h2 className="text-center font-semibold text-xl mt-10">SignUp</h2>
           <form className="flex flex-col gap-4 w-full p-4">
           <label for="firstname" className="text-gray-400 font-semibold text-sm ">
               Firstname
             </label>
             <input
               type="text"
               id="firstname"
               className="border border-gray-400  text-sm rounded-lg p-2"
               placeholder="Firstname"
               required
             />
             <label for="lastname" className="text-gray-400 font-semibold text-sm ">
               Lastname
             </label>
             <input
               type="text"
               id="lastname"
               className="border border-gray-400  text-sm rounded-lg p-2"
               placeholder="Lastname"
               required
             />
             <label for="email" className="text-gray-400 font-semibold text-sm ">
               Email
             </label>
             <input
               type="email"
               id="email"
               className="border border-gray-400  text-sm rounded-lg p-2"
               placeholder="email"
               required
             />
             <div className="flex justify-between items-center">
               <label
                 for="password"
                 className="text-gray-400 font-semibold text-sm "
               >
                 Password
               </label>
               <span className="text-blue-800 text-sm hover:underline hover:cursor-pointer">Forgot password?</span>
             </div>
             <div className="border border-gray-400 text-sm rounded-lg p-2 justify-between items-center flex">
               <input
                 type="password"
                 id="password"
                 placeholder="password"
                 required
                 className="focus:border-none outline-none"
               />
               <FontAwesomeIcon
                 icon={showPassword ? faEyeSlash : faEye}
                 className="text-gray-400"
                 size="x"
                 onClick={togglePassword}
               />
             </div>
             <button className="bg-orange-400 text-white font-semibold rounded-lg p-2 px-4 hover:bg-orange-500 hover:cursor-pointer w-full">
               SignUp
             </button>
             <h1 className="text-gray-400 text-sm text-center">Already have an account? <a href="/login" className="text-blue-800">Login</a></h1>
           </form>
         </div>
       </div>
  );
}

export default SignUp;
