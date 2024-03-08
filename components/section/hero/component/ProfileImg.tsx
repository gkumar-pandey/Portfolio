import Image from "next/image";
import gautamImage from "@/public/assets/gautam-img.png";

export const ProfileImage = () => {
  return (
    <>
      <Image
        className="rounded-lg  h-[100px] w-[100px] object-cover object-top shadow-lg border-2 border-[var(--primary-color)] "
        src={gautamImage}
        alt="my profile image"
      />
    </>
  );
};
