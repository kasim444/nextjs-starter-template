import { Button, Box } from "@chakra-ui/react";
import { IHamburgerMenu } from "@interfaces";
import cn from "classnames";

const HamburgerMenu = ({ isOpen, onToggle }: IHamburgerMenu) => {
    return (
        <Button
            onClick={onToggle}
            className={cn({
                "menu--active": isOpen,
            })}
            variant="unstyled"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            minWidth="auto"
            width="8"
            height="8"
            position="relative"
            overflow="hidden"
            sx={{
                "& > span:nth-of-type(1)": {
                    transform: "translateY(-7px)",
                    width: "22px",
                    left: "3px",
                },
                "& > span:nth-of-type(2)": {
                    transform: "translateY(7px)",
                    width: "22px",
                    left: "3px",
                },
                "& > span:nth-of-type(3)": {
                    left: "5px",
                },
                "&.menu--active > span:nth-of-type(1)": {
                    width: "6",
                    transform: "translateY(0px) rotate(45deg)",
                },
                "&.menu--active > span:nth-of-type(2)": {
                    width: "6",
                    transform: "translateY(0px) rotate(-45deg)",
                },
                "&.menu--active > span:nth-of-type(3)": {
                    transform: "translateX(60px)",
                    opacity: 0,
                },
            }}
        >
            <Box
                as="span"
                layerStyle="hamburgerMenu"
                background="black.default"
            />
            <Box
                as="span"
                layerStyle="hamburgerMenu"
                background="black.default"
            />
            <Box
                as="span"
                layerStyle="hamburgerMenu"
                background="black.default"
            />
        </Button>
    );
};

export default HamburgerMenu;
