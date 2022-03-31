/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Flex } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowNextIcon } from "@icons";
import { IFullScreenSlider } from "@interfaces";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import FullScreenSlideItem from "./FullScreenSlideItem";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const FullScreenSlider = observer(({ slideItems }: IFullScreenSlider) => {
    const [initSwiper, setInitSwiper] = useState<any>({});

    const handleNextSlide = () => initSwiper.slideNext();
    const handlePrevSlide = () => initSwiper.slidePrev();

    return (
        <Box
            as="section"
            background={"white.default"}
            pt={{ base: "97px", lg: "107px" }}
            pb={{ base: "78px", lg: "100px" }}
            position={"relative"}
        >
            <Container position={"relative"}>
                <Swiper
                    slidesPerView={1}
                    className="full-screen-slider"
                    grabCursor
                    onInit={(ev) => {
                        setInitSwiper(ev);
                    }}
                >
                    {slideItems.map(({ id, ...rest }) => (
                        <SwiperSlide key={id}>
                            <FullScreenSlideItem {...rest} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Flex
                    flexDirection="row"
                    justifyContent={"space-between"}
                    alignItems="center"
                    minHeight={"40px"}
                    position="absolute"
                    top="50%"
                    left="0px"
                    right="0px"
                    transform={"translateY(-50%)"}
                    zIndex={"sliderNavButtonContainer"}
                    px={{ base: "0", lg: "14" }}
                >
                    <Box
                        role="button"
                        layerStyle={"sliderNavButton"}
                        aria-label="Slider önceki butonu"
                        onClick={handlePrevSlide}
                    >
                        <ArrowBackIcon color="white.default" />
                    </Box>
                    <Box
                        role="button"
                        layerStyle={"sliderNavButton"}
                        aria-label="Slider sonraki butonu"
                        onClick={handleNextSlide}
                    >
                        <ArrowNextIcon color="white.default" />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
});

export default FullScreenSlider;
