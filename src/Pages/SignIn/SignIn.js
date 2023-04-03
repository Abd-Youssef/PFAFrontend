import { useState } from "react";
import { signIn } from "../../Api/Api";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { useDispatch } from "react-redux";
import { SetUser } from "../../Redux/Action";
import logoPng from "../../Assets/logo.png";

function SignIn(params) {
  const Dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, seterror] = useState();
  const navigate = useNavigate();

  const onChange = (e, key) => {
    setState({
      ...state,
      [key]: e.target.value,
    });
  };
  const onSubmit = async () => {
    const response = await signIn(
      JSON.stringify({
        email: state.email,
        password: state.password,
      })
    );
    console.log(response);
    if (response.status === 200) {
      Dispatch(SetUser({ user: response.data, token: response.token }));
      navigate("/home");
    }
    else {
      seterror(response.message);
    }
  };

  return (
    <div className="flex w-full h-full bg-disease bg-blue-1 ">
      <div class="flex w-1/2 min-h-full items-center justify-center py-12 sm:px-6 lg:px-24 ">
        <div class="w-full  space-y-8 ">
          <div>
            <img
              class="mx-auto w-full h-auto"
              src={logoPng}
              alt="Your Company"
            />
            <p class="mt-5  text-center text-base text-white">
              “Declare the past, diagnose the present, foretell the future.” ―
              Hippocrates
            </p>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 h-full min-h-full items-center justify-center py-12  sm:px-6 lg:px-24">
        <div class="w-full max-w-2xl h-4/5 space-y-6 py-12 px-12 rounded-3xl bg-white shadow">
        {error ? (
                <div class="mx-auto flex h-12 w-72 flex-shrink-0 items-center justify-center rounded-full bg-red-100  ">
                  <svg
                    class="h-8 w-8 text-red-600 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                  <h3
                    class="text-base font-semibold leading-6 text-gray-900 px-5"
                    id="modal-title"
                  >
                    {error}
                  </h3>
                </div>
            ) : (
              <></>
            )}
          <div>
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Your <b>DiseaseDetective</b> Account
            </p>
          </div>
            <div class="space-y-5 rounded-md shadow-sm">
              <Input
                className={"relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"}
                placeholder={"Email address"}
                autocomplete={"email"}
                onChange={(e) => onChange(e, "email")}
                value={state.email}
              />
              <Input
                type={"password"}
                placeholder={"Password"}
                autocomplete={"password"}
                onChange={(e) => onChange(e, "password")}
                value={state.password}
                className={"relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-green-1 sm:text-sm sm:leading-6"}
              />
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-green-1 focus:ring-green-1"
                />
                <label
                  for="remember-me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <Link
                  to="/Password"
                  class="font-medium text-green-1 hover:text-green-600"
                >
                  Forgot your password ?
                </Link>
              </div>
            </div>

            <div>
              <Button
                onClick={onSubmit}
                name={"Sign In"}
                className="group relative flex w-full justify-center rounded-md bg-green-1 py-2 px-3 text-sm font-semibold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-450"
              />
              <p class="mt-2 text-center text-sm text-gray-600">
                Don't have an account yet ?
                <Link
                  to="/signup"
                  class="font-medium text-green-1 hover:text-green-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn ;
