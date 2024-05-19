import Link from "next/link";

const CopyRight = () => {
    return ( 
        <section className="flex-between text-xs">
          <p>توسعه داده شده توسط <Link target="_blank" href="https://github.com/Ghorbani-Dev1985" className="font-bold">محمد قربانی</Link> (نمونه کار)</p>
          <p className="dir-ltr font-sans">www.ivazplus.com - Copyright © 2024 - All rights reserved.</p>
        </section>
     );
}
 
export default CopyRight;