// import axios from "axios";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

// const SignIn = () => {
//   const [coords, setCoords] = useState([{ email: "", password: "" }]);
//   const handleInputChange = (e) => {
//     setCoords({ ...coords, [e.target.name]: e.target.value });
//   };
//   const handleForm = async (e) => {
//     e.preventDefault();
//     await axios.get(`http://localhost:3000/users`).then((response) => {
//       const data = response.data;
//       console.log(data);
//       const password = coords.password;
//       const email = coords.email;

//       const matching = data.find(
//         (cord) => cord.email === email && cord.password === password
//       );
//       if (matching) {
//         console.log("correct");
//         return <Navigate to="/products" repalce />;
//       }

//       if (!matching) alert("wrong credintials");
//     });
//   };
//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
//         <div className="flex flex-col justify-center">
//           <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//             We provide the best value worldwide
//           </h1>
//           <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
//             Here at myshop we sell all your needs in one place
//           </p>
//           <a
//             href="lu"
//             className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
//           >
//             Read more about our app
//             <svg
//               className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//             </svg>
//           </a>
//         </div>
//         <div>
//           <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
//               Sign in to Flowbite
//             </h2>
//             <form className="mt-8 space-y-6" action="#" onSubmit={handleForm}>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="name@company.com"
//                   required
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Your password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   required
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="remember"
//                     aria-describedby="remember"
//                     name="remember"
//                     type="checkbox"
//                     className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
//                   />
//                 </div>
//                 <div className="ms-3 text-sm">
//                   <label
//                     htmlFor="remember"
//                     className="font-medium text-gray-500 dark:text-gray-400"
//                   >
//                     Remember this device
//                   </label>
//                 </div>
//                 <a
//                   href="#"
//                   className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
//                 >
//                   Lost Password?
//                 </a>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Login to your account
//               </button>
//               <div className="text-sm font-medium text-gray-900 dark:text-white">
//                 Not registered yet?{" "}
//                 <Link to={"/signUp"}>
//                   <span className="text-blue-600 hover:underline dark:text-blue-500">
//                     Create account
//                   </span>
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignIn;

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3000/users`);
      const users = response.data;

      const matchingUser = users.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (matchingUser) {
        setIsAuthenticated(true);
        navigate("/products");
      } else {
        alert("Wrong credentials");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Failed to sign in. Please try again.");
    }
  };

  return (
    <>
      {!isAuthenticated && (
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                We provide the best value worldwide
              </h1>
              <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Here at myshop we sell all your needs in one place
              </p>
              <a
                href="lu"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more about our app
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div>
              <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Sign in to Flowbite
                </h2>
                <form
                  className="mt-8 space-y-6"
                  action="#"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        name="remember"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="ms-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="font-medium text-gray-500 dark:text-gray-400"
                      >
                        Remember this device
                      </label>
                    </div>
                    <a
                      href="#"
                      className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login to your account
                  </button>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    Not registered yet?{" "}
                    <Link to={"/signUp"}>
                      <span className="text-blue-600 hover:underline dark:text-blue-500">
                        Create account
                      </span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SignIn;
