import React, { forwardRef, useState } from "react";
import "./article.css";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { ExternalLink } from 'react-external-link';
import { deFormatTitle } from "../../util";

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
  const [title, setTitle] = useState(deFormatTitle(article.title));



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
          <ExternalLink href={article.link}>
            <ButtonBase sx={{ width: 250, height: 158 }}>
              <Img alt="" color="orange" src={article.storage_link}/>
            </ButtonBase>
          </ExternalLink>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>

                <Typography gutterBottom variant="subtitle1" sx={{cursor: 'pointer', fontWeight: 750, fontFamily: "Segoe UI"}} component="div">
                  <ExternalLink href={article.link}>
                  <span>{deFormatTitle(title)}</span>
                  </ExternalLink>
                </Typography>
                <Typography variant="body2" sx={{cursor: 'pointer', fontWeight: 700, fontFamily: 'Segoe UI', fontSize: '12px'}} color="text.secondary">
                 <br/>
                 <ExternalLink href={article.link}>
                  <span className="outlet">{article.outlet}</span>
                </ExternalLink>
                 <br/>
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Grid container>
                <Grid item >
                <ShareOutlinedIcon className="options" sx={{cursor: 'pointer', pr: '2em'}} onClick={() => shareClick()}/>
                </Grid>
                <Grid item >
                <FileDownloadOutlinedIcon className="options" sx={{cursor: 'pointer'}} onClick={() => saveClick()}/>
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