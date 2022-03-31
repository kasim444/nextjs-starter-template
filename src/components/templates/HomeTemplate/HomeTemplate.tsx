import { DUMMY_FULL_SCREEN_SLIDE_ITEMS } from "@lib/const";
import { FullScreenSlider } from "@sections";
import { Fragment } from "react";

const HomeTemplate = () => {
    return (
        <Fragment>
            <FullScreenSlider slideItems={DUMMY_FULL_SCREEN_SLIDE_ITEMS} />
        </Fragment>
    );
};

export default HomeTemplate;
