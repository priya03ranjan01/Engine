import {React, useEffect , useState} from "react";
import BorderHeading from "../../components/BorderHeading";
import InputField from "./InputField";

function UserLogin(props) {

  const [signup,setsignup] = useState(false);
  const [regid,setregid] = useState("");
  const [password,setpassword] = useState("");
  const [email,setemail] = useState("");

  useEffect(() => {
    localStorage.clear();
    props.changeauthentication(false);
    props.setuserid("");
    setsignup(false);
  }, [])

  // const confirm_enter = (e) => {
  //   if (e.key === 'Enter' && props.userid === "") {
  //     window.alert("Please Enter a User ID!")
  //     e.preventDefault();
  //   }
  //   if (e.key === 'Enter' && props.userid !== "") {
  //     localStorage.setItem('userid', JSON.stringify(parseInt(props.userid)))
  //   }
  // }

  const confirm_login = (e) => {
    if (props.userid === "") {
      window.alert("Please Enter a User ID!")
      e.preventDefault();
    }

    if (props.userid !== "") {
      localStorage.setItem('userid', JSON.stringify(parseInt(props.userid)))
    }
  }

  return (
    <>
     <div className="bg-gray-100 fixed top-0 right-0 left-0 bottom-0 my-14 mx-12 md:mx-36 md:my-20 shadow-login  ">
        </div>
      <div className="bg-white h-screen">
       

        <div className="absolute h-full w-full flex items-center justify-center">
          <div className=" w-3/4 flex items-center justify-center ">
            <div className="min-w-[80%] sm:min-w-fit ml-20 mr-8 
             md:ml-48 md:mr-16
            flex flex-col items-center justify-center ">
            <BorderHeading
                heading={`${signup === false ? "Log In" : "Sign Up"}`}
                bg=" text-gray-700 text-3xl md:text-4xl"
                borderbg="border-gray-700 border-t-4 "
              />


              <form action="/order_book" className=" flex flex-col items-center justify-center gap-8 w-full px-8 lg:px-16 pt-16 pb-4" onSubmit={confirm_login}>
                {signup === true?<InputField placeholder="Enter EmailID" 
                type="email" val = {email} setval = {setemail} />:<></>}
                <InputField placeholder="Enter UserID" 
                type="text" val = {signup === true?regid:props.userid} setval = {signup === true?setregid:props.setuserid} />
                <InputField placeholder="Enter Password" type="password"
                val = {password} setval = {setpassword}  />
                <button className="bg-red sm:mt-6  py-1.5 md:py-2 rounded hover:scale-105 hover:bg-[#aa0000] w-3/5  font-medium text-yellow-100 shadow-lowshade min-w-fit px-3 text-xl md:text-2xl">
                  Submit
                </button>
              </form>

              <div className="flex flex-col md:flex-row  whitespace-nowrap md:text-xl ">
                {signup === false?
                <div className="">
                  Don't have an account?
                </div>:<></>}

                <button className={`underline text-blue-700 ${signup === false?" ml-2 ":" mr-60"}`} onClick={(e)=> {e.preventDefault();setsignup(!signup)}}>
                  <b>{signup === false?"Sign Up":"Log In"}</b>
                </button>
              </div>

            </div>

          </div>

          <div className="h-full w-1/3 bg-red border-l-[10px] border-yellow-0 shadow-2xl opacity-80">

          </div>
        </div>
      </div>
    </>
  );


}

export default UserLogin;
