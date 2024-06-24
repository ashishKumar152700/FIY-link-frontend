import "./style.css";
import { Input, Stack } from "@chakra-ui/react";
import { GrClose } from "react-icons/gr";

export default function Card() {
  return (
    <div className=" bg-gray-200 rounded-[13px] justify-between items-center h-[580px] " id="Card">
      <div className="flex justify-center gap-2 p-8">
        <button
          type="button"
          className=" rounded-none bg-zinc-50 h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2"
        >
          Social Links
        </button>

        <button
          type="button"
          className=" rounded-none bg-zinc-50 h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2"
        >
          Other Links
        </button>
        <button
          type="button"
          className=" rounded-none bg-zinc-50 h-[78px] w-[219px] border-r-4 border-b-4 border-black p-2"
        >
          Product Links
        </button>
      </div>
      <div className="flex justify-center">
        <Stack spacing={4}>
          <Input
            className=" w-[240px] sm:w-[35vw] h-14 "
            htmlSize={4}
            variant="filled"
            placeholder="          Social Media Platform"
          />
          <br />
          <Input
            className="w-[240px] sm:w-[35vw] h-14 "
            htmlSize={4}
            variant="filled"
            placeholder="          Social Media Links"
          />
        </Stack>
      </div>
      <br />
      <div className="flex justify-center">
        
          <button className=" bg-green-500 w-[14vmax] h-[40px] text-yellow-50 text-lg font-bold rounded-lg">
            ADD
          </button>
        
      </div>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-[180px] h-[40px] md:w-[27vw] md:h-[7.75vh] bg-zinc-400 m-2 rounded-[50px]  px-4">
          <h4>YouTube</h4>
          <GrClose />
        </div>
      </div>
      <div className="flex justify-center md:pb-3">
        <div className="flex items-center justify-between w-[180px] h-[40px]  md:w-[27vw] md:h-[7.75vh] bg-zinc-400 m-2 rounded-[50px]  px-4 ">
          <h4>YouTube</h4>
          <GrClose />
        </div>
      </div>
    </div>
  );
}
