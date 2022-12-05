import * as React from "react";
import { useEffect } from "react";
import "../assets/css/homepage.css";
import { getDataPlayer } from "../Service/getDataPlayer";

// Deffine  Data Varible
interface Data {
  realName: string;
  playerName: string;
  asset: string;
}

export const Homepage = () => {
  // Variable
  const [DataPlayer, setDataPlayer] = React.useState([]);
  const [DataPlayerSelected, setDataPlayerSelected] = React.useState<Data>();
  const [Filter, setFilter] = React.useState<boolean>(true);
  const [DataIndexSelected, setDataIndexSelected] = React.useState(1);

  // Function for asynchronously
  const getDataFormApi = async () => {
    const data = await getDataPlayer();
    setDataPlayer(data);
  };

  // get data When first Load
  useEffect(() => {
    getDataFormApi();
  }, []);

  useEffect(() => {
    FilterData();
  }, [Filter]);

  // Function Filter Data
  const FilterData = () => {
    // Define Data and handler when it Blank
    const dataHandle = DataPlayer ? DataPlayer : [];
    // asc Filter
    if (Filter === true) {
      const strAscending = [...dataHandle].sort((a: Data, b: Data) =>
        a.realName > b.realName ? 1 : -1
      );
      setDataPlayer(strAscending);
    } else {
      // desc Filter
      const strDescending = [...dataHandle].sort((a: Data, b: Data) =>
        a.realName > b.realName ? -1 : 1
      );
      setDataPlayer(strDescending);
    }
  };

  // Render Data Player
  const RenderOverview = () => {
    return DataPlayer?.map((value: Data, i) => {
      return (
        <div
          className={` ${
            // if index same as DataSelected The border will be turn green
            DataIndexSelected == i
              ? "border-[2px] border-[#1fb057] scale-105"
              : ""
          } bg-[#ffffff] tag  m-[1rem] w-[8rem] md:w-3/12 p-[1rem]  
           min-h-[9rem] justify-center items-start flex flex-col rounded-md shadow-2xl text-[#00000082]  
           hover:scale-[1.05] hover:cursor-pointer duration-200`}
          key={i}
          onClick={() => {
            // Set Data Player Active
            setDataIndexSelected(i);
            setDataPlayerSelected(value);
          }}
        >
          <p className="overflow-hidden truncate w-full cursor-pointer">
            {value.realName}
          </p>
          <p className="overflow-hidden truncate w-full cursor-pointer">
            {value.playerName}
          </p>
          <p className="overflow-hidden truncate w-full cursor-pointer">
            {value.asset}
          </p>
        </div>
      );
    });
  };

  // submit Function
  const handleSubmit = () => {
    alert(`you submited Value ${DataPlayerSelected.playerName}`);
  };

  return (
    <div className="homepage flex justify-center items-center w-full h-full min-h-screen">
      <section className="flex  flex-col md:p-0   md:flex-row w-full justify-around  ">
        {/* Details Section */}
        <div className=" bg-[#eeeeee]/40  m-[1rem]   md:w-7/12  m-3 md:m-0  shadow-xl   p-6 rounded-md md:min-h-[20rem]">
          <div className="bg-gradient-to-r from-gray-100 to-[#ffffff] max-w-[12rem] p-[1rem] rounded-md ml-[-1.8rem] md:mt-[1rem] shadow-md mb-2">
            <h1
              id="detailsHeader"
              className="text-lg md:text-2xl text-[#00000082] "
            >
              Details
            </h1>
          </div>

          <div className="space-y-2 md:mt-[2rem] text-[#00000082] text-lg">
            {/* when Not selected yet any card will be become ""Pick a card  */}
            {DataPlayerSelected === undefined ? (
              <h1>Pick a card </h1>
            ) : (
              <>
                <p>{DataPlayerSelected?.realName}</p>
                <p>{DataPlayerSelected?.playerName}</p>
                <p>{DataPlayerSelected?.asset}</p>
              </>
            )}
          </div>
        </div>

        {/* Filter Section  */}
        <div className="flex flex-col p-6 md:bg-[#eeeeee]/40 w-full h-full   md:w-4/12 rounded-md min-h-[20rem] shadow-xl">
          <div className="md:bg-gradient-to-r md:from-gray-100 md:to-[#ffffff]  text-center w-full md:max-w-[12rem] md:shadow-md p-[1rem] rounded-md md:ml-[-1.8rem] mt-[1rem] mb-[-2rem] md:mb-2">
            <h1
              id="controlHeader"
              className="text-lg md:text-2xl  text-[#00000082]"
            >
              Controls
            </h1>
          </div>
          <div className="flex justify-between mt-[2rem] mb-[2rem] text-[#00000082] space-x-4">
            {/* Render Button  */}
            <button
              id="Asc"
              onClick={() => {
                // set Filter ASC true
                setDataPlayerSelected(undefined);
                setDataIndexSelected(null);
                setFilter(true);
              }}
              className="bg-[#ffffff] border-[#4A4A4A]/40 border-[2px] text-md  w-full  py-4 rounded-md hover:scale-[1.01] hover:cursor-pointer duration-300 hover:shadow-xl"
            >
              SORT ASC
            </button>
            <button
              id="Desc"
              onClick={() => {
                // set Filter ASC true
                setDataPlayerSelected(undefined);
                setDataIndexSelected(null);
                setFilter(false);
              }}
              className="bg-[#ffffff] border-[#4A4A4A]/40 border-[2px] text-md     w-full  py-4 rounded-md hover:scale-[1.01] hover:cursor-pointer duration-300 hover:shadow-xl"
            >
              SORT DESC
            </button>
          </div>
          <button
            onClick={() => {
              // handle when submit
              handleSubmit();
            }}
            className="bg-[#ffffff] border-[#4A4A4A]/40 border-[2px] text-[#00000082]  w-full py-2 px-10 rounded-md hover:scale-[1.01] hover:cursor-pointer duration-300 hover:shadow-xl"
          >
            SUBMIT
          </button>
        </div>
      </section>

      {/* Overview Section  */}
      <section className="flex bg-[#eeeeee]/40 mb-[3rem]  md:w-7/12 md:ml-[2vw] self-start justify-between shadow-xl rounded-md p-6 md:mt-[3rem]">
        <div className="overview">
          <h1
            id="overviewHeader"
            className="text-lg md:text-2xl  text-[#00000082]   mb-[2rem]"
          >
            Overview
          </h1>

          <div className="flex flex-wrap justify-center ">
            {/* Call Render Overview Function  */}
            {RenderOverview()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
