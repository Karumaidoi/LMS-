import { Link } from "react-router-dom";

function Account() {
  return (
    <div className="flex items-center justify-start gap-5">
      <div className="h-[4rem] w-[4rem] bg-stone-500 rounded-[100px]"></div>
      <div className="flex flex-col gap-1">
        <h3 className="text-[1.3rem] font-bold">Welcome back, Alex</h3>
        <div className="flex items-center gap-3">
          <p>Student</p>
          <Link className="underline text-blue-900 text-sm font-semibold">
            Edit account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Account;
