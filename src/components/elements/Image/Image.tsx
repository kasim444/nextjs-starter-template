import NextImage from "next/image";
import { IImage } from "@interfaces";
import { FC, useState } from "react";

const Image: FC<IImage> = ({
    fallbackSrc = "/assets/images/placeholders/placeholder-image.png",
    src = "",
    layout = "fill",
    objectFit = "contain",
    ...rest
}) => {
    const [imgSrc, setImgSrc] = useState(src);

    const onError = () => {
        setImgSrc(fallbackSrc);
    };

    return (
        <NextImage
            {...rest}
            src={imgSrc}
            layout={layout}
            {...(layout === "fill" && { objectFit })}
            onError={onError}
        />
    );
};

export default Image;
