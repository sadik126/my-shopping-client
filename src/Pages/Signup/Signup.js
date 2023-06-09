import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { Authcontext } from '../../Context/Authprovider';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import toast from 'react-hot-toast';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signupError, setsignupError] = useState('')

    const auth = getAuth(app);

    const { createUser } = useContext(Authcontext)

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const location = useLocation()

    const nevigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // saveuser(data.Name, data.Email, data.Password)


                // toast('User created successfully')
                // const userInfo = {
                //     displayName: data.Name
                // }

                updateProfile({ displayName: data.name })

            })
            .catch(err => {
                console.log(err)
                // setsignupError(err.message)
            })



        toast.success(`${data.name} Added successfully`)
        nevigate(from, { replace: true })


        //     .then(res => res.json())
        //     .then(async imgData => {
        //         console.log(imgData)
        //         if (imgData.success) {
        //             console.log(imgData.data.url)

        //             await createUser(data.email, data.password)
        //                 .then(async result => {
        //                     const user = result.user;
        //                     console.log(user)
        //                     saveuser(data.Name, data.Email, data.Password)


        //                     // toast('User created successfully')
        //                     // const userInfo = {
        //                     //     displayName: data.Name
        //                     // }

        //                 })
        //                 .catch(err => {
        //                     console.log(err)
        //                     setsignupError(err.message)
        //                 })

        //             await updateProfile({ displayName: data.name, photoURL: imgData.data.url })

        //             // Swal({
        //             //     title: "success",
        //             //     text: "Now you can login our website",
        //             //     icon: "success",
        //             // })
        //             // const user = {
        //             //     name: data.name,
        //             //     email: data.email,

        //             //     image: imgData.data.url
        //             // }



        //             saveuser(data.name, data.email, imgData.data.url)


        //         }


        //     })

        // console.log(data)
        // reset();
    }

    return (
        <>

            <section class="h-screen">
                <div class="container h-full px-6 py-24">
                    <div
                        class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="https://imgs.search.brave.com/SnekduFDg46klXHwqOpVxBJ8pdHaO7eK9YKq9shtsyM/rs:fit:450:450:1/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvc2lnbi11/cC1wYWdlLTE4ODY1/ODItMTU5ODI1My5w/bmc"
                                class="w-full"
                                alt="Phone image" />
                        </div>
                        <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
                            <h1 className='text-3xl uppercase my-8 font-bold'>Register here</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        {...register("name", {
                                            required: { value: true, message: 'Name is required' },
                                            pattern: { value: /^[a-zA-Z-/.\' ']{3,20}$/, message: 'Dont use any number in your name' }
                                        })}
                                        type="text"
                                        class="input input-bordered w-full "
                                        id="exampleFormControlInput3"
                                        placeholder="Name" />
                                    <label
                                        for="exampleFormControlInput3"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >
                                    </label>
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className=" text-red-600 font-bold">{errors?.name?.message}</span>}
                                        {errors.name?.type === 'pattern' && <span className=" text-red-600 font-bold">{errors?.name?.message}</span>}
                                        {/* {errors.name?.type === 'required' && <span className=" text-red-600 font-bold">{errors?.email?.message}</span>} */}


                                    </label>
                                </div>

                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        {...register("email", {
                                            required: { value: true, message: 'Email is required' },
                                            pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Insert a valid email' }
                                        })}
                                        type="text"
                                        class="input input-bordered w-full "
                                        id="exampleFormControlInput3"
                                        placeholder="Email address" />
                                    <label
                                        for="exampleFormControlInput3"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >
                                    </label>
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className=" text-red-600 font-bold">{errors?.email?.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className=" text-red-600 font-bold">{errors?.email?.message}</span>}


                                    </label>
                                </div>


                                <div class="relative mb-6" data-te-input-wrapper-init>
                                    <input {...register("password", {
                                        required: { value: true, message: 'password is required' },
                                        minLength: { value: 6, message: 'must be 6 charecter of password' }
                                    })}
                                        type="password"
                                        class="input input-bordered w-full "
                                        id="exampleFormControlInput33"
                                        placeholder="Password" />
                                    <label
                                        for="exampleFormControlInput33"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >
                                    </label>
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className=" text-red-600 font-bold">{errors?.password?.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className=" text-red-600 font-bold">{errors?.password?.message}</span>}


                                    </label>
                                </div>




                                <div class="mb-6 flex items-center justify-between">
                                    {/* <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                                            type="checkbox"
                                            value=""
                                            id="exampleCheck3"
                                            checked />
                                        <label
                                            class="inline-block pl-[0.15rem] hover:cursor-pointer"
                                            for="exampleCheck3">
                                            Remember me
                                        </label>
                                    </div> */}
                                    <p>Already have an account in MYSHOPPING?<Link to="/login" className='text-secondary' > Login here</Link></p>
                                    {/* <a
                                        href="#!"
                                        class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                    >Forgot password?</a
                                    > */}


                                </div>




                                <button
                                    type="submit"
                                    class="inline-block w-full rounded bg-accent px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#ca763b] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-accent-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-accent-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Sign up
                                </button>
                                {/* {errormessage} */}

                                {/* <div
                                    class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                        OR
                                    </p>
                                </div> */}


                                {/* <button className="btn  btn-success w-full"> <img style={{ width: '30px' }} src={google} alt="" />Continue with google</button> */}

                                {/* <a
                                    class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                    style={{ backgroundColor: "#3b5998" }}
                                    href="#!"
                                    role="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mr-2 h-3.5 w-3.5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                    Continue with Facebook
                                </a> */}
                                {/* <a
                                    class="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                                    style={{ backgroundColor: "#55acee" }}
                                    href="#!"
                                    role="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mr-2 h-3.5 w-3.5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                    Continue with Twitter
                                </a> */}
                            </form>
                            {
                                signupError && <p className='text-red-600'>{signupError}</p>
                            }
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Signup;