import React from 'react';
import {styled} from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#6AD174',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#6AD174',
    },
    /*'& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#6AD174',
        },*/
    '&:hover fieldset': {
        borderColor: '#6AD174',
    },
    '&.Mui-focused fieldset': {
        borderColor: '#6AD174',
    },

});
