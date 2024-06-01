import { IoIosReturnRight } from "react-icons/io";

const Button = ({title="Live Website"}) => {
  return (
    <div className="max-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between ">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
