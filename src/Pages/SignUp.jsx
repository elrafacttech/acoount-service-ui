import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


export const SignUp = () => {
    const navigate = useNavigate()


    const handleSignUp = () => {
        navigate("/")
    }

    
    return (
        <>
            <section className="bg-gray-50 h-full">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-100px lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="md:w-20 w-16 h-16 md:h-20 mr-2" src={logo} alt="logo" />
                    </div>
                    <div className="w-full h-100px bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6   space-y-2 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl font-Inter">
                            Registration
                        </h1>
                        <form className="space-y-2 md:space-y-6" action="#">
                                <div className='flex-flow:col'>
                                    <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-Inter " >UserName</label>
                                    <input type="text" name="" id="name" className="bg-gray-50 border font-Inter border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FirstName" required="" />
                                </div>
                                 <div  className="flex flex-col">
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-Inter">E-mail</label>
                                    <input type="email" name="" id="email" className="bg-gray-50 border font-Inter border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required="" />
                                </div>
                                <div  className="flex flex-col">
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 font-Inter dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="font-Inter bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="confirmpassword" className="block mb-2 text-sm font-medium text-gray-900 font-Inter dark:text-white">ConfirmPassword</label>
                                    <input type="confirmpassword" name="confirmpassword" id="confirmpassword" placeholder="••••••••" className="font-Inter bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="role" className="block mb-2 text-sm font-medium text-gray-900 font-Inter dark:text-white">Role</label>
                                    <input type="text" name="role" id="role" placeholder="role" className="font-Inter bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label for="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 font-Inter dark:text-white">Phone Number</label>
                                    <input type="phonenumber" name="phonenumber" id="phonenumber" placeholder="1234" className="font-Inter bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <button className="w-full text-white bg-[#16a34a] hover:bg-[#16a34abe]  font-medium rounded-lg text-sm px-5 py-2.5 text-center font-Inter">
                                    Submit
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400 font-Inter">
                                    Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500 font-Inter"></a>
                                    <span
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500 font-Inter cursor-pointer"
                                        onClick={handleSignUp}
                                    >
                                        SignIn
                                    </span>
                                </p>

                        </form>        
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
