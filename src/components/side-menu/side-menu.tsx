import MainMenu, { MenuType } from '../main-menu/main-menu';
import DataDrawer from '../layouts/data-layouts/data-drawer/data-drawer';
import Logo from '../logo/logo';

type SideMenuPropertiesType = {
  open: boolean;
  onClose: () => void;
  menu: MenuType;
};

function SideMenu({ open, onClose, menu }: SideMenuPropertiesType) {
  return (
    <DataDrawer
      direction="left"
      maxSize="sm"
      sx={{ width: 320 }}
      open={open}
      onClose={onClose}
    >
      <DataDrawer.Header title={<Logo />} onClose={onClose} />

      <DataDrawer.Body>
        <MainMenu menu={menu} />
      </DataDrawer.Body>
    </DataDrawer>
  );
}

export default SideMenu;
