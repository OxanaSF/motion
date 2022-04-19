import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Sidebar = ({ children }) => {
  const routes = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/button",
      name: "Button",
    },
    {
    path: "/loader",
      name: "Loader",
    },
    {
      path: "/modal",
      name: "Modal",
    },
   
  ];

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <aside>
      <motion.div animate={{ width: isOpen ? "30vh" : "4.5vh"}} className="sidebar">
        <section className="top_section">
            {isOpen && <h1></h1>}
            
            <div className="bars">
                <FaBars onClick={toggle} />
            </div>
        </section>


        {isOpen && 
        <section className="routes">
          {routes.map((route) => (
            <Link to={route.path} key={route.name} className='link'>
              <div className="link_text">{route.name}</div>
            </Link>
          ))}
        </section>
}
      </motion.div>
      <main>{children}</main>
    </aside>
  );
};

export default Sidebar;
