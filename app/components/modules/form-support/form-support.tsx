import Form from "./form";
import IllustrationImage from "./illustration-image";

const FormSupport = () => {
  return (
    <section className="bg-[url('/images/bg-support.png')] bg-no-repeat">
      <div className="p-container flex flex-wrap text-tuna py-[50px]">
        <Form />
        <IllustrationImage />
      </div>
    </section>
  );
};

export default FormSupport;
