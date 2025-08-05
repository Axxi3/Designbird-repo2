import React, { JSX } from 'react';
import { motion, Variants } from 'framer-motion';
import { links, footerLinks } from './data';

// Define types for the link objects
type LinkItem = {
  title: string;
  href: string;
};

export default function Index(): JSX.Element {
  const slideIn: Variants = {
    initial: {
      opacity: 0,
      y: 20
    },
    enter: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: (i * 0.1), 
        ease: [0.215, 0.61, 0.355, 1]
      }
    }),
    exit: {
      opacity: 0,
      transition: { 
        duration: 0.5, 
        type: "tween", 
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="nav">
      <div className="body">
        {links.map((link: LinkItem, i: number) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="linkContainer">
              <motion.div
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href}>
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>

      <motion.div className="footer">
        {footerLinks.map((link: LinkItem, i: number) => {
          const { title, href } = link;
          return (
            <motion.a 
              href={href}
              variants={slideIn}
              custom={i} 
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
