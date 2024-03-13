"use client";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import SignInNavbar from "@/components/SignInNavbar";
import SignInFooter from "@/components/SignInFooter";

interface MyFormValues {
    email: string;
}

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("required"),
});

const page = () => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const submit = () => {
        console.log("submit");
        setButtonClicked(true);
    };
    const initialValues: MyFormValues = {
        email: "",
    };
    return (
        <section className="min-h-screen flex flex-col justify-between">
            <SignInNavbar />
            <div className="px-2 md:max-w-[50%] lg:max-w-[30%] mx-auto">
                <div>
                    <h1 className="text-white text-2xl font-[Detacher]">
                        Forgot password_
                    </h1>
                    <p className="font-spaceMono text-[#A4A4A4] text-base py-3">
                        A four digits have been sent to the your gmail
                        emeeylanr@gmail.com. Check your spam or inbox, Expires
                        in 1hr.
                    </p>
                </div>
                <div className="border-t border-b-[5px] border-r-[5px] border-l px-8 pt-8 pb-4">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={ForgotPasswordSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <Form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3"
                            >
                                <div className="flex justify-center max-w-full gap-3 font-[Detacher]">
                                    <Field
                                        className="bg-black w-full text-center border py-3 text-xs pl-2 focus:outline-none text-white"
                                        name="number"
                                        placeholder="1"
                                    />
                                    <Field
                                        className="bg-black w-full text-center border py-3 text-xs pl-2 focus:outline-none text-white"
                                        name="number"
                                        placeholder="0"
                                    />
                                    <Field
                                        className="bg-black w-full text-center border py-3 text-xs pl-2 focus:outline-none text-white"
                                        name="number"
                                        placeholder="5"
                                    />
                                    <Field
                                        className="bg-black w-full text-center  border py-3 text-xs pl-2 focus:outline-none text-white"
                                        name="number"
                                        placeholder="9"
                                    />
                                </div>
                                {errors.email && touched.email ? (
                                    <span className="text-red-600 text-xs">
                                        {errors.email}
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
