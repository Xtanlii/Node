import { Theme, Box, Card, Avatar, Flex, Text } from "@radix-ui/themes"

export default function Register() {
  return (
    <Theme >
      <div className="flex flex-row font-serif h-screen">
        <div className="bg-blue-700 flex-1 "></div>
        <div className="bg-white flex-4 flex justify-center items-center">
          <form className="shadow-2xl w-3/5 h-3/4 rounded-lg flex flex-col align-start gap-4 pl-10 pt-3 ">
            <caption className="text-3xl text-left pt-2">Register</caption>
            <div className="flex flex-col  gap-2">
              <label className="flex flex-col ">
                Email
                <input type="email" className="p-2 border rounded-sm border-blue-300 border-solid focus:outline focus:outline-blue-400 max-w-2/3 " />
                <p className="invisible text-sm text-left">a</p>
              </label>
              <label className="flex flex-col ">
                Username
                <input className="p-2 border rounded-sm border-blue-300 border-solid focus:outline focus:outline-blue-400 max-w-2/3 " />
                <p className="invisible text-sm text-left">a</p>
              </label>
              <label className="flex flex-col ">
                Password
                <input type="password" className="p-2 border rounded-sm border-blue-300 border-solid focus:outline focus:outline-blue-400 max-w-2/3 " />
                <p className="invisible text-sm text-left">a</p>
              </label>

            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-start font-sans">Register</button>
          </form>

        </div>

      </div>
    </Theme>
  )
}