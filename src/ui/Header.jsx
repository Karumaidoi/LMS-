import { UserOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="py-4 px-8 flex items-center justify-between">
      {/* Image Logo */}
      <div className="flex items-center gap-5">
        <Link to={"/"} className="flex items-center gap-5">
          <img src="src/assets/applogo.png" height={"45rem"} width={"45rem"} />
          <h3 className="text-md font-semibold">LMS Student</h3>
        </Link>

        {/* Search Bar [Ant Design] */}
        <Input
          size="lg"
          placeholder="Search for anything"
          className="w-[300px] rounded-lg"
        />
      </div>

      {/* AVATAR */}
      <Avatar size="large" icon={<UserOutlined />} className="cursor-pointer" />
    </div>
  );
}

export default Header;
