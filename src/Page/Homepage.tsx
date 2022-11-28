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
  const [Filter, setFilter] = React.useState(true);

  // get data When first Load
  useEffect(() => {
    getDataFormApi();
  }, []);

  useEffect(() => {
    FilterData();

    console.log(DataPlayerSelected, "DataPlayerSelected");
  }, [Filter]);

  // Function for asynchronously
  const getDataFormApi = async () => {
    const data = await getDataPlayer();
    setDataPlayer(data);
  };

  // Function Filter Data
  const FilterData = () => {
    // Define Data and handler when it Blank
    const dataHandle = DataPlayer ? DataPlayer : [];
    // asc Filter
    if (Filter == true) {
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

  // Render Object To Html
  const RenderOverview = () => {
    return DataPlayer?.map((value: Data, i) => {
      return (
        <div
          className=" bg-[#ffffff] tag  m-[1rem] w-[8rem] md:w-3/12 p-[1rem]   min-h-[9rem] justify-center items-start flex flex-col rounded-md shadow-2xl text-[#282828] hover:scale-105 hover:cursor-pointer duration-500"
          key={i}
          onClick={() => {
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
      <section className="flex  flex-col md:p-0   md:flex-row w-full justify-around ">
        <div className=" bg-[#eeeeee]  m-[1rem]   md:w-7/12  m-3 md:m-0    p-6 rounded-md md:min-h-[20rem]">
          <div className="bg-[#d6d6d6] max-w-[12rem] p-[1rem] rounded-md ml-[-1.8rem] md:mt-[1rem] mb-2">
            <h1 className="text-lg md:text-2xl text-[#00000082]">Details</h1>
          </div>

          <div className="space-y-2 md:mt-[2rem] text-[#00000082] text-lg">
            {/* when Not selected yet any card will be become ""Pick a card  */}
            {DataPlayerSelected == undefined ? (
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
        <div className="flex flex-col p-6 md:bg-[#eeeeee] w-full h-full   md:w-4/12 rounded-md min-h-[20rem]">
          <div className="md:bg-[#d6d6d6] text-center w-full md:max-w-[12rem] p-[1rem] rounded-md md:ml-[-1.8rem] mt-[1rem] mb-[-2rem] md:mb-2">
            <h1 className="text-lg md:text-2xl  text-[#00000082]">Controls</h1>
          </div>
          <div className="flex justify-between mt-[2rem] mb-[2rem] text-[#00000082] space-x-4">
            <button
              onClick={() => {
                // set Filter ASC true
                setFilter(true);
              }}
              className="bg-[#EEEEEE] border-[#4A4A4A]/40 border-[2px] text-md  w-full  py-4 rounded-md"
            >
              SORT ASC
            </button>
            <button
              onClick={() => {
                // set Filter ASC true
                setFilter(false);
              }}
              className="bg-[#EEEEEE] border-[#4A4A4A]/40 border-[2px] text-md    w-full  py-4 rounded-md"
            >
              SORT DESC
            </button>
          </div>
          <button
            onClick={() => {
              // handle when submit
              handleSubmit();
            }}
            className="bg-[#EEEEEE] border-[#4A4A4A]/40 border-[2px] text-[#00000082]  w-full py-2 px-10 rounded-md"
          >
            SUBMIT
          </button>
        </div>
      </section>
      <section className="flex bg-[#eeeeee] mb-[3rem]  md:w-7/12 md:ml-[2vw] self-start justify-between rounded-md p-6 md:mt-[3rem]">
        <div className="overview">
          <h1 className="text-lg md:text-2xl  text-[#00000082] mb-[2rem]">
            Overview
          </h1>

          <div className="flex flex-wrap justify-center ">
            {RenderOverview()}
          </div>
        </div>
      </section>
    </div>
  );
};
