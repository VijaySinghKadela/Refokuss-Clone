import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({ width, start, para, hover="false" }) => {
  
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff" , padding: "25px"}} className={` bg-zinc-800 p-5 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center ">
          <h3>one headling</h3>
          <IoIosArrowRoundForward />
        </div>

        <h1 className="text-3xl font-medium mt-5">whatever heading.</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-zinc-50 border-[1px] ">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <>
            <p className="text-sm text-zinc-500 font-medium">
              Explore what drives our team.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
