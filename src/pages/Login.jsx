import './../index.css'
import { FaHome, FaKey, FaIdBadge, FaQuestion } from 'react-icons/fa';

export default function Login() {

    return (
        <div className='bg-slate-800 h-[90rem] w-[40rem] sm:h-screen sm:w-screen'>
            <nav className='flex flex-row justify-center place-items-center text-sm sm:text-md  w-full h-8 transition ease-in-out duration-300 bg-slate-900/40 hover:bg-slate-900/25 shadow-2xl shadow-sky-400/75 space-x-6 sm:space-x-14 md:space-x-16 lg:space-x-20'>
                <span className="  mx-4 cursor-pointer flex flex-row text-white hover:text-red-500 font-mono  space-x-2 "><FaHome size="1.5rem" /><a href='/'>Home</a></span>
                <span className=" cursor-pointer flex flex-row text-green-500 font-mono  transition ease-in-out duration-300   space-x-2"><FaKey size="1.3rem"/><a href='#'>Login</a></span>
                <span className=" cursor-pointer flex flex-row text-white font-mono hover:text-orange-500 transition ease-in-out duration-300   space-x-2"><FaIdBadge size="1.3rem"/><a href='/signup'>SignUp</a></span>
                <span className=" cursor-pointer flex flex-row text-white font-mono hover:text-purple-500 transition ease-in-out duration-300   space-x-1"><FaQuestion size="1.4rem"/><a href='/problems/all'>Problems</a></span>
            </nav>

            <div className='text-slate-300 font-mono text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold my-24 justify-center max-w-fit mx-16 sm:mx-36 md:mx-56 lg:mx-auto'>Hey, Welcome Back, let's Login</div>

    <div div className=" border-slate-600 border-solid border-4 w-fit h-50  mx-auto  space-x-4 space-y-4 bg-slate-950/75 shadow-2xl pr-28 p-8 rounded-xl">

        <div className='flex flex-row p-12 space-x-4 '>
            <div className='basis-1/2 flex flex-col w-24 sm:w-36 md:w-48 lg:w-64 space-y-4'>
                <label htmlFor='email' className=' text-slate-500 font-mono'>Email</label>
                <label htmlFor='pass' className='text-slate-500 font-mono '>Password</label>
            </div>
            <div className='basis-1/2 w-24 sm:w-36 md:w-48 lg:w-64 space-y-4 flex flex-col '>
                <input name='email' className='text-sky-600 bg-slate-500/50 focus:ring-sky-500 focus:ring-2 focus:outline-none focus:shadow-2xl focus:bg-slate-600/50 rounded-md px-2 w-48 sm:w-60 font-medium'></input>
                <input type= 'password'name='pass' className='text-sky-600 bg-slate-500/50 focus:ring-sky-500 focus:ring-2 focus:outline-none  focus:shadow-2xl focus:bg-slate-600/50 rounded-md px-2 w-48 sm:w-60 font-extrabold text-md'></input>
            </div>

        </div>

    <div className=' justify-center flex flex-row sm:mx-auto'><button className=' mb-8 transition duration-300 text-slate-300 bg-slate-600 focus:bg-red-400/50 max-w-fit p-0.5 px-3 font-semibold  rounded-md hover:ring-red-500 hover:ring-2'>Login</button></div>
    </div>



</div>

    )

    
};
