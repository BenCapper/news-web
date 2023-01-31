const theme = {
    colors: {
      primary: "#E8C034",
      secondary: "#7FDBFF",
      tertiary: "#39CCCC"
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
    }
  };
  
export default theme;