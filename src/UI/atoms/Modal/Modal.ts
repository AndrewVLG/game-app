import { Dialog, styled } from "@mui/material";

export const Modal = styled(Dialog)(({theme}) => ({
    '& .MuiDialog-paper': {
        border: `2px solid ${theme.palette.red.main}`   
    }

}))