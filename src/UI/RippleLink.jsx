import Link from "next/link";

const RippleLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="relative z-10 overflow-hidden before:content-[''] before:absolute before:block before:size-0 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white/20 before:rounded-full before:opacity-0 before:z-20 hover:before:animate-circle"
    >
      {children}
    </Link>
  );
};

export default RippleLink;
