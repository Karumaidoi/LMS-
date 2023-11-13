import { Badge as FlowBiteBadge } from "flowbite-react";
import { Badge } from "antd";

function LastCourse() {
  return (
    <div className="mt-[4rem] ">
      <h1 className="text-[1.8rem] font-semibold mb-7">
        Pick up from where you left
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="flex items-start gap-1 border w-[max-content] ">
          <div className="w-[8rem] h-[8rem] bg-[#323232] backdrop-blur-md"></div>
          <Badge.Ribbon text="New" color="cyan">
            <div className="py-2 px-2 mr-7 flex flex-col justify-between">
              <div>
                <h6 className="text-[.8rem] font-semibold text-gray-600 mb-1">
                  Logo Mastery in Adobe Illustrator
                </h6>
                <h3 className="text-[1rem] font-bold">
                  Using Photoshops Mockups
                </h3>
              </div>
            </div>
            <FlowBiteBadge
              color="success"
              size="lg"
              className="w-[max-content]"
            >
              Design
            </FlowBiteBadge>
          </Badge.Ribbon>
        </div>
      </div>
    </div>
  );
}

export default LastCourse;
