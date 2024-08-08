import Image from "next/image";
import gojekImage from "@/public/images/gojek.svg";
import grabImage from "@/public/images/grab.svg";
import danaImage from "@/public/images/dana.svg";
import shoppeImage from "@/public/images/shoppe.svg";
import zamatoImage from "@/public/images/zamato.svg";

const Support = () => {
  const listSupport = [
    { key: 0, name: "gojek", image: gojekImage },
    { key: 1, name: "grab", image: grabImage },
    { key: 2, name: "dana", image: danaImage },
    { key: 3, name: "shoppe", image: shoppeImage },
    { key: 4, name: "zamato", image: zamatoImage },
  ];

  return (
    <section
      className="p-container md:pt-[50px] py-14 md:pb-[80px] lg:mt-[50px]"
      data-aos="fade-down">
      <div className="flex justify-center md:justify-between lg:px-[120px] gap-x-8 gap-y-6 flex-wrap">
        {listSupport.map(({ key, name, image }) => (
          <Image key={key} src={image} alt={name} />
        ))}
      </div>
    </section>
  );
};

export default Support;
