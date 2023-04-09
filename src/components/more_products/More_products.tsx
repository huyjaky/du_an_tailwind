import Link from 'next/link';

const More_products = () => {
  const arrImg: { img: string; link: string }[] = [
    {
      img: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1563201180-1c57435ae249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      link: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1615860291946-62f346ab7e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      link: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      link: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1604423043122-00244f00e116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      link: ''
    },
    {
      img: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      link: ''
    }
  ];

  return (
    <div className="w-full h-[800px] mt-16 text-center">
      {/* title */}
      <span className="font-semibold text-[30px]">More Products</span>

      <div
        className="grid laptop:grid-cols-14 laptop:grid-rows-7 laptop:grid-areas-layoutDesktop
          tabletTemp:grid-cols-15 tabletTemp:grid-rows-8 tabletTemp:grid-areas-layoutTablet
          mobile:grid-cols-16 mobile:grid-rows-9 mobile:grid-areas-layoutMobile
      gap-4 mt-9">
        {arrImg.map((item, index) => {
          return (
            <div
              className={`grid-in-h${index + 1} h-full w-full rounded-2xl overflow-hidden relative
              group
            `}>
              {/* mask */}
              <div
                className="absolute top-0 h-full w-full bg-slate-500 opacity-0
                group-hover:hover:opacity-40 transition-opacity duration-700
              "></div>

              <img src={item.img} alt="" key={index} className="object-cover w-full h-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More_products;
