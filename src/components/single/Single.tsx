import { useSelector } from "react-redux";
import { GridColDef } from "@mui/x-data-grid";
import { ReactElement } from "react";
import { DataTable } from "../layouts/data-layouts/data-table/data-table";
import generateRandomTransaction from "../../mock/card-transaction";
import { singleStyle } from "./single.style";
import { Box, Typography } from "@mui/material";

type Properties = {
  img?: string;
  title: string;
  details: {
    [key: string]: string | JSX.Element;
  };
  otherDetails?: JSX.Element[];
  dataGrid?: JSX.Element;
};

const Single = (properties: Properties) => {
  const { img, title, details, otherDetails, dataGrid } = properties;

  return (
    <Box className="single" css={singleStyle}>
      <Box className="view">
        <Box className="info">
          <Box className="topInfo">
            {img && <img src={img} alt="img" />}
            <Typography variant="h5" component="h1">
              {title}
            </Typography>
          </Box>
          <Box className="details">
            {Object.entries(details).map(([key, value], index) => (
              <Box className="item" key={index}>
                <Typography className="itemTitle" component="span">
                  {key}
                </Typography>
                <Typography className="itemValue" component="span">
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        {otherDetails && (
          <Box className="otherDetails">
            {otherDetails.map((detail, index) => (
              <Box className="otherDetail" key={index}>
                {detail}
              </Box>
            ))}
          </Box>
        )}

        {dataGrid && <Box className="rightSideBlock">{dataGrid}</Box>}
      </Box>
    </Box>
  );
};

export default Single;
