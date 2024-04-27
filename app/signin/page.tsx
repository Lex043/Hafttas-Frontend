"use client";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { signIn } from "next-auth/react";
import SignInNavbar from "@/components/SignInNavbar";
import SignInFooter from "@/components/SignInFooter";

interface MyFormValues {
    username: string;
    password: string;
}

const SigninSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, "username is too Short!")
        .max(50, "username is too Long!")
        .required("required"),
    password: Yup.string()
        .min(6, "password is too Short!")
        .max(50, "password too Long!")
        .required("required"),
});

const page = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const baseURL = "https://hafttas-backend.onrender.com"; // Base Url to avoid addition of localhost

    const initialValues: MyFormValues = {
        username: "",
        password: "",
    };

    const handleFormSubmit = async (
        values: MyFormValues,
        { resetForm }: any
    ) => {
        try {
            setLoading(true);
            const response = await axios.post(
                `${baseURL}/auth/signin`,
                JSON.stringify(values),

                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status === 202) {
                await signIn("credentials", {
                    username: values.username,
                    password: values.password,
                    redirect: false, // Prevent automatic redirection
                });
                router.push("/dashboard");
                toast.success(`${response.data.message}`, {
                    position: "top-center",
                    style: {
                        background: "#000",
                        color: "#FFF",
                    },
                });
            }
        } catch (error: any) {
            console.error(error.message);
            setLoading(false);
            toast.error(`${error.message}`, {
                position: "top-center",
                style: {
                    background: "#FFF",
                    color: "#000",
                },
            });
        }

        // Reset the form after submission
        resetForm();
    };

    return (
        <section className="min-h-screen flex flex-col justify-between">
            <SignInNavbar />
            <div className="px-2 md:max-w-[50%] lg:max-w-[30%] mx-auto">
                <div>
                    <h1 className="text-white text-5xl font-[Detacher]">
                        SIGN IN_
                    </h1>
                    <p className="font-spaceMono text-[#A4A4A4] text-base py-3">
                        start a journey by creating an account and providing the
                        details needed below.
                    </p>
                </div>
                <div className="border-t border-b-[5px] border-r-[5px] border-l px-8 pt-8 pb-4">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={SigninSchema}
                        onSubmit={handleFormSubmit}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <Form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3"
                            >
                                <Field
                                    className="bg-black  border py-3 text-xs pl-2 focus:outline-none text-white"
                                    name="username"
                                    placeholder="Username"
                                />
                                {errors.username && touched.username ? (
                                    <span className="text-red-600 text-sm">
                                        {errors.username}
                                    </span>
                                ) : null}

                                <Field
                                    className="bg-black  border py-3 text-xs pl-2 focus:outline-none text-white"
                                    name="password"
                                    type="Password"
                                    placeholder="Password"
                                />
                                {errors.password && touched.password ? (
                                    <span className="text-red-600 text-sm">
                                        {errors.password}
                                    </span>
                                ) : null}

                                <Link
                                    href="/forgotpassword"
                                    className="text-xs font-spaceMono text-[#A4A4A4]"
                                >
                                    Forgot password ?
                                </Link>

                                <button
                                    className="text-white font-spaceMono border-b-4 border-l-2 border-r-2 border-t py-2"
                                    type="submit"
                                >
                                    {loading ? "loading..." : "Access"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                    <p className="text-[#A4A4A4] font-spaceMono text-xs text-center pt-4">
                        Don't have an account ?{" "}
                        <Link href="/signup">Signup</Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
            <SignInFooter />
        </section>
    );
};

export default page;
