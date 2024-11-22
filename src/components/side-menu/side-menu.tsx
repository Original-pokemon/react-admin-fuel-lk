import React from 'react';
import { MainMenu } from '../main-menu/main-menu';
import DataDrawer from '../layouts/data-layouts/data-drawer/data-drawer';
import Logo from '../logo/logo';

type SideMenuProps = {
  open: boolean;
  onClose: () => void;
  menu: any;
};

const SideMenu: React.FC<SideMenuProps> = ({ open, onClose, menu }) => {
  return (
    <DataDrawer
      direction='left'
      maxSize="sm"
      sx={{ width: 320 }}
      open={open}
      onClose={onClose}>
      <DataDrawer.Header title={<Logo />} onClose={onClose} />

      <DataDrawer.Body>
        <MainMenu menu={menu} onItemClick={onClose} />
      </DataDrawer.Body>
    </DataDrawer>
  );
};

export default SideMenu;
