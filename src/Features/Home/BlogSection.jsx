"use client";
import { blogItems } from "@/Constants/blogs";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

const BlogSection = () => {
  return (
    <section className="container grid grid-cols-12 gap-4">
      <div className="col-span-4 md:col-span-7 flex flex-col">
        <h2 className="font-semibold text-2xl mb-4">ایواز بلاک</h2>
        {
            blogItems.map(({id , img , title , description , category , date}) => {
                return(
                  <div key={id} className="flex group gap-x-3 mb-4">
          <Image
            width={274}
            height={197}
            alt="ghorbani-dev.ir"
            placeholder="blur"
            blurDataURL={`/images/blogs/${img}`}
            src={`/images/blogs/${img}`}
          />
          <div className="flex flex-col justify-center gap-y-3">
            <h4 className="font-semibold text-sm group-hover:text-primary">{title}</h4>
            <p className="text-gray-400 line-clamp-2 leading-7 text-xs">{description}</p>
            <div className="flex items-center gap-x-2">
              <Chip color="default" className="group-hover:bg-primary group-hover:text-white transition-colors">{category}</Chip>
             {date}
            </div>
          </div>
        </div>  
                )
            })
        }
        
      </div>
      <div className="col-span-4 md:col-span-5">
      <video width="500" height="400" playsInline autoPlay muted loop className="rounded-xl">
      <source src="/video/blogSide.mp4" type="video/mp4" />
    </video>
      </div>
    </section>
  );
};

export default BlogSection;
