import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import gwp from '../../assets/gwp.png'
import { deFormatTitle } from '../../util';


export default function MediaCard({article}) {
    const [title, setTitle] = useState(article.title);

    useEffect(() => {
        setTitle(deFormatTitle(title));
      });

  return (
    <>
    <Card sx={{ maxWidth: 345, borderTop: '1px solid orange', borderLeft: '1px solid orange', boxShadow: '1px 1px 1px orange'}}>
      <CardHeader
        avatar={
          <Avatar src={gwp} sx={{ width: 24, height: 24 }} aria-label="recipe">
            
          </Avatar>
        }
        title={article.outlet}
        subheader={article.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={article.storage_link}
        alt="Paella dish"
        sx={{borderTop: '1px solid orange', borderBottom: '1px solid orange',}}
      />
      <CardContent>
        <Typography variant="h6" color="black">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card><br/>
    </>
  );
}