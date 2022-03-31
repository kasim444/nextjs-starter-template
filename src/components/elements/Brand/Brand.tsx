import { Link } from "@elements";
import { BrandLogo } from "@icons";
import { IBrand } from "@interfaces";

const Brand = ({ containerProps, href = "/" }: IBrand) => (
    <Link href={href} {...containerProps}>
        <BrandLogo />
    </Link>
);

export default Brand;
