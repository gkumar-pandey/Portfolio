import { socialLinks } from "../section/hero/hero.section";
import { MdEmail } from "react-icons/md";


export const ContactLinks = () => {
    const links = [
        ...socialLinks,
        { text: "gautamshekhar078@gmail.com", icon: <MdEmail /> },
    ];
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
