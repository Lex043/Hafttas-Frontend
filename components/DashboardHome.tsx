import Image from "next/image";

const DashboardHome = () => {
    return (
        <section>
            <header className="pt-6 w-full">
                <div className="flex justify-between items-center">
                    <h1 className="text-white font-[Detacher] font-normal text-xl md:text-5xl">
                        DASHBOARD_
                    </h1>

                    <button className="text-white bg-[#4A4141] rounded-full w-10 h-10">
                        E
                    </button>
                </div>
                <p className="text-white font-spaceMono text-[16px] font-normal pt-5">
                    start a journey by creating an account and <br /> providing
                    the details needed below
                </p>
            </header>

            <h1 className="pt-4 font-[Detacher] text-[16px] font-normal text-white">
                Top_
            </h1>

            <section className="pt-3 flex flex-col gap-4 lg:flex-row">
                <section className="flex flex-col gap-2 w-[16rem]">
                    <div className="border-white border-t border-r-4 border-b-[3px] border-l p-[10px] text-center">
                        <h1 className="font-[Detacher] text-[16px] md:text-[40px] font-normal text-white">
                            0
                        </h1>
                    </div>
                    <div className="flex items-center font-spaceMono text-white">
                        <Image
                            src="/copyIcon.svg"
                            width={0}
                            height={0}
                            alt="logo"
                            className="w-4 h-4"
                        />
                        <p>,,,,,,,,,,,,,,,.....</p>
                    </div>
                </section>
                <section className="flex flex-col gap-2 w-[16rem]">
                    <div className="border-white border-t border-r-4 border-b-[3px] border-l p-[10px] text-center">
                        <h1 className="font-[Detacher] text-[16px] md:text-[40px] font-normal text-white">
                            0
                        </h1>
                    </div>
                    <div className="flex items-center font-spaceMono text-white">
                        <Image
                            src="/copyIcon.svg"
                            width={0}
                            height={0}
                            alt="logo"
                            className="w-4 h-4"
                        />
                        <p>,,,,,,,,,,,,,,,.....</p>
                    </div>
                </section>
                <section className="flex flex-col gap-2 w-[16rem]">
                    <div className="border-white border-t border-r-4 border-b-[3px] border-l p-[10px] text-center">
                        <h1 className="font-[Detacher] text-[16px] md:text-[40px] font-normal text-white">
                            0
                        </h1>
                    </div>
                    <div className="flex items-center font-spaceMono text-white">
                        <Image
                            src="/copyIcon.svg"
                            width={0}
                            height={0}
                            alt="logo"
                            className="w-4 h-4"
                        />
                        <p>,,,,,,,,,,,,,,,.....</p>
                    </div>
                </section>
            </section>

            <h1 className="pt-8 pb-4 font-[Detacher] text-[16px] font-normal text-white">
                RECENTLY CREATED_
            </h1>

            <section className="border-white border-t border-r-[5px] border-b-[3px] border-l w-full lg:w-[60rem] text-center p-14">
                <h1 className="font-[Detacher] text-white text-[16px] md:text-[40px]">
                    NO LINKS CREATED_
                </h1>
                <p className="text-white font-spaceMono">
                    click on the create link button to start <br /> creating
                    links and sharing with friends
                </p>
            </section>
        </section>
    );
};

export default DashboardHome;
