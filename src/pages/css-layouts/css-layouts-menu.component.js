import CollapsibleList from "../../common/collapsible-list";
import cssLayoutsMenuItems from "./css-layouts-menu";

export default function CssLayoutsMenu(props) {
  const menuItems = cssLayoutsMenuItems.map((menuItem, index) => (
    <li key={menuItem.title}>
      <CollapsibleList
        title={menuItem.title}
        items={menuItem.items}
        onItemClick={props.onItemClick}
      />
    </li>
  ));

  return (
    <ul>
      {menuItems}
    </ul>
  );
}
