import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
import { LuSoup } from "react-icons/lu";
import { MdOutlineNoFood } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { SiBurgerking } from "react-icons/si";
export const Categories = [
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className="w-[60px] h-[60px] text-green-500" />
    },
    {
        id:2,
        name:"breakfast",
       icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:3,
        name:"soups",
        icon:<LuSoup className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:4,
        name:"pasta",
        icon:<GiNoodles className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:5,
        name:"main_course",
        icon:<MdOutlineNoFood className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:6,
        name:"pizza",
       icon:<GiFullPizza className="w-[60px] h-[60px] text-green-500"/>
    },
    {
        id:7,
        name:"burger",
        icon:<SiBurgerking className="w-[60px] h-[60px] text-green-500"/>
    },
]

