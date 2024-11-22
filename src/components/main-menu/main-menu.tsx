import { menuStyle } from "./menu.style";
import { AppRouteType } from "#root/types";
import { List, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

type MenuItemType = {
  id: number,
  title: string,
  url: AppRouteType,
  icon: React.JSX.Element
}

type MenuType = {
  id: number,
  title: string,
  listItems: MenuItemType[]
}[]

type MenuProps = {
  menu: MenuType;
}

const MainMenu = ({ menu }: MenuProps) => {

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;

    target.classList.toggle('active');
  }

  return (
    <List css={menuStyle}>
      {menu.map((item) => (
        <ListItem className="item" key={item.id} alignItems="flex-start" disablePadding>
          <ListItemText className="title">{item.title}</ListItemText>

          <List className="list">
            {item.listItems.map((listItem) => (
              <ListItem
                component={NavLink}
                to={listItem.url}
                key={listItem.id}
                className='listItem'
                // className={({ isActive }) => isActive ? "listItem active" : "listItem"}
                onClick={handleClick}>
                {listItem.icon}
                <ListItemText className="listItemTitle">{listItem.title}</ListItemText >
              </ListItem>
            ))}
          </List>
        </ListItem >
      ))}
    </List >
  );
};

export { MainMenu };
