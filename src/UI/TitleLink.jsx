import Link from "next/link";

const TitleLink = ({title , href , icon , linkText}) => {
    return ( 
        <div className="w-full flex-between">
        <p className="font-danaMedium md:text-xl self-start mt-4 mb-10 text-zinc-700 dark:text-white">
          {title}
        </p>
        <Link href={href} className="flex-center gap-x-1 bg-sky-100 hover:bg-sky-200 text-sky-500 p-2 rounded-xl transition-colors">
           {icon} {linkText}</Link>
        </div>
     );
}
 
export default TitleLink;