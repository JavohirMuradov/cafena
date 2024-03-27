import React, { useContext } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import img from "./images/Group 12.png";
import { Theme } from '../../Context/DarkMode';

const Section5 = () => {
    var { theme } = useContext(Theme)
    return (
        <div className={`${theme === "light" ? "bg-white" : "bg-black"}`}>
            <Card className={`container shadow-none flex-col lg:flex-row-reverse items-center py-5 ${theme === "light" ? "bg-white" : "bg-black"}`}>
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
                        COFFEE MACHINE,BUY FOR HOME
                    </Typography>
                    <Typography color="gray" className="font-normal">
                        Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam
                        venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.
                    </Typography>
                    <Typography color="gray" className="mb-8 font-semibold">
                        mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum
                        id tellus mmodo mattis.
                    </Typography>
                    <div className="flex gap-3 justify-center lg:justify-start">
                        <Button variant="text" className={` ${theme === "light" ? "bg-[#232020] text-white hover:bg-black hover:shadow-black" : "bg-[#F2F2F2] text-black hover:bg-[#F2F2F2] hover:shadow-[#F2F2F2]"} hover:shadow-md mt-1 duration-300`}>
                            Discover now
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>

    )
}

export default Section5