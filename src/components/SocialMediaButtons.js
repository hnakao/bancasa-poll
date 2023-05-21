import { makeStyles } from "@mui/styles";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const SocialMediaButtons = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FacebookShareButton url={props.url} quote={props.text}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={props.url} title={props.text}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={props.url} title={props.text}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialMediaButtons;
