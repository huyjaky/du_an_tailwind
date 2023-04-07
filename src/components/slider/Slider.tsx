import Link from 'next/link';

const Slider = () => {
  const arrImg: string[] = [
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
  ];

  return (
    <div className=" overflow-hidden mt-[30px] rounded-[30px] relative ">
      <div
        className="w-full h-[500px] rounded-[30px] text-black grid grid-flow-col auto-cols-max100
        animate-marquee snap-proximity
    ">
        {arrImg.map((item, index) => {
          return (
            <div key={index} className="  overflow-hidden snap-start ">
              <img src={item} alt="" className="h-full w-full object-cover " />
            </div>
          );
        })}
      </div>
      <div className="absolute top-0 w-full h-full bg-slate-700 opacity-75 rounded-[30px]"></div>

      <div className='absolute top-0 w-full h-full text-white flex'>
        <div className='m-auto'>
          <h4 className='mb-2'>BEST PLACE FOR BUY COFFEE</h4>
          <Link href={'/'} className=' font-bold text-[50px]'>
            LET BUY ME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
