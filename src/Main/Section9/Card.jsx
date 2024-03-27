import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

function CardMy({ img }) {
    return (
        <Card className="mt-6 bg-[#1C1A1A] rounded-none w-1/3 mr-0">
            <CardHeader color="blue-gray" className="shadow-none rounded-none -mt-0 p-0 mx-0 w-full">
                <img
                    src={img}
                    alt="card-image"
                    className="w-full"
                />
            </CardHeader>
            <CardBody className="mr-0 p-7">
                <Typography variant="h5" className="mb-2 text-white flex gap-1 text-base">
                    <span className="text-[#EAB665]">BY:</span>
                    Cafena / Burger / Apr 30, 2022
                </Typography>
                <Typography className="text-white text-lg w-2/3">
                    Build A Cool Morning With
                    Cafena Coffee
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="text" className=" text-[#EAB665]">Read More &#8594;</Button>
            </CardFooter>
        </Card>
    );
}

export default CardMy