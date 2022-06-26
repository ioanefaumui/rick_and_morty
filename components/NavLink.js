import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ text, path, marginRight }) => {
  const router = useRouter();

  const isCurrentPage = router.pathname == path;

  return (
    <Link href={path}>
      <a
        className={`p-4 sm:p-0 block mr-0 sm:${marginRight || "mr-0"} ${
          isCurrentPage ? "text-cyan-400" : "text-white"
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
