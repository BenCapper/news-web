import React, { useState, useEffect } from "react";
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
import { ie, uk, us, ca, eu } from "../../db/collections";
import { right, left } from "../../db/collections";
import { iei, gbi, usi, cai, eui } from "../../db/icons";
import { icons } from "../../db/icons";
import { ExternalLink } from "react-external-link";
import "./art.css";
import { fall } from "../../db/icons";
import logo from '../../assets/360.png'
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

  
const StyledCard = styled(Card)({
    maxWidth: 300,
    minHeight: '250px',
    backgroundColor: 'white',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, .15)'
  });
  
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
  
  const StyledAvatar = styled(Avatar)({
    width: '30px',
    height: '30px',
    marginRight: '10px',
  });

  const StyledShareIcon = styled(ShareOutlinedIcon)`
  &:hover {
    color: orange;
  }
  `;

  const StyledDownloadIcon = styled(FileDownloadOutlinedIcon)`
    &:hover {
      color: orange;
    }
  `;

  
  export default function Art({article}) {
    const [title, setTitle] = useState(article.title);
    const [outlet, setOutlet] = useState(article.outlet);
    const [img, setImg] = useState(article.storage_link);
    const [date, setDate] = useState(article.date);
    const [color, setColor] = useState('white');
    const [region, setRegion] = useState('');
    const [icon, setIcon] = useState('')
    const [uid, setUid] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      const loggedIn = localStorage.getItem("user");
      if (loggedIn) {
        const foundUser = JSON.parse(loggedIn);
        setUid(foundUser.uid);
      }

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
      if (uid !== ''){
        const db = getDatabase();
        set(ref(db, 'user-likes/' + uid + '/' + article.title), {
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


    return (
      <StyledCard >
        <ExternalLink href={article.link}>
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
                  <ExternalLink href={article.link}>
                    <StyledAvatar src={icon} />
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
      </StyledCard>
    );
  }