import { Box, Grid, Typography } from "@mui/material";
import { InfoStyledBox } from "./info-box.style";
import { Fragment } from "react";

type InfoItem = Record<string, string | number | JSX.Element>

type InfoBoxProperties = {
  title: string;
  data: InfoItem[];
};

const InfoBox = ({ title, data }: InfoBoxProperties) => {
  return (
    <InfoStyledBox >
      <Typography variant="h5" component="h1">
        {title}
      </Typography>
      <Box className="list">
        {data.map((item, index) => (
          <Box className="listItem" key={index}>
            {Object.entries(item).map(([key, value]) => (
              <Fragment key={key}>
                <Typography className="name">{key}</Typography>
                <Typography className="value">{value}</Typography>
              </Fragment>
            ))}
          </Box>
        ))}
      </Box>
    </InfoStyledBox>
  );
};

export default InfoBox;
