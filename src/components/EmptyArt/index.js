import React, { useState, useEffect, useContext } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Icon, styled } from "@mui/material";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import _ from 'lodash';
import { ExternalLink } from "react-external-link";
import "./art.css";
import { fall } from "../../icons/icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
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
  

  const StyledShareIcon = styled(ShareOutlinedIcon)`
  &:hover {
    color: #e8c034;
  }
  `;

  const StyledDownloadIcon = styled(FileDownloadOutlinedIcon)`
    &:hover {
      color: #e8c034;
    }
  `;

  export default function EmptyArt() {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
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