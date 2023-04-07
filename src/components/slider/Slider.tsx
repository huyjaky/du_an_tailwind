import Link from 'next/link';

const Slider = () => {
  return (
    <div className="w-full h-[500px] bg-coffeeImg bg-cover mt-[30px] rounded-[30px] relative flex text-black">
      <div className="bg-slate-700 opacity-70 w-full h-full rounded-[30px] relative"></div>
      <div className="absolute w-full h-full flex text-slate-100">
        <Link href="/" className="m-auto font-bold text-[50px]">
          <h1>BUY ME NOW</h1>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
