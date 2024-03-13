"use client";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import SignInNavbar from "@/components/SignInNavbar";
import SignInFooter from "@/components/SignInFooter";

interface MyFormValues {
    password: string;
}

const resetPassword = Yup.object().shape({
    password: Yup.string()
        .min(6, "password is too Short!")
        .max(50, "password too Long!")
        .required("required"),
});

const page = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const submit = () => {
        console.log("submit");
        setButtonClicked(true);
    };
    const initialValues: MyFormValues = {
        password: "",
    };
    return (
        <section className="min-h-screen flex flex-col justify-between">
            <SignInNavbar />
            <div className="px-2 md:max-w-[50%] lg:max-w-[30%] mx-auto">
                <div>
                    <h1 className="text-white text-2xl font-[Detacher]">
                        Reset password_
                    </h1>
                    <p className="font-spaceMono text-[#A4A4A4] text-base py-3">
                        Enter a new password for your account to proceed to
                        access your account again.
                    </p>
                </div>
                <div className="border-t border-b-[5px] border-r-[5px] border-l px-8 pt-8 pb-4">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={resetPassword}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <Form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3"
                            >
                                <Field
                                    className="bg-black  border py-3 text-xs pl-2 focus:outline-none text-white"
                                    name="username"
                                    placeholder="Enter a new password"
                                />
                                {errors.password && touched.password ? (
                                    <span className="text-red-600 text-xs">
                                        {errors.password}
                                    </span>
                                ) : null}

                                <button
                                    onClick={submit}
                                    disabled={buttonClicked}
                                    className="text-white font-spaceMono border-b-4 border-l-2 border-r-2 border-t py-2"
                                    type="submit"
                                >
                                    Proceed
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <SignInFooter />
        </section>
    );
};

export default page;
