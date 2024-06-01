import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
  const product = [
    {
      title: "arqitel",
      description:
        "with a continous 3D animation, we showcase Aqitel approach and show how migration data tranoslates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed autselves in a 3D world we created to explain how Cula's platform collectsWe immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    
  ];

  const [pos, setPos] = useState(0);

  const mover  = (val) => {
    setPos(val*23) 

  }

  return (
    <div className="mt-32 relative">
      {product.map((val, index) => (
        <Product val={val} key={index} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 h-full w-full pointer-events-none  ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[46%] -translate-x-[50%] overflow-hidden"
        >
          <motion.div animate={{y: -pos+`rem`}} className="  w-full h-full bg-sky-100 "></motion.div>
          <motion.div animate={{y: -pos+`rem`}} className="  w-full h-full bg-sky-300 "></motion.div>
          <motion.div animate={{y: -pos+`rem`}} className="  w-full h-full bg-sky-400 "></motion.div>
          <motion.div animate={{y: -pos+`rem`}} className="  w-full h-full bg-sky-500 "></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
