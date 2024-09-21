import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Button from "@/common/components/Button";

const DropdownButton = () => {
  return (
    <div className="dropdown  dropdown-hover  group relative inline-block">
      {/* Buton */}
      <Button
        variant="neutral-outline"
        tabIndex={0}
        className="flex items-center  group-hover:text-primary transition-colors duration-200"
      >
        <FontAwesomeIcon icon={faUser} className="text-md mr-1" />
        <span className="whitespace-nowrap">Giriş Yap</span>
      </Button>

      {/* Dropdown Menü */}
      <ul className="dropdown-content border-2 bg-white z-[100] menu shadow rounded-box w-44 absolute top-full right-0">
        <li className="mx-auto">
          <Link href="/login" passHref>
            <Button
              variant="primary"
              className="w-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <span>Giriş Yap</span>
            </Button>
          </Link>
        </li>
        <li className="mx-auto">
          <Link href="/register" passHref>
            <Button
              variant="neutral-outline"
              className="w-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <span>Üye Ol</span>
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownButton;
