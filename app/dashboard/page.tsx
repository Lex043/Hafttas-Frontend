"use client";

import { Tab, Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Links from "@/components/Links";
import { useState, Fragment } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DashboardHome from "@/components/DashboardHome";

interface MyFormValues {
    title: string;
    description: string;
    limit: string;
}

const CreateLinkSchema = Yup.object().shape({
    title: Yup.string().min(2, "title is too Short!").required("required"),
    description: Yup.string()
        .min(2, "description is too Short")
        .required("required"),
    limit: Yup.string().required("required"),
});

const page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [linkPanelEnabled, setLinkPanelEnabled] = useState(true);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const [buttonClicked, setButtonClicked] = useState(false);
    const submit = () => {
        console.log("submit");
        setButtonClicked(true);
    };

    const initialValues: MyFormValues = {
        title: "",
        description: "",
        limit: "",
    };

    return (
        <section className="px-2 md:px-4 py-2">
            <Tab.Group manual>
                <div className="flex w-full md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 h-screen">
                    <Tab.List className="flex flex-col h-full justify-between">
                        <div className="flex w-full md:w-60 flex-col gap-6 text-[#A4A4A4]">
                            <Image
                                src="/logo.svg"
                                width={0}
                                height={0}
                                alt="logo"
                                className="w-8 h-8"
                            />
                            <Tab className="flex justify-between border items-center p-[10px] border-white font-spaceMono text-[16px]">
                                <h1>Home</h1>
                                <Image
                                    src="/arrow.svg"
                                    width={0}
                                    height={0}
                                    alt="logo"
                                    className="w-5 h-5 hidden md:block"
                                />
                            </Tab>
                            <Tab
                                onClick={openModal}
                                className="flex justify-between border items-center p-[10px] border-white font-spaceMono text-[16px]"
                            >
                                <h1>Create</h1>
                                <Image
                                    src="/arrow.svg"
                                    width={0}
                                    height={0}
                                    alt="logo"
                                    className="w-5 h-5 hidden md:block"
                                />
                            </Tab>
                            <Tab className="flex justify-between border items-center p-[10px] border-white font-spaceMono text-[16px]">
                                <h1>Links</h1>
                                <Image
                                    src="/arrow.svg"
                                    width={0}
                                    height={0}
                                    alt="logo"
                                    className="w-5 h-5 hidden md:block"
                                />
                            </Tab>
                        </div>
                        <div className="text-[#A4A4A4] flex flex-col items-start gap-6">
                            <button
                                onClick={() => signOut()}
                                className="text-[16px]"
                            >
                                Log out
                            </button>
                            <button className="text-[16px]">
                                Delete Account
                            </button>
                        </div>
                    </Tab.List>
                    <Tab.Panels className="overflow-x-auto w-full md:col-span-2 lg:col-span-3">
                        <Tab.Panel className="w-[20rem] md:w-full">
                            <DashboardHome />
                        </Tab.Panel>
                        {linkPanelEnabled && (
                            <Tab.Panel className="w-[20rem] md:w-full">
                                {/* <Links /> */}
                            </Tab.Panel>
                        )}
                        <Tab.Panel className="w-[20rem] md:w-full">
                            <Links />
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="flex items-center justify-center min-h-screen">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="bg-black border-white border-t border-r-[3px] border-b-[3px] border-l py-5 px-10">
                                <Dialog.Title className="font-[Detacher] text-[16px] md:text-[30px] font-normal text-white">
                                    CREATE LINK_
                                </Dialog.Title>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={CreateLinkSchema}
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
                                                name="title"
                                                placeholder="Title"
                                            />
                                            {errors.title && touched.title ? (
                                                <span className="text-red-600">
                                                    {errors.title}
                                                </span>
                                            ) : null}
                                            <Field
                                                className="bg-black border py-3 text-xs pl-2 focus:outline-none text-white"
                                                name="description"
                                                placeholder="Description"
                                            />
                                            {errors.description &&
                                            touched.description ? (
                                                <span className="text-red-600">
                                                    {errors.description}
                                                </span>
                                            ) : null}
                                            <Field
                                                className="bg-black  border py-3 text-xs pl-2 focus:outline-none text-white"
                                                name="limit"
                                                type="limit"
                                                placeholder="Limit"
                                            />
                                            {errors.limit && touched.limit ? (
                                                <span className="text-red-600">
                                                    {errors.limit}
                                                </span>
                                            ) : null}
                                            <button
                                                onClick={submit}
                                                disabled={buttonClicked}
                                                className="text-white font-spaceMono border-b-4 border-l-2 border-r-2 border-t py-2"
                                                type="submit"
                                            >
                                                Create
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                                <button>Create</button>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </section>
    );
};

export default page;
// FUDs]YkUh8(ZZ3in
