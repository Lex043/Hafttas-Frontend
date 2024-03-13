import Image from "next/image";

const SignInFooter = () => {
    const date = new Date();

    return (
        <section className="border-t border-white">
            <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center py-2 px-2 md:px-4">
                <div className="flex items-center gap-2">
                    <Image
                        src="/X.svg"
                        width={0}
                        height={0}
                        alt="X"
                        className="w-4 h-4"
                    />
                    <Image
                        src="/instagram.svg"
                        width={0}
                        height={0}
                        alt="instagram"
                        className="w-4 h-4"
                    />
                    <Image
                        src="/github.svg"
                        width={0}
                        height={0}
                        alt="github"
                        className="w-4 h-4"
                    />
                </div>
                <div className="flex gap-4 items-center">
                    <Image
                        src="/copyright.svg"
                        width={0}
                        height={0}
                        alt="copyright"
                        className="w-6 h-6"
                    />
                    <p className="font-spaceMono text-xs text-[#A4A4A4]">
                        {date.getFullYear()} designed and developed by Emmanuel
                        and Alex
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignInFooter;
