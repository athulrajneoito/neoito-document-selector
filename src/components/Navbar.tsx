import classNames from "classnames";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav
      className={classNames({
        "bg-white": true, // colors
        "flex items-center w-full": true, // layout
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true, //positioning & styling
      })}
    >
      <div className="font-bold text-2xl flex justify-between w-full">
        <p>Select Agreements, Notices and Other Documents</p>
        <Button
          variant="secondary"
          value="Save & Close"
          type="button"
          inputClasses="w-max"
        />
      </div>
    </nav>
  );
};

export default Navbar;
