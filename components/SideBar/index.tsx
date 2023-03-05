import { useRouter } from "next/router";
import React from "react";
import { sidebarRoutes } from "../../constants";

interface SidebarItemsProps {
  active: boolean;
  title: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element | any;
}

const SidebarItem: React.FC<SidebarItemsProps> = ({
  active,
  icon: Icon,
  title,
}) => {
  const activeItem = active ? "active" : "";

  return (
    <div className='sidebar__item'>
      <div
        className={`sidebar__item-inner items-center flex cursor-pointer ${activeItem}`}
      >
        <Icon className='h-8 w-8' />
        <span className='font-bold text-lg '>{title}</span>
      </div>
    </div>
  );
};

const SideBar: React.FC = () => {
  const router = useRouter();

  const activeItem = sidebarRoutes.findIndex(
    (item) => item.route === router.pathname
  );
  return (
    <div className='sidebar'>
      <div
        className='sidebar__logo visible cursor-pointer'
        onClick={() => router.push("/")}
      >
        <img
          src='https://media.loveitopcdn.com/3807/logo-amazon-1.png'
          alt='Logo'
        />
      </div>
      {sidebarRoutes.map((item, index) => {
        return (
          <div onClick={() => router.push(item.route)} key={index}>
            <SidebarItem
              title={item.display_name}
              icon={item.icon}
              active={index === activeItem}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
