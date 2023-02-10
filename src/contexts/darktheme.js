import { menuClasses } from 'react-pro-sidebar';
import { inputLabelClasses } from "@mui/material/InputLabel";

const darktheme = {
    colors: {
      primary: "#E8C034",
      secondary: "#7FDBFF",
      tertiary: "#39CCCC",
      white: "#14171A",
      card: '#B0BEC5',
      hover: 'rgb(232, 192, 52, 1)'
    },
    bgIcon: {
        icon: '#e8c034',
    },
    header: {
        backgroundColor: '#14171A',
        color: '#e8c034',
    },
    infinite: {
        backgroundColor: '#1A2D3B',
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
            backgroundColor: '#FFF',
            color: '#000',
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
          color: '#e8c034',
          marginTop: 2,
          marginBottom: -2
        },
        outlinedInput: {
          "&.MuiOutlinedInput-root": {
            backgroundColor: '#FFF',
            color: '#000',
            borderColor: "#e8c034",
            "&.Mui-focused fieldset": {
              borderColor: "#e8c034",
            },
            "&:hover fieldset": {
              borderColor: "#e8c034",
            },
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
            color: 'rgb(232, 192, 52, .60)',
            [`&.${menuClasses.active}`]: {
              backgroundColor: '#14171A',
              color: 'rgb(232, 192, 52, 1)',
              fontWeight: 600,
            },
            [`&.${menuClasses.disabled}`]: {
              color: '#f1c735',
            },
            '&:hover': {
              backgroundColor: '#14171A',
              color: 'rgb(232, 192, 52, 1)',
            },
          },
        label: ({ open }) => ({
            fontWeight: 600,
          }),
    },
    InputLabelProps: {
      sx: {
        color: "#e8c034",
        fontWeight: 450,
        [`&.${inputLabelClasses.shrink}`]: {
          color: "#e8c034",
          fontWeight: 600
        }
      }
    },
    Filter: {
        '& .MuiOutlinedInput-input': {
            color: '#e8c034',
          },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#773601',
      },
      '&:hover fieldset': {
        borderColor: '#ed6c02',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#773601',
        label: 'orange',
      },
    },
  },
  right: {
    color: "#e8c034",
  },
  buttonGroup: {
    color: '#e8c034',
    sx: {
        ml: '1em', 
        height: '2.5em',
        backgroundColor: "#14171A"
    }
  },
  card: {
    maxWidth: 300,
    minHeight: '250px',
    backgroundColor: '#14171A',
    color: '#B0BEC5',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, .15)'
  },
  cardmedia: {
    backgroundColor: '#ededed',
  },
  avatar: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
};
  
export default darktheme;