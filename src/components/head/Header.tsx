import Link from 'next/link';

const Header = () => {
  const navLink: { title: string; link: string }[] = [
    {
      title: 'home',
      link: '/home'
    },
    {
      title: 'our products',
      link: '/home/products'
    },
    {
      title: 'blog',
      link: '/home/blog'
    },
    {
      title: 'about',
      link: '/home/about'
    },
    {
      title: 'contact',
      link: '/home/contact'
    },
    {
      title: 'style guide',
      link: '/home/style_guide'
    }
  ];

  return (
    <header className="py-6 mx-10 relative tablet:mx-0">
      <nav className="flex flex-row justify-between items-center ">
        <div
          className="basis-1/6 font-semibold cursor-pointer
              tablet:text-[15px]
            "
        >
          CoffeeStyle.
        </div>

        <ul
          className="basis-4/6 flex item-center desktop:text-[20px] laptop:text-base
              px-10 justify-between text-gray-500 font-medium  tablet:hidden"
        >
          {navLink.map((item, index) => {
            return (
              <li key={index} className="h-full">
                <Link href={item.link} className="ct-navlink">
                  {item.title.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex">
          <Link
            href={'/cart'}
            className="basis-1/6 flex justify-start text-gray-500 tablet:text-[18px]
                  tablet:text-gray-900"
          >
            <ul className="flex items-center font-semibold ct-navlink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 tablet:w-10 tablet:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="">Cart</span>
            </ul>
            <span
              className="text-white w-fit h-fit bg-coffee
                  rounded-full ml-2 p-1 font-semibold"
            >
              99+
            </span>
          </Link>

          {/* tablet */}
          <button id="toggleMenuIcon" className="desktop:hidden laptop:hidden flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-4 w-10 h-10 m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className="w-full h-fit justify-center flex flex-col text-center
            border-t-2 border-coffee mt-2 pt-2 absolute
            bg-white -translate-y-96 animate-closeSlideDown z-50
          "
        id="topMenu"
      >
        {navLink.map((item, index) => {
          return (
            <Link key={index} className="mb-3 w-full" href={'/'}>
              {item.title.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
