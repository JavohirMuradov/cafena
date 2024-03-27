import { Button } from "@material-tailwind/react";
import Cardq from "./Card";
import img1 from "./images/Group 18.png";
import img2 from "./images/Group 19.png";
import img3 from "./images/Group 20.png";
import { useContext } from "react";
import { Theme } from "../../Context/DarkMode";

function Section6() {
    var { theme } = useContext(Theme)
    return (
        <section className={`container flex flex-col`}>
            <div className="flex w-full justify-between items-center flex-col lg:flex-row gap-5 md:gap-0 my-5 mb-10">
                <h1 className="text-4xl font-Zcool">Cafena Best Product</h1>
                <Button variant="text" className={` ${theme === "light" ? "bg-[#232020] text-white hover:bg-black hover:shadow-black" : "bg-[#F2F2F2] text-black hover:bg-[#F2F2F2] hover:shadow-[#F2F2F2]"} hover:shadow-md mt-1 duration-300`}>
                    Cafena Best Product
                </Button>
            </div>
            <div className=" flex flex-col lg:flex-row items-center gap-5 justify-between">
                <Cardq img={img1} text={"Vicaragua Coffee Beans"} />
                <Cardq img={img2} text={"Americano Coffee"} />
                <Cardq img={img3} text={"Virgin Coffee Gred"} />
            </div>
        </section>
    );
}

export default Section6