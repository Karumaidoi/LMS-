import Account from "../ui/Account";
import Courses from "../ui/Courses";
import Footer from "../ui/Footer";
import LastStreak from "../ui/LastCourse";
import Streak from "../ui/Streak";

function HomePage() {
  return (
    <div className="bg-white px-[7rem] py-6">
      <Account />
      <Streak />
      <LastStreak />
      <Courses />
      <Footer />
    </div>
  );
}

export default HomePage;
