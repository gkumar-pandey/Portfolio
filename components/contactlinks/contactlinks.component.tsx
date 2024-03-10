import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";


const ContactLinks = () => {
    const links = [
        { link: "https://github.com/gkumar-pandey", icon: <FaGithub />, text: "Follow on Github" },
        { link: "https://twitter.com/gautamkp078", icon: <FaXTwitter />, text: "Follow on Twitter" },
        { link: "https://www.linkedin.com/in/gkpandey/", icon: <FaLinkedinIn />, text: "Follow on Linkedin" },
        { link: "https://www.instagram.com/shekhar.tsx/", icon: <FaInstagram />, text: "Follow on Instagram" },
        { text: "gautamshekhar078@gmail.com", icon: <MdEmail /> },
    ]
    return (
        <div>
            {links.map((ele, idx) => (
                <div key={idx} className="flex items-center gap-2 text-base font-medium my-3 text-[var(--primary-gray)]" >
                    <button className="p-1 border rounded-md hover:text-[var(--primary-color)] " >{ele?.icon}</button>
                    < >
                        <p className="hover:text-[var(--primary-color)] cursor-pointer" >{ele?.text}</p>
                    </>
                </div>
            ))}
        </div>
    );
};
export default ContactLinks;