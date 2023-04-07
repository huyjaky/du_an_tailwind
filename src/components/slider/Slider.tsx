import Link from 'next/link';

const Slider = () => {
  return (
    <div className="w-full h-[500px] bg-coffeeImg bg-cover mt-[30px] rounded-[30px] relative flex text-black">
      <div className="bg-slate-700 opacity-70 w-full h-full rounded-[30px] relative"></div>
      <div className="absolute w-full h-full flex text-slate-100">
        <div  className="m-auto  text-center">
          <div className='mb-4'>BEST PLACE TO BUY COFFEE</div>
          <Link className='font-bold text-[50px]' href="/">
            <div>LET BUY ME</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
