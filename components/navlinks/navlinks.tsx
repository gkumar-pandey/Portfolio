import Link from "next/link";

const Navlinks = () => {
  const navlinks = [
    { link: "#about", text: "About" },
    { link: "#skill", text: "Skills" },
    { link: "#work-experience", text: "Experience" },
    { link: "#projects", text: "Project" },
    { link: "#blog", text: "Blog" },
  ];
  return (
    <div>
      <div className="flex items-center gap-3 font-medium " >
        {navlinks.map((ele, idx) => (
          <Link className="hover:text-[var(--primary-color)] " href={ele?.link} key={idx}>
            {ele?.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navlinks;