import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material";
import { ExternalLink } from "react-external-link";
import "./art.css";
import { fall } from "../../icons/icons";
import ThemeContext from "../../contexts/themeContext";

  
  
  const StyledCardMedia = styled(CardMedia)({
    width: '300px',
    height: '175px',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'fill',
    },
  });
  

  export default function EmptyArt() {
    const theme = useContext(ThemeContext);
    const link = "https://github.com/BenCapper/news-web"


    const articleClick = () => {
        
      }

    return (
      <>
      <Card sx={theme.card}>
        <ExternalLink style={theme.cardmedia} onClick={() => articleClick()} href={link} >
          <StyledCardMedia
            image={fall}
            title={"No Results"}
          />
        </ExternalLink>
        <CardContent>
            <Grid container direction="column">
              <Grid item sx={{mt:'1em'}}>
              <ExternalLink onClick={() => articleClick()} href={link}>
              <Typography variant="body2" align="left" sx={{color: theme.colors.card,fontFamily: '"Open Sans", sans-serif', fontWeight: 'bold', fontSize: '15px','&:hover': {cursor: 'pointer',color: theme.colors.primary} }}>
                {"No Results"}
              </Typography>
              </ExternalLink>
              </Grid>
            </Grid>
        </CardContent>
      </Card>
      </>
    );
  }