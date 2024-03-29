import React, { useState, useEffect, useContext } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material";
import { deFormatTitle, formatDate, getDate } from '../../util';
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
import { AuthContext } from "../../contexts/authContext";
import ThemeContext from "../../contexts/themeContext";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
  
  
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

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  export default function BothArt({article, on}) {
    const context = useContext(AuthContext);
    const [title, setTitle] = useState(article.title1);
    const [title2, setTitle2] = useState(article.title2);
    const [outlet] = useState(article.outlet1);
    const [outlet2] = useState(article.outlet2);
    const [img, setImg] = useState(article.storage_link1);
    const [img2] = useState(article.storage_link2);
    const [date, setDate] = useState(article.date1);
    const [date2, setDate2] = useState(article.date2);
    const [color, setColor] = useState('white');
    const [color2, setColor2] = useState('white');
    const [region, setRegion] = useState('');
    const [region2, setRegion2] = useState('');
    const [icon, setIcon] = useState('')
    const [icon2, setIcon2] = useState('')
    const theme = useContext(ThemeContext);
    const [open, setOpen] = React.useState(false);
    const [openSave, setOpenSave] = React.useState(false);
    const [openSaveConfirm, setOpenSaveConfirm] = React.useState(false);
    let today = getDate(0)
    today = formatDate(today)
    
    

    useEffect(() => {

      if (article.title !== 'No Results'){
        setTitle(deFormatTitle(title));
        setTitle2(deFormatTitle(title2));
        setIcon(_.get(icons, outlet, null));
        setIcon2(_.get(icons, outlet2, null));
        setDate(formatDate(date));
        setDate2(formatDate(date2));
        setImg(img.replace(/"/g, "%22"));
        if (right.includes(outlet)) {
          setColor('217, 11, 11');
        }
        else if (left.includes(outlet)) {
          setColor('5, 61, 230');
        }
        if (right.includes(outlet2)) {
          setColor2('217, 11, 11');
        }
        else if (left.includes(outlet2)) {
          setColor2('5, 61, 230');
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
        if (ie.includes(outlet2)) {
          setRegion2(iei);
          } else if (uk.includes(outlet2)) {
          setRegion2(gbi);
          } else if (ca.includes(outlet2)) {
          setRegion2(cai);
          } else if (eu.includes(outlet2)) {
          setRegion2(eui);
          } else if (us.includes(outlet2)) {
          setRegion2(usi);
          }
        }
      else{
        setIcon(logo);
        setRegion(iei);
      }
      },[article.title, title, outlet, img, outlet2, title2]); 
    
    const shareClick = () => {
      navigator.clipboard.writeText(article.link1);
      if (openSave) setOpenSave(false);
      if (openSaveConfirm) setOpenSaveConfirm(false);
      setOpen(true);
    }

    const share2Click = () => {
        navigator.clipboard.writeText(article.link2);
        if (openSave) setOpenSave(false);
        if (openSaveConfirm) setOpenSaveConfirm(false);
        setOpen(true);
      }

    const saveClick = () => {
      if (context.user !== ''){
        const db = getDatabase();
        set(ref(db, 'user-likes/' + context.user.uid + '/' + article.title1), {
          date: article.date1,
          link: article.link1,
          order: article.order,
          outlet: article.outlet1,
          storage_link: article.storage_link1,
          title: article.title1
        });
        if (open) setOpen(false);
        if (openSave) setOpenSave(false);
        setOpenSaveConfirm(true);
      }
      else {
        if (open) setOpen(false);
        if (openSaveConfirm) setOpenSaveConfirm(false);
        setOpenSave(true);
      }
    }

    const save2Click = () => {
        if (context.user !== ''){
          const db = getDatabase();
          set(ref(db, 'user-likes/' + context.user.uid + '/' + article.title2), {
            date: article.date2,
            link: article.link2,
            order: article.order,
            outlet: article.outlet2,
            storage_link: article.storage_link2,
            title: article.title2
          });
          if (open) setOpen(false);
          if (openSave) setOpenSave(false);
          setOpenSaveConfirm(true);
        }
        else {
          if (open) setOpen(false);
          if (openSaveConfirm) setOpenSaveConfirm(false);
          setOpenSave(true);
        }
      }

    const articleClick = () => {
      if (context.user !== ''){
        const db = getDatabase();
        set(ref(db, 'user-history/' + context.user.uid + '/' + article.title1), {
          date: article.date1,
          link: article.link1,
          order: article.order,
          outlet: article.outlet1,
          storage_link: article.storage_link1,
          title: article.title1
        });
      }
    }

    const article2Click = () => {
        if (context.user !== ''){
          const db = getDatabase();
          set(ref(db, 'user-history/' + context.user.uid + '/' + article.title2), {
            date: article.date2,
            link: article.link2,
            order: article.order,
            outlet: article.outlet2,
            storage_link: article.storage_link2,
            title: article.title2
          });
        }
      }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const handleCloseSave = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenSave(false);
    };

    const handleCloseSaveConfirm = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenSaveConfirm(false);
    };


    return (
      <>
    {!on ? (
      <>
    <Card variant="outlined" sx={{mt: '1em', ml: '1em'}} style={theme.layer}>
        <Grid container direction="column">
      <Card sx={theme.card}>
        <ExternalLink style={theme.cardmedia} onClick={() => articleClick()} href={article.link1} >
          <StyledCardMedia
            image={img ? img : fall}
            title={title}
            sx={{borderBottom: `1px dashed rgb(${color},.5)`}}
          />
        </ExternalLink>
        <CardContent>
            <Grid container direction="row">
              <Grid item>
                <Grid container>
                  <Grid item>
                  <ExternalLink onClick={() => articleClick()} href={article.link1}>
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
              <ExternalLink onClick={() => articleClick()} href={article.link1}>
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
      <Card sx={theme.card}>
      <ExternalLink style={theme.cardmedia} onClick={() => article2Click()} href={article.link2} >
          <StyledCardMedia
            image={img2 ? img2 : fall}
            title={title2}
            sx={{borderBottom: `1px dashed rgb(${color2},.5)`}}
          />
        </ExternalLink>
        <CardContent>
            <Grid container direction="column">
              <Grid item>
                <Grid container>
                  <Grid item>
                  <ExternalLink onClick={() => article2Click()} href={article.link2}>
                    <Avatar src={icon2} sx={theme.avatar}/>
                  </ExternalLink>
                  </Grid>
                  <Grid item>
                    <div sx={{ display: 'flex', alignItems: 'center'}}>
                        <Typography variant="body2" align="center" sx={{ fontStyle: 'italic', ml: '1em', mt: '.5em' }}>
                          {date2}
                        </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{mt:'1em'}}>
              <ExternalLink onClick={() => article2Click()} href={article.link2}>
              <Typography variant="body2" align="left" sx={{color: theme.colors.card,fontFamily: '"Open Sans", sans-serif', fontWeight: 'bold', fontSize: '15px','&:hover': {cursor: 'pointer',color: theme.colors.primary} }}>
                {title2}
              </Typography>
              </ExternalLink>
              </Grid>
              <Grid item>
                <ExternalLink href={"//" + outlet2}>
                <Typography variant="body2" align="left" sx={{color: theme.colors.card, fontStyle: 'italic', mt: '1em','&:hover': {cursor: 'pointer',color: theme.colors.primary}}}>
                  {outlet2}
                </Typography>
                </ExternalLink>
                
              </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="center" sx={{ marginTop: '1em' }}>
                <Grid item>
                <img src={region2} width="20" height="20" alt="icon" />
                </Grid>
                <Grid item sx={{cursor: 'pointer', marginLeft: '1em' }}>
                  <StyledShareIcon fontSize="small"  onClick={() => share2Click()}/>
                </Grid>
                <Grid item sx={{cursor: 'pointer', marginLeft: '1em' }}>
                  <StyledDownloadIcon fontSize="medium" onClick={() => save2Click()}/>
                </Grid>
            </Grid>
        </CardContent>
      </Card>
      </Grid>
      </Card>
      </>
      ) : 
      <>
            <Card sx={theme.card}>
        <ExternalLink style={theme.cardmedia} onClick={() => articleClick()} href={article.link1} >
          <StyledCardMedia
            image={img ? img : fall}
            title={title}
            sx={{borderBottom: `1px dashed rgb(${color},.5)`}}
          />
        </ExternalLink>
        <CardContent>
            <Grid container direction="row">
              <Grid item>
                <Grid container>
                  <Grid item>
                  <ExternalLink onClick={() => articleClick()} href={article.link1}>
                    <Avatar src={icon} sx={theme.avatar}/>
                  </ExternalLink>
                  </Grid>
                  <Grid item>
                    <div sx={{ display: 'flex', alignItems: 'center'}}>
                        <Typography variant="body2" align="center" sx={{ fontStyle: 'italic', ml: '1em', mt: '.5em' }}>
                          {today}
                        </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{mt:'1em', mr: '5em'}}>
              <ExternalLink onClick={() => articleClick()} href={article.link1}>
              <Typography variant="body2" align="left" sx={{color: theme.colors.card,fontFamily: '"Open Sans", sans-serif', fontWeight: 'bold', fontSize: '15px','&:hover': {cursor: 'pointer',color: theme.colors.primary} }}>
                {'No Results'}
              </Typography>
              </ExternalLink>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="center" sx={{ marginTop: '1em' }}>
                <Grid item>
                <img src={region} width="20" height="20" alt="icon" />
                </Grid>

            </Grid>
        </CardContent>
      </Card>
      </>
      }
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" style={{backgroundColor: theme.colors.snackbg, color: theme.colors.snack}} sx={{ width: '100%' }}>
        Link copied to clipboard
      </Alert>
      </Snackbar>
      <Snackbar open={openSave} autoHideDuration={4000} onClose={handleCloseSave}>
      <Alert onClose={handleCloseSave} severity="error" style={{backgroundColor: theme.colors.snackbg, color: theme.colors.snack}} sx={{ width: '100%' }}>
        Log in to Save Articles
      </Alert>
      </Snackbar>
      <Snackbar open={openSaveConfirm} autoHideDuration={4000} onClose={handleCloseSaveConfirm}>
      <Alert onClose={handleCloseSaveConfirm} severity="success" style={{backgroundColor: theme.colors.snackbg, color: theme.colors.snack}} sx={{ width: '100%' }}>
        Article Saved Successfully
      </Alert>
      </Snackbar>
      </>
    );
  }