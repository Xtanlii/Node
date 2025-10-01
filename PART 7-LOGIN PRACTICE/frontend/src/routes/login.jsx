import { Theme } from "@radix-ui/themes";
import Form from "../components/LoginForm";

function Login() {
  return ( 
    <Theme >
      <div className="flex flex-row font-serif h-screen">
        <div className="bg-blue-700 flex-1 "></div>
        <div className="bg-white flex-4 flex justify-center items-center">
          <Form />

        </div>

      </div>
    </Theme>
   );
}

export default Login;