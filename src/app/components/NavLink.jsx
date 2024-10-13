// import Link from "next/link";
const NavLink = ({ href, title }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <Link
    //   href={href}
    //   className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    // >
    //   {title}
    // </Link>
    <button
      onClick={() => scrollToSection(href)}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </button>
  );
};

export default NavLink;
