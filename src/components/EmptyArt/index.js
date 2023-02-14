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
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
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

  
  
  export default function EmptyArt({article, forceRerender}) {
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
    const db = getDatabase();
    const likeref = ref(db, 'user-likes/' + context.user.uid + '/' + article.title);


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
    


    return (
      <>
      <Card sx={theme.card}>
        <CardContent>
            <Grid container direction="column">
              <Grid item>
                <Grid container>
                  <Grid item>
                  <ExternalLink href={article.link}>
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
              <ExternalLink href={article.link}>
              <Typography variant="body2" align="left" sx={{color: theme.colors.card,fontFamily: '"Open Sans", sans-serif', fontWeight: 'bold', fontSize: '15px','&:hover': {cursor: 'pointer',color: theme.colors.primary} }}>
                {title}
              </Typography>
              </ExternalLink>
              </Grid>
              <Grid item>
                <ExternalLink href={"//" + outlet}>
                <Typography variant="body2" align="left" sx={{color: theme.colors.card, fontStyle: 'italic', mt: '1em','&:hover': {cursor: 'pointer',color: theme.colors.primary}}}>
                  {outlet}
                </Typography>
                </ExternalLink>
                
              </Grid>
            </Grid>
        </CardContent>
      </Card>
      </>
    );
  }