import React from 'react';
import { motion } from 'framer-motion';

type NavButtonProps = {
  isActive: boolean;
  setisActive: (value: boolean) => void;
};

export default function NavButton({ isActive, setisActive }: NavButtonProps) {
  return (
    <div onClick={() => setisActive(!isActive)} className="button">
      <motion.div
        className="slider"
        animate={{ y: isActive ? '-100%' : '0%' }}
        transition={{ duration:0.5, ease:[0.76,0,0.24,1] }}
      >
        <div className="el">
          <PerspectiveText label={"Menu"}/>
        </div>
        <div className="el mt-2">
          <PerspectiveText label={"Close"}/>
        </div>
      </motion.div>
    </div>
  );
}



function PerspectiveText({label}){
  return(
    <div className="perspectiveText">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  )
}
