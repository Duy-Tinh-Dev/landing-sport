import Link from "next/link";
import { ListNavigation } from "./header";

interface NavigationProps {
  listNav: ListNavigation[];
}

const Navigation: React.FC<NavigationProps> = ({ listNav }) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-4 lg:gap-10">
        {listNav.map((itemNav) => (
          <li key={itemNav.key}>
            <Link
              className="px-2.5 lg:px-4 py-2 text-dark-jungle-green font-medium"
              href={itemNav.link}>
              {itemNav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
