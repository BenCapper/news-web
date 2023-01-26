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
import gwp from '../../assets/gwp.png'
import gript from '../../assets/gript.png'
import rte from '../../assets/rte.png'
import spiked from '../../assets/spiked.png'
import gbn from '../../assets/gbn.png'
import sky from '../../assets/sky.png'
import guard from '../../assets/guard.png'
import dmail from '../../assets/dmail.png'
import sceptic from '../../assets/sceptic.png'
import blaze from '../../assets/blaze.png'
import tim from '../../assets/tim.png'
import breit from '../../assets/breit.png'
import info from '../../assets/info.png'
import zero from '../../assets/zero.png'
import rev from '../../assets/rev.png'
import bong from '../../assets/bong.png'
import trend from '../../assets/trend.png'
import call from '../../assets/caller.png'
import think from '../../assets/amthink.png'
import pmill from '../../assets/pmill.png'
import euro from '../../assets/euro.png'
import abc from '../../assets/abc.png'
import cbs from '../../assets/cbs.png'
import npr from '../../assets/npr.png'
import vox from '../../assets/vox.png'
import pol from '../../assets/pol.png'
import hill from '../../assets/hill.png'
import yah from '../../assets/yah.png'
import beast from '../../assets/beast.png'
import huff from '../../assets/huff.png'
import glo from '../../assets/glo.png'
import _ from 'lodash';
import { ie, uk, us, ca, eu } from "../../db/collections";
import canicon from '../../assets/canicon.png'
import usicon from '../../assets/usicon.png'
import gbicon from '../../assets/gbicon.png'
import ieicon from '../../assets/ieicon.png'
import euicon from '../../assets/euicon.png'


  
const StyledCard = styled(Card)({
    maxWidth: 345,
    minHeight: '250px',
    backgroundColor: 'white',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, .15)',
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
  
  const StyledCaption = styled(Typography)({
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: 'bold',
    fontSize: '15px',
    color: 'black',
  });
  
  export default function Art({article}) {
    const [title, setTitle] = useState(article.title);
    const [region, setRegion] = useState('');
    const [icon, setIcon] = useState('')

    const outletToIcon = {
      "www.Gript.ie": gript,
      "www.RTE.ie": rte,
      "www.GBNews.uk": gbn,
      "news.Sky.com": sky,
      "www.Spiked-Online.com": spiked,
      "www.TheGuardian.com": guard,
      "www.DailyMail.co.uk": dmail,
      "www.DailySceptic.org": sceptic,
      "www.ThePostMillennial.com": pmill,
      "www.GlobalNews.ca": glo,
      "www.Euronews.com": euro,
      "www.TheBlaze.com": blaze,
      "www.Timcast.com": tim,
      "www.Revolver.news": rev,
      "www.BonginoReport.com": bong,
      "www.Zerohedge.com": zero,
      "www.Breitbart.com": breit,
      "www.DailyCaller.com": call,
      "www.InfoWars.com": info,
      "www.AmericanThinker.com": think,
      "www.TheDailyBeast.com": beast,
      "www.TheGatewayPundit.com": gwp,
      "TrendingPoliticsNews.com": trend,
      "www.Politico.com": pol,
      "www.CbsNews.com": cbs,
      "AbcNews.go.com": abc,
      "news.Yahoo.com": yah,
      "www.Vox.com": vox,
      "www.HuffPost.com": huff,
      "www.Npr.org": npr,
      "www.TheHill.com": hill
    };

    useEffect(() => {
        setTitle(deFormatTitle(title));
        setIcon(_.get(outletToIcon, article.outlet, null));
        if (ie.includes(article.outlet)) {
          setRegion(ieicon);
          } else if (uk.includes(article.outlet)) {
          setRegion(gbicon);
          } else if (ca.includes(article.outlet)) {
          setRegion(canicon);
          } else if (eu.includes(article.outlet)) {
          setRegion(euicon);
          } else if (us.includes(article.outlet)) {
          setRegion(usicon);
          }
      }); 


    return (
      <StyledCard>
        <StyledCardMedia
          image={article.storage_link}
          title={title}
        />
        <CardContent>
            <Grid container direction="column">
              <Grid item>
                <Grid container>
                  <Grid item>
                    <StyledAvatar src={icon} />
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
                <StyledCaption>{title}</StyledCaption>
              </Grid>
              <Grid item>
                <Typography variant="body2" align="left" sx={{ fontStyle: 'italic', mt: '1em' }}>
                  {article.outlet}
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="center" sx={{ marginTop: '1em' }}>
                <Grid item>
                  <CardMedia
                    image={region}
                    style={{ width: 20, height: 20 }}
                  /> 
                </Grid>
                <Grid item sx={{ marginLeft: '1em' }}>
                    <FileDownloadOutlinedIcon fontSize="small"/>
                </Grid>
                <Grid item sx={{ marginLeft: '1em' }}>
                  <ShareOutlinedIcon fontSize="small"/>
                </Grid>
            </Grid>
        </CardContent>
      </StyledCard>
    );
  }