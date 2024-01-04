import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  onClick: () => void;
};
export const SidebarButton = ({ icon, label }: Props) => {
  return (
    <div className="flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/20">
      <div className="">{icon}</div>
      <div className="flex-1 truncate">{label}</div>
    </div>
  );
};
