import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SiderbarLogo = () => {
  const router = useRouter();

  return (
    <div className="rounde-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 cursor-pointer transition">
        <BsTwitter/>
    </div>
  );
};

export default SiderbarLogo;
