
const attributesItems = [
    {
      id: 1,
      title: "قد : تقریبا 75 سانتی متر",
    },
    {
      id: 2,
      title: "جنس : مازراتی",
    },
    {
      id: 3,
      title: "سایز : فری",
    },
    {
      id: 4,
      title: "توضیحات : جلوی کار لایه کشی شده",
    },
  ];
  

const ProductDescription = ({description}) => {
    return ( 
        <section className="w-full bg-slate-100 rounded-xl p-4">
        <p className="text-xl font-bold my-6">توضیحات</p>
        <p className="my-5">اندازه های درج شده در جدول سایزبندی تقریبی می باشد.</p>
        <p className="my-5">برای دیدن سایزبندی لطفا روی جدول سایز کلیک کنید.</p>
        <p className="my-5">{description}</p>
        <p className="text-xl font-bold my-6">مشخصات</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {attributesItems.map(({ id, title }) => {
            return (
              <div key={id} className="bg-white p-3 rounded-xl">
                {title}
              </div>
            );
          })}
        </div>
      </section>
     );
}
 
export default ProductDescription;