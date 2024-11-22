import { Box } from "@mui/material";

type DrawerActionsProps = {
  children: React.ReactNode;
};

const DrawerActions: React.FC<DrawerActionsProps> = ({ children }) => (
  <Box
    sx={{
      p: 2,
      borderTop: '1px solid',
      borderColor: 'divider',
    }}
  >
    {children}
  </Box>
);

export type DrawerActionsType = ReturnType<typeof DrawerActions>;
export default DrawerActions