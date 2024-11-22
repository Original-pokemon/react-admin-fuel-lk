import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

type DrawerHeaderProps = {
  title?: React.ReactNode;
  hideCloseButton?: boolean;
  onClose: () => void;
  headerActions?: React.ReactNode;
};

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ title, hideCloseButton, onClose, headerActions }) => (
  <Box
    sx={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: 2,
      bgcolor: 'background.paper',
      borderBottom: '1px solid',
      borderColor: 'divider',
    }}
  >
    {title && (
      <Typography variant="h6" component="div">
        {title}
      </Typography>
    )}
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {headerActions}
      {!hideCloseButton && (
        <IconButton aria-label="close" onClick={onClose} edge="end">
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  </Box>
);

export type DrawerHeaderType = ReturnType<typeof DrawerHeader>;

export default DrawerHeader