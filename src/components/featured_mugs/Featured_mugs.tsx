import Link from 'next/link';

const Featured_mugs = () => {
  const arrImg: { img: string; link: string }[] = [
    {
      img: 'https://images.unsplash.com/photo-1525480122447-64809d765ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      link: '/coffee-black'
    },
    {
      img: 'https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      link: '/coffee-semiblack'
    }
  ];

  const tagHide = () => {};

  return (
    <div className="w-[70%] h-full tablet:w-full mt-32 mb-40">
      <div className="w-full h-full grid grid-cols-13 grid-rows-1 gap-5 ">
        {arrImg.map((item, index) => {
          return (
            <div className="w-full h-fit flex flex-col text-center " key={index}>
              <div
                key={index}
                className=" h-[600px] w-full rounded-3xl overflow-hidden relative group">
                {/* mask */}
                <div
                  className="w-full h-full bg-slate-500 absolute top-0 opacity-0
                hover:opacity-40 transition-opacity duration-700"></div>

                {/* tag */}
                <div
                  className="bg-slate-100 w-[60%] h-[10%] -bottom-40 absolute mx-[20%] mb-[18%] flex
                  group-hover:bottom-0 transition-all duration-500
                "
                  id="tag">
                  <Link href={item.link} className="m-auto text-coffee2 font-semibold">
                    Feature Mugs
                  </Link>
                </div>

                {/* show product */}
                <img src={item.img} className="w-full h-full object-cover" alt="" />
                <div
                  className="right-0 bg-white absolute top-0
                mt-[20px] mr-[20px] p-2 text-coffee font-semibold
              ">
                  On Sale
                </div>
              </div>

              {/* title */}
              <Link href={item.link} className="mt-[20px] text-[30px] font-semibold text-coffee2">
                Coffee #3 Stick
              </Link>
              <div className="mt-[20px]">$99</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured_mugs;
