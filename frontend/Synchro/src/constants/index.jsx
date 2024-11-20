import { LayoutDashboard, FolderOpen, Video, Goal } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

export const Navlinks = [
  { label: "Dashboard", href: "/home", icon: LayoutDashboard },
  {
    label: "Documents",
    href: "/documents",

    icon: (props) => (
      <FontAwesomeIcon icon={faFolderOpen} size="xl" {...props} />
    ),
  },
  {
    label: "Images",
    href: "/images",
    icon: (props) => <FontAwesomeIcon icon={faImage} size="xl" {...props} />,
  },
  { label: "Media", href: "/media", icon: Video },
  { label: "Others", href: "/others", icon: Goal },
];
