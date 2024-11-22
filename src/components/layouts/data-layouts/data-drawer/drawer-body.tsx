import { Box } from "@mui/material";

type DrawerBodyProps = {
  children: React.ReactNode;
};

const DrawerBody: React.FC<DrawerBodyProps> = ({ children }) => (
  <Box sx={{ p: 2, overflowY: 'auto', flexGrow: 1 }}>
    {children}
  </Box>
);

export type DrawerBodyType = ReturnType<typeof DrawerBody>

export default DrawerBody