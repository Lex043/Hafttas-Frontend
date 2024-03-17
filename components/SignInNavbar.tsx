import Image from "next/image";

const SignInNavbar = () => {
    return (
        <section className="flex justify-between items-center border-b border-white px-2 md:px-4 py-2">
            <Image
                src="/logo.svg"
                width={0}
                height={0}
                alt="logo"
                className="w-8 h-8"
            />

            <Image
                src="/circle.svg"
                width={0}
                height={0}
                alt="Profile"
                className="w-8 h-8"
            />
        </section>
    );
};

export default SignInNavbar;
