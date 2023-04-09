const Story = () => {
  return (
    <div className="w-[60%] h-full tablet:w-full mt-20 text-center tablet:text-left">
      <span className="text-[40px] leading-10">
        The History of Starbucks: From a Single Store to a Global Coffee Chain
      </span>
      <p className="mt-5 text-[25px] leading-10">
        Starbucks, founded in 1971 in Seattle, started as a single store selling coffee beans and
        equipment. However, it quickly expanded into a coffeehouse chain serving high-quality
        coffee, snacks, and beverages. Starbucks' focus on customer experience, community
        involvement, and employee satisfaction has helped the company grow into a global brand with
        over 30,000 stores worldwide. Despite facing challenges such as economic downturns and
        increasing competition, Starbucks continues to innovate and expand its offerings, including
        its popular seasonal drinks and digital ordering options. With a commitment to
        sustainability and ethical sourcing, Starbucks is not just a coffee chain, but a cultural
        icon that has revolutionized the way we consume coffee.
      </p>
      <button
        className="mt-[20px] bg-coffee text-white w-[100%] h-[40px]
      rounded-2xl hover:scale-125 transition-all duration-700">
        Read the full story
      </button>
    </div>
  );
};

export default Story;
