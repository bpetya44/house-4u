import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-2 border-gray-200">
        <Container>
          <div
            className="
            flex 
            fle-grow 
            justify-between
            gap-3
            md:gap-0
            "
          >
            <Logo />
            <Search />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
