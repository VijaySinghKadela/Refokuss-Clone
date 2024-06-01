import Product from "./Product";

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
      title: "Layout Land",
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
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "Singularity",
      description:
        "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      live: true,
      case: false,
    },
    {
      title: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: true,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: false,
    },
    
    
    
  ];
  return (
    <div className="mt-32">
      {product.map((val, index) => (
        <Product val={val} key={index} />
      ))}
     
    </div>
  );
};

export default Products;
