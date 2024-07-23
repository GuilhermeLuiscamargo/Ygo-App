import Image from "next/image";
import SpinSvg from "../../public/img/loader-spin.svg";
export function LoaderSpin({ classname = "loader" }) {
  return (
    <Image
      className={classname}
      width={150}
      height={150}
      src={SpinSvg}
      alt="loading..."
      priority={true}
      placeholder="blur"
      blurDataURL={"/img/loader-spin.svg"}
      style={{ width: "auto", height: "auto" }}
    />
  );
}
