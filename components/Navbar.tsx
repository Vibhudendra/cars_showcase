import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav
        className="max-w-[1440px] mx-auto flex 
      justify-between sm:px-16 px-4 py-4"
      >
        <Link href="/" className="flex justify-center items-center">
        <Image 
        src="/logo.svg" 
        alt="Car Hub logo" 
        width={118}
        height={18}
        className="object-contain"
        />
        </Link>

        <PrimaryButton 
        title="Sign In"
        btnType="button"
        Additionalclasses="text-primary-blue 
        rounded-full bg-white min-w-[130]"       
        />
      </nav>
    </header>
  );
};

export default Navbar;
