const Magazine = () => {
  const arrImg: string[] = [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1527596428171-7885b82c91c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80',
    'https://images.unsplash.com/photo-1577590835286-1cdd24c08fd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  ];

  return (
    <div className="w-full h-full">
      {/* title */}
      <div className="w-full h-fit text-center font-semibold mt-32">
        {'Buy 2 product to get free'.toUpperCase()}
      </div>

      {/* content */}
      <div className="w-full h-full  grid grid-cols-13 gap-3">

        {/* magazine */}
        <div
          className="w-full h-full grid grid-areas-layoutMagazine tablet:grid-areas-layoutMagazine2
          gap-3 p-10 grid-rows-10 tablet:p-0
        ">
          {arrImg.map((item, index) => {
            return (
              <div className={`w-full h-full grid-in-h${index + 1}`} key={index}>
                <img src={item} className="w-full h-full object-cover" alt="" />
              </div>
            );
          })}

          {/* <div className="w-full h-full grid-in-h1">
            <img src={arrImg[0]} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="w-full h-full grid-in-h2">
            <img src={arrImg[1]} className="w-full h-full object-cover" alt="" />
          </div>

          <div className="w-full h-full grid-in-h3">
            <img src={arrImg[2]} className="w-full h-full object-cover" alt="" />
          </div> */}
        </div>

        <div className="w-full h-fit text-left py-24 tablet:p-0 tablet:text-center">
          <div className="mb-8">PREMIUM OFFER</div>
          <div className="font-bold mb-8 text-[40px] tablet:leading-10">Get our Coffee Magazine</div>
          <div className="mb-8">The most versatitle furniture system ever created. <br />
            Designed to fit your life
          </div>
          <button className="bg-slate-800 w-[40%] h-[100px] text-white">START SHOPPING</button>
        </div>
      </div>
    </div>
  );
};
export default Magazine;
