import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import Container from "@/components/container/container.component";
import Button from "@/components/button/button.component";
import ProfileImage from "@/components/profileimage/profile-image.component";
import HeroLeft from "@/components/heroleft/hero-left.component";




export default function HeroSection() {
    const socialLinks = [
        { link: "https://github.com/gkumar-pandey", icon: <FaGithub />, text: "Follow on Github" },
        { link: "https://twitter.com/gautamkp078", icon: <FaXTwitter />, text: "Follow on Twitter" },
        { link: "https://www.linkedin.com/in/gkpandey/", icon: <FaLinkedinIn />, text: "Follow on Linkedin" },
        { link: "https://www.instagram.com/shekhar.tsx/", icon: <FaInstagram />, text: "Follow on Instagram" },
    ];

    return (
        <div className="bg-[var(--primary-bg-color)] ">
            <Container>
                <div className="flex py-4 items-start">
                    <div className="flex h-full py-4 w-full flex-col ">
                        <div className="flex flex-row gap-4 py-2 flex-wrap">
                            <ProfileImage />
                            <HeroLeft />
                        </div>
                        <div className="text-lg text-[var(--primary-gray)] font-normal  w-2/3 xs:w-full text-start md:w-full">
                            <p className="py-1">
                                If this HTML renders correctly, I am a fairly good developer and
                                problem solver.
                            </p>
                            <p className=" text-wrap  ">
                                I&apos;m Gautam a EEE undergrad who is interested in Web development
                                and Competetive Programming. i have a passion for creating
                                beautiful web applications. I share my learnings through
                                speaking engagements & write-ups. i also identify myself as an
                                Open-Source advocate
                            </p>
                        </div>
                        <div className=" my-3 flex flex-row items-center gap-3">
                            {socialLinks.map((ele, idx) => (
                                <Link key={idx} target="_blank" href={ele.link}>
                                    <button className="p-1 rounded-md border text-lg text-[var(--primary-gray)] hover:text-[var(--primary-color)]">
                                        {ele.icon}
                                    </button>
                                </Link>
                            ))}
                        </div>
                        <div className="py-4 flex items-center gap-4 ">
                            <Button variant={"outlined"}>Get In Touch</Button>
                            <Button variant={"solid"}>Resume</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};