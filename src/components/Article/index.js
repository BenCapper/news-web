import React, { forwardRef } from "react";
import "./article.css";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    border: '2px solid #DEDEDE',
  });


const Article = forwardRef(({ article }, ref) => {

  const linkClick = () => {
    window.open('//' + article.link, '_blank', 'noreferrer');
  };

  const saveClick = () => {
    //Save article to user faves
    console.log('Saving');
  };

  const shareClick = () => {
    //Copy link to clipboard
    console.log('Sharing');
  };

    return (
        <>
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          boxShadow: 'none',
          maxWidth: '90%',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#F6F6F6',
        }}
      >
        <Grid container spacing={5}>
          <Grid item>
            <ButtonBase sx={{ width: 250, height: 158 }}>
              <Img alt="" src={article.storage_link}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" sx={{fontStyle: 'italic', fontFamily: 'Segoe UI'}} gutterBottom>
                  {article.date}
                </Typography>
                <br/>
                <Typography gutterBottom variant="subtitle1" sx={{cursor: 'pointer', fontWeight: 750, fontFamily: "Segoe UI"}} component="div" onClick={() => linkClick()}>
                  {article.title}
                </Typography>
                <Typography variant="body2" sx={{fontWeight: 700, fontFamily: 'Segoe UI', fontSize: '12px'}} color="text.secondary">
                 <br/> {article.outlet}<br/>
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Grid container spacing={6}>
                <Grid item sx={{cursor: 'pointer'}} onClick={() => shareClick()}>
                <ShareOutlinedIcon/>
                </Grid>
                <Grid item sx={{cursor: 'pointer'}} onClick={() => saveClick()}>
                <FileDownloadOutlinedIcon/>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Paper><br/><br/>
      </>
    );
}
);
export default Article;