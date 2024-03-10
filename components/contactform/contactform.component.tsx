import { FC } from "react";

interface InputProps {
    label: string;
    placeholder: string;
}

const Input: FC<InputProps> = ({ label, placeholder }) => {
    return <div className="flex flex-col " >
        <label className="py-1 text-lg text-white font-medium" >{label}</label>
        <input placeholder={placeholder} className=" bg-[var(--secondary-bg-color)] border text-white py-1 px-2 rounded-md" />
    </div>
}

const ContactForm = () => {
    return <>
        <div className="w-full" >
            <form className="border py-2 px-4 border-slate-300 rounded-lg" >
                <Input label={'Your Name'} placeholder="Name" />
                <Input label="Your Email" placeholder="Email" />
                <div className="flex flex-col " >
                    <label className="py-1 text-lg text-white font-medium" >Message</label>
                    <textarea className="bg-[var(--secondary-bg-color)] border text-white py-1 px-2 rounded-md" placeholder="Message.." cols={30} ></textarea>
                </div>
                <div className="py-3 flex my-1 items-center flex-row justify-end " >
                    <button className="px-3 rounded-md py-1 font-medium text-lg bg-white text-gray-900" type="submit" >Submit</button>
                </div>
            </form>
        </div>
    </>
}

export default ContactForm;