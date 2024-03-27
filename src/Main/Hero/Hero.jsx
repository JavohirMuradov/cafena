import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import img from "./images/preview.png";
import { Theme } from "../../Context/DarkMode";
import { useContext } from "react";

function Hero() {
    var { theme } = useContext(Theme)
    return (
        <Card className="container flex-col shadow-none lg:flex-row-reverse bg-transparent items-center pt-20">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 min-w-[250px] shrink-0 rounded-r-none bg-transparent"
            >
                <img
                    src={img}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody className="text-center lg:text-start">
                <Typography variant="h1" color="blue-gray" className="mb-8 text-5xl font-light font-Zcool">
                    ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN
                </Typography>
                <Typography color="gray" className="mb-8 font-normal lg:w-1/2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod veniam, quis nostrud exercitation
                    laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <div className="flex gap-3 justify-center lg:justify-start">
                    <Button variant="text" className={` ${theme === "light" ? "bg-[#232020] text-white hover:bg-black hover:shadow-black" : "bg-[#F2F2F2] text-black hover:bg-[#F2F2F2] hover:shadow-[#F2F2F2]"} hover:shadow-md mt-1 duration-300`}>
                        Explore More
                    </Button>
                    <Button variant="outlined" className={` ${theme === "light" ? "text-black" : "text-white"}py-2 px-6 border-[#D48A5C] `}>
                        Read More
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default Hero