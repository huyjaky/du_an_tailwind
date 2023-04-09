import Link from 'next/link';

const More_products = () => {
  const arrImg: { img: string; link: string; nameProduct: string; des: string; price: Number }[] = [
    {
      img: 'https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link: '',
      nameProduct: 'Coffee',
      des: 'Delicious',
      price: 20
    },
    {
      img: 'https://images.unsplash.com/photo-1563201180-1c57435ae249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      link: '',
      nameProduct: 'Coffee',
      des: 'Delicious',
      price: 20
    },
    {
      img: 'https://images.unsplash.com/photo-1615860291946-62f346ab7e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      link: '',
      nameProduct: 'Coffee',
      des: 'Delicious',
      price: 20
    },
    {
      img: 'https://images.unsplash.com/photo-1458819714733-e5ab3d536722?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      link: '',
      nameProduct: 'Coffee',
      des: 'Delicious',
      price: 20
    },
    {
      img: 'https://images.unsplash.com/photo-1604423043122-00244f00e116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      link: '',
      nameProduct: 'Coffee',
      des: 'Delicious',
      price: 20
    },
    {
      img: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      link: '',
      nameProduct: 'Coffee',
      des: 'Delicious',
      price: 20
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
              <div className="absolute top-0 h-full w-full bg-slate-500 opacity-0 transition-opacity duration-700 group-hover:opacity-40 "></div>

              <div
                className="absolute w-full h-[40%] group-hover:bottom-0 -bottom-40 transition-all
                duration-500 flex
              ">
                <div className="h-full w-[50%] m-auto ">
                  <div className='bg-white w-full'>
                    <span className="font-semibold text-coffee ">{item.nameProduct}</span>
                    <div className="mt-3">{item.des}</div>
                  </div>
                </div>
              </div>

              <img src={item.img} alt="" key={index} className="object-cover w-full h-full" />
            </div>
          );
        })}

        {/* <img src={arrImg[0].img} alt="" className='grid-in-h1 h-full w-full rounded-2xl' />
        <img src={arrImg[1].img} alt="" className='grid-in-h2 h-full w-full rounded-2xl' />
        <img src={arrImg[2].img} alt="" className='grid-in-h3 h-full w-full rounded-2xl' />
        <img src={arrImg[3].img} alt="" className='grid-in-h4 h-full w-full rounded-2xl' />
        <img src={arrImg[4].img} alt="" className='grid-in-h5 h-full w-full rounded-2xl' />
        <img src={arrImg[5].img} alt="" className='grid-in-h6 h-full w-full rounded-2xl' /> */}
      </div>
    </div>
  );
};

export default More_products;
