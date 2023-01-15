import React, { forwardRef } from "react";
import "./article.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    border: '1px solid #000',
  });


const Article = forwardRef(({ article }, ref) => {
    return (
        <>
        <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 'auto',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={5}>
          <Grid item>
            <ButtonBase sx={{ width: 256, height: 158 }}>
              <Img alt="complex" src={article.storage_link}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {article.title}
                </Typography><br/>
                <Typography variant="body2" gutterBottom>
                  {article.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.outlet}
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Grid xs={12} container spacing={10}>
                <Grid item>
                <HomeOutlinedIcon/>
                </Grid>
                <Grid item>
                <HomeOutlinedIcon/>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Paper>
      </>




    );
}
);
export default Article;