import Link from "next/link";

export const Header = () => {
  return (
    <Link href="/" className="block text-3xl font-medium text-center">
      Task Tracker
    </Link>
  );
};

export default Header;
