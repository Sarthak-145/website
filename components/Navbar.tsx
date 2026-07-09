import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white">
      <div className="text-xl font-bold tracking-tight">Qvecodes</div>

      <div className="flex items-center">
        <Link href="/" className="mx-4">
          Home
        </Link>
        <Link href="/articles" className="mx-4">
          Articles
        </Link>
        <Link href="/projects" className="mx-4">
          Projects
        </Link>
        <a href="" className="mx-4">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
