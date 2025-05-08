import React,{useState} from 'react';
import {
  nestedMenuData,
  foodSubMenuData,
  cleaningSubMenuData,
  personalSubMenuData,
  healthSubMenuData,
  babySubMenuData,
  homeSubMenuData,
  foodfruitMenuData,
  foodMeatMenuData,
  foodSauceMenuData,
  foodBevarigMenuData,
  foodCandyMenuData,
  personalOralSubMenuData,
  personalHandwashSubMenuData,
  personalWomenSubMenuData,
  personalMenSubMenuData,
  } from '../utils/objectData/navdata';

function NestedMenu() {
    const [subMenu, setSubMenu] = useState();

    return (
        <div className =" absolute mt-11 w-[12rem] space-y-3  bg-slate-100  border border-slate-200 rounded-md p-1 pb-1 transition-all">
          {nestedMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className ="my-2 w-full flex justify-between items-center text-sm text-slate-900 hover:text-green-500 border-b border-slate-200 p-1"
              >
                <span className ="text-md">{`${item.mainTital} `}</span>
    
                <i className="fa-solid fa-angle-right text-xm"></i>
              </button>
            );
          })}
          {subMenu == 0 ? <FoodMenu /> : subMenu == 1 ? <Cleaning /> : subMenu== 2 ? <Personal/> :subMenu == 3 ? <Health/> : subMenu ==4 ? <Baby/>:subMenu == 5 ? <Home/> :""}
        </div>
      );
    }

    // FOOD Menu And  Sub Menu
  function FoodMenu() {
      const [subMenu, setSubMenu] = useState();
      return (
        <div className="absolute top-0 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {foodSubMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900 hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>
                <i className="fa-solid fa-angle-right mr-2 text-sm "></i>
              </button>
            );
          })}
          {subMenu == 0 ? <Fruits /> :subMenu==1 ? <Meat/>:subMenu==2 ? <Sauce/> : subMenu==3? <Candy/> :subMenu==4 ? <Beverag/>:"" }
        </div>
      );
    };

 const Fruits = () => {
      return (
        <div className="absolute top-0 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {foodfruitMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>

              </button>
            );
          })}
        </div>
      );
    };

 const Meat = () => {
      return (
        <div className="absolute top-6 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {foodMeatMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>

              </button>
            );
          })}
        </div>
      );
    };

    const Sauce = () => {
      return (
        <div className="absolute top-8 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {foodSauceMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>

              </button>
            );
          })}
        </div>
      );
    };

    const Candy = () => {
      return (
        <div className="absolute top-9 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {foodCandyMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>

              </button>
            );
          })}
        </div>
      );
    };

    const Beverag = () => {
      return (
        <div className="absolute top-9 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {foodCandyMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>

              </button>
            );
          })}
        </div>
      );
    };

  // cleaning meanu and SubMenu
    const Cleaning = () => {
      return (
        <div className="absolute top-5 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {cleaningSubMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>
              </button>
            );
          })}
        </div>
      );
    };

    // personal care Menu and SubMenu

   function Personal() {
    const[subMenu,setSubMenu] = useState();
      return (
        <div className="absolute top-[4rem] left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all ">
          {personalSubMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900 hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>
    
                <i className="fa-solid fa-angle-right text-sm"></i>
              </button>
            );
          })}
          {subMenu == 0 ? <Women /> :subMenu==1 ? <Men/>:subMenu==2 ? <HandWash/> : subMenu==3? <Oral/>:"" }
        </div>
      );
    };

    const Women = () => {
      return (
        <div className="absolute top-3 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {personalWomenSubMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>

              </button>
            );
          })}
        </div>
      );
    };

    const Men = () => {
      return (
        <div className="absolute top-4 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {personalMenSubMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>

              </button>
            );
          })}
        </div>
      );
    };

    const HandWash = () => {
      return (
        <div className="absolute top-9 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {personalHandwashSubMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>

              </button>
            );
          })}
        </div>
      );
    };

    const Oral = () => {
      return (
        <div className="absolute top-9 left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all">
          {personalOralSubMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>

              </button>
            );
          })}
        </div>
      );
    };

 
    // Health Meanu and sub Menu
    const Health = () => {
      return (
        <div className="absolute top-[6.7rem] left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all ">
          {healthSubMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>
    
              </button>
            );
          })}
        </div>
      );
    };

    // Baby care meanu

    const Baby = () => {
      return (
        <div className="absolute top-[8rem] left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-200 transition-all ">
          {babySubMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900  hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>
    
              </button>
            );
          })}
        </div>
      );
    };

    // Home & Kitchen Menu

    const Home = () => {
      return (
        <div className="absolute top-[10rem] left-full w-[12rem] space-y-3 bg-white border border-slate-200 rounded-md  pt-1 pl-2 pb-1 text-sm ease-in-out delay-100 transition-all ">
          {homeSubMenuData.map((item, index) => {
            return (
              <button
                key={index}
                onMouseEnter={() => setSubMenu(index)}
                className="my-2 w-full flex justify-between items-center text-sm text-slate-900 hover:text-green-500 border-b border-slate-200 p-1 "
              >
                <span className="text-sm">{`${item.mainTital} `}</span>
              </button>
            );
          })}
        </div>
      );
    };

 
 

    export default NestedMenu;