import { FireOutlined } from "@ant-design/icons";
import { TbProgress } from "react-icons/tb";

function Streak() {
  return (
    <div className="grid grid-cols-[2fr,1fr,1fr] my-[5rem] border p-7">
      <div className="flex flex-col justify-start">
        <h3 className="font-bold text-[1.3rem]">Weekly streak</h3>
        <p>Learning every week adds up to something big</p>
      </div>
      <div className="flex items-center gap-4">
        <FireOutlined
          style={{ fontSize: "44px" }}
          className="stroke-[#243c5a]"
        />
        <div>
          <p>
            <strong className="mr-1 text-[1.2rem]">30</strong>
            weeks
          </p>
          <p>Current streak</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <TbProgress style={{ fontSize: "50px" }} />
        <div>
          <p>
            <strong className="mr-1 text-[1.2rem]">200</strong>/30 min course
          </p>
          <p>Nov 5-18</p>
        </div>
      </div>
    </div>
  );
}

export default Streak;
