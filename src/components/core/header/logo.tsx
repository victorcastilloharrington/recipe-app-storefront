import Image from "next/image";
const Logo = () => {
  return (
    <Image
      src="/recipe_logo.svg"
      alt="Shared Recipes Logo"
      width={180}
      height={55}
    />
  );
};

export default Logo;
