
import { motion } from 'framer-motion';
import { links,footerLinks } from './data';


export default function index() {

  const slideIn = {

  initial: {

      opacity: 0,

      y: 20

  },

  enter: (i) => ({

      opacity: 1,

      y: 0,

      transition: { 

          duration: 0.5,

          delay:  (i * 0.1), 

          ease: [.215,.61,.355,1]

      }

  }),

  exit: {

      opacity: 0,

      transition: { duration: 0.5, type: "tween", ease: "easeInOut"}

  }

}

  return (
    <div className="nav ">
       <div className="body">
        {
            links.map( (link, i) => {
                const { title, href } = link;
                return (
                    <div key={`b_${i}`} className="linkContainer">
                        <motion.div
                          
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
                )
            })
        }
       </div>

       <motion.div className="footer">
            {
                footerLinks.map( (link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.a 
                            variants={slideIn}
                            custom={i} 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                        >
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}



