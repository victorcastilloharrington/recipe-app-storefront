import { GenericRecipeProps } from "./recipe";
import { DialogProps } from "@mui/material";

export interface DesktopNavBarProps {
  handleIngredientsModal: () => void;
  handleTagsModal: () => void;
}

export interface MobileNavBarProps {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  anchorElNav: HTMLElement | null;
  handleIngredientsModal: () => void;
  handleTagsModal: () => void;
}

export interface CardComponentProps {
  id: number;
  title: string;
  tags?: [GenericRecipeProps];
  image?: string;
  enableButtons?: boolean;
  handleDeleteClick?: () => void;
  handleEditClick?: () => void;
}

export interface ModalComponentProps extends DialogProps {
  handleClose: () => void;
}

export interface SidebarProps {
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  anchorElUser: HTMLElement | null;
}