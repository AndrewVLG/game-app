import { Checkbox as MUICheckbox, styled } from "@mui/material";

export const Checkbox = styled(MUICheckbox)(({theme}) => ({
    '&.Mui-checked': {
        color: theme.palette.red.main
    }
}))