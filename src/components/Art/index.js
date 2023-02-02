import React, { useState, useEffect, useContext } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Icon, styled } from "@mui/material";
import { deFormatTitle, formatDate } from '../../util';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import _ from 'lodash';
import { ie, uk, us, ca, eu } from "../../icons/collections";
import { right, left } from "../../icons/collections";
import { iei, gbi, usi, cai, eui } from "../../icons/icons";
import { icons } from "../../icons/icons";
import { ExternalLink } from "react-external-link";
import "./art.css";
import { fall } from "../../icons/icons";
import logo from '../../assets/360.png'
import { getDatabase, ref, set } from "firebase/database";
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

  
  export default function Art({article}) {
    const context = useContext(AuthContext);
    const [title, setTitle] = useState(article.title);
    const [outlet, setOutlet] = useState(article.outlet);
    const [img, setImg] = useState(article.storage_link);
    const [date, setDate] = useState(article.date);
    const [color, setColor] = useState('white');
    const [region, setRegion] = useState('');
    const [icon, setIcon] = useState('')
    const navigate = useNavigate();
    const theme = useContext(ThemeContext);

    useEffect(() => {

      if (article.title !== 'No Results'){
        setTitle(deFormatTitle(title));
        setIcon(_.get(icons, outlet, null));
        setDate(formatDate(article.date))
        setImg(img.replace(/"/g, "%22"));
        if (right.includes(article.outlet)) {
          setColor('217, 11, 11');
        }
        else if (left.includes(article.outlet)) {
          setColor('5, 61, 230');
        }
        if (ie.includes(outlet)) {
          setRegion(iei);
          } else if (uk.includes(outlet)) {
          setRegion(gbi);
          } else if (ca.includes(outlet)) {
          setRegion(cai);
          } else if (eu.includes(outlet)) {
          setRegion(eui);
          } else if (us.includes(outlet)) {
          setRegion(usi);
          }
        }
      else{
        setIcon(logo);
        setRegion(iei);
      }
      },[article.title, article.date, article.outlet, title, outlet, img]); 
    
    const shareClick = () => {

      console.log("Share")
    }

    const saveClick = () => {
      if (context.user !== ''){
        const db = getDatabase();
        set(ref(db, 'user-likes/' + context.user.uid + '/' + article.title), {
          date: article.date,
          link: article.link,
          order: article.order,
          outlet: article.outlet,
          storage_link: article.storage_link,
          title: article.title
        });
        console.log("Save")
      }
      else {
        navigate("/login");
        console.log("Wont Save")
      }
    }

    const articleClick = () => {
      if (context.user !== ''){
        const db = getDatabase();
        set(ref(db, 'user-history/' + context.user.uid + '/' + article.title), {
          date: article.date,
          link: article.link,
          order: article.order,
          outlet: article.outlet,
          storage_link: article.storage_link,
          title: article.title
        });
      }
      else {
        console.log("Wont Save View History")
      }
    }


    return (
      <Card sx={theme.card}>
        <ExternalLink onClick={() => articleClick()} href={article.link} >
          <StyledCardMedia
            image={img ? img : fall}
            title={title}
            sx={{borderBottom: `1px dashed rgb(${color},.5)`}}
          />
        </ExternalLink>
        <CardContent>
            <Grid container direction="column">
              <Grid item>
                <Grid container>
                  <Grid item>
                  <ExternalLink onClick={() => articleClick()} href={article.link}>
                    <Avatar src={icon} sx={theme.avatar}/>
                  </ExternalLink>
                  </Grid>
                  <Grid item>
                    <div sx={{ display: 'flex', alignItems: 'center'}}>
                        <Typography variant="body2" align="center" sx={{ fontStyle: 'italic', ml: '1em', mt: '.5em' }}>
                          {date}
                        </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{mt:'1em'}}>
              <ExternalLink onClick={() => articleClick()} href={article.link}>
              <Typography variant="body2" align="left" sx={{fontFamily: '"Open Sans", sans-serif', fontWeight: 'bold', fontSize: '15px' }}>
                {title}
              </Typography>
              </ExternalLink>
              </Grid>
              <Grid item>
                <Typography variant="body2" align="left" sx={{ fontStyle: 'italic', mt: '1em'}}>
                <ExternalLink href={"//" + outlet}>
                  {outlet}
                </ExternalLink>
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="center" sx={{ marginTop: '1em' }}>
                <Grid item>
                <img src={region} width="20" height="20" alt="icon" />
                </Grid>
                <Grid item sx={{cursor: 'pointer', marginLeft: '1em' }}>
                  <StyledShareIcon fontSize="small"  onClick={() => shareClick()}/>
                </Grid>
                <Grid item sx={{cursor: 'pointer', marginLeft: '1em' }}>
                  <StyledDownloadIcon fontSize="medium" onClick={() => saveClick()}/>
                </Grid>
            </Grid>
        </CardContent>
      </Card>
    );
  }