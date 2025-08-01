import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props:HTMLAttributes<HTMLDivElement>){
    const {className,children,...otherProps} = props;
    return(
        <div className={twMerge("inline-flex   gap-2 text-[#F3631F]  border-[#222222]   py-1 rounded-sm  items-center",className) } {...otherProps}>
           
            <span className="md:text-[16px] text-[12px] ">
                {children}
            </span>
        </div>
    )
}