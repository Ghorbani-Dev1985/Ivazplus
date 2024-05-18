import Image from "next/image";
import { prefooterItems } from "src/constants/Footer";

const PreFooter = () => {
    return (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-16 py-4">
               {
            prefooterItems.map(({id , image , title , subTitle}) => {
                return(
                    <div key={id} className="flex-center gap-x-4">
                        <Image
                    width={50}
                    height={50}
                    alt="ghorbani-dev.ir"
                    placeholder="blur"
                    blurDataURL={`/images/footer/${image}`}
                    src={`/images/footer/${image}`}
                    title={title}
                    className="shrink-0"
                    />
                    <div className="flex flex-1 flex-col gap-y-1.5 text-sm font-bold">
                      <p>{title}</p>
                      <p>{subTitle}</p>
                    </div>
                    </div>
                )
            })
               }
            </section>
     );
}
 
export default PreFooter;