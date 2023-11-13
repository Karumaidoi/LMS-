function Footer() {
  return (
    <div className="h-[5rem] flex items-center justify-between bg-gray-50 mt-11 px-9">
      <div>
        <p>&copy; LMS Student All rights reserved</p>
      </div>

      <div> @{new Date().getFullYear()}</div>
    </div>
  );
}

export default Footer;
