import { menuClasses } from 'react-pro-sidebar';
import { inputLabelClasses } from "@mui/material/InputLabel";

const theme = {
    colors: {
      primary: "#E8C034",
      secondary: "#7FDBFF",
      tertiary: "#39CCCC",
      white: "#FFFFFF",
      card: '#000000'
    },
    header: {
      backgroundColor: '#FFFFFF',
      opacity: .94,
    },
    bgIcon: {
      icon: '#000',
    },
    infinite: {
      backgroundColor: '#E6E6E6',
    },
    styles: {
        root: {
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        form: {
          width: "100%",
          "& > * ": {
            marginTop: 2,
          },
        },
        textField: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: 'grey',
            },
            "&:hover fieldset": {
              borderColor: '#e8c034',
            },
            "&.Mui-focused fieldset": {
              borderColor: '#e8c034',
            },
          },
          "& .MuiInputLabel-outlined": {
            color: '#e8c034',
            "&.Mui-focused": {
              color: '#e8c034',
            },
          },
        },
        title: {
          textAlign: 'center',
        },
        err: {
          textAlign: 'center',
          color: 'gray',
          marginTop: 2,
          marginBottom: -2
        },
        outlinedInput: {
          "&.MuiOutlinedInput-root": {
            borderColor: "#e8c034",
            "&.Mui-focused fieldset": {
              borderColor: "#e8c034",
            },
            "&:hover fieldset": {
              borderColor: "#e8c034",
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "#e8c034",
          },
        },
    },
    menuItemStyles: {
        root: {
          fontSize: '15px',
          fontWeight: 400,
        },
        SubMenuExpandIcon: {
          color: '#f1c735',
        },
        subMenuContent: {
          backgroundColor: '#fff',
        },
        button: {
            [`&.${menuClasses.active}`]: {
              backgroundColor: '#fff',
              color: '#e8c034',
              fontWeight: 600,
            },
            [`&.${menuClasses.disabled}`]: {
              color: '#f1c735',
            },
            '&:hover': {
              backgroundColor: '#FFFFFF',
              color: '#e8c034',
            },
          },
        label: ({ open }) => ({
            fontWeight: 600,
          }),
    },
    InputLabelProps: {
      sx: {
        color: "black",
        fontWeight: 450,
        [`&.${inputLabelClasses.shrink}`]: {
          color: "black",
          fontWeight: 600
        }
      }
    },
    Filter: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'orange',
      },
      '&:hover fieldset': {
        borderColor: '#fcc24c',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'orange',
        label: 'orange'
      },
    },
  },
  right: {
    color: "#000",
  },
  buttonGroup: {
    color: '#e8c034',
    sx: {
        ml: '1em', 
        height: '2.5em',
        backgroundColor: "#FFFFFF"
    }
  },
  card: {
    maxWidth: 300,
    minHeight: '250px',
    backgroundColor: 'white',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, .15)'
  },
  cardmedia: {
    backgroundColor: '#fff',
  },
  avatar: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
};
  
export default theme;