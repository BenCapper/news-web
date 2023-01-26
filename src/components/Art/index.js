import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Icon, styled } from "@mui/material";
import { deFormatTitle } from '../../util';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import _ from 'lodash';
import { ie, uk, us, ca, eu } from "../../db/collections";
import { iei, gbi, usi, cai, eui } from "../../db/icons";
import { icons } from "../../db/icons";
import { ExternalLink } from "react-external-link";
import "./art.css";

  
const StyledCard = styled(Card)({
    maxWidth: 345,
    minHeight: '250px',
    backgroundColor: 'white',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, .15)'
  });
  
  const StyledCardMedia = styled(CardMedia)({
    width: '345px',
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
  
  
  export default function Art({article}) {
    const [title, setTitle] = useState(article.title);
    const [outlet, setOutlet] = useState(article.outlet);
    const [region, setRegion] = useState('');
    const [icon, setIcon] = useState('')

    useEffect(() => {
        setTitle(deFormatTitle(title));
        setIcon(_.get(icons, outlet, null));
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
      }); 



    return (
      <StyledCard>
        <ExternalLink href={article.link}>
          <StyledCardMedia
            image={article.storage_link}
            title={title}
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
                          {article.date}
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
                <CardMedia
                    image={region}
                    sx={{ width: 20, height: 20 }}
                /> 
                </Grid>
                <Grid item sx={{ marginLeft: '1em' }}>
                  <ShareOutlinedIcon fontSize="small"/>
                    
                </Grid>
                <Grid item sx={{ marginLeft: '1em' }}>
                  <FileDownloadOutlinedIcon fontSize="small"/>
                </Grid>
            </Grid>
        </CardContent>
      </StyledCard>
    );
  }