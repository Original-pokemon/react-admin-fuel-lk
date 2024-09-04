import { useSelector } from "react-redux";
import { GridColDef } from "@mui/x-data-grid";
import { ReactElement } from "react";
import { getCards } from "../../store/selectors";
import FuelBox from "../boxes/fuel-box/fuel-box";
import DataTable from "../dataTable/data-table";
import generateRandomTransaction from "../../mock/card-transaction";
import { singleStyle } from "./single.style";

type Properties = {
  id: number;
  img?: string;
  title: string;
  details: {
    [key: string]: string;
  };
  otherDetails?: JSX.Element[];
  dataGrid?: JSX.Element;
};

const Single = (properties: Properties) => {
  const { id, img, title, details, otherDetails, dataGrid } = properties;

  return (
    <div className="single" key={id} css={singleStyle}>
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {img && <img src={img} alt="img" />}
            <h1>{title}</h1>
            {/* <button>Update</button> */}
          </div>
          <div className="details">
            {Object.entries(details).map(([key, value], index) => (
              <div className="item" key={index}>
                <span className="itemTitle">{key}</span>
                <span className="itemValue">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="otherDetails">
          {otherDetails &&
            otherDetails.map((detail, index) => (
              <div className="otherDetail" key={index}>
                {detail}
              </div>
            ))}
        </div>

        {dataGrid && <div className="rightSideBlock">{dataGrid}</div>}
        {/* <div className="balance">
          <FuelBox />
          </div>
        <div className="transactions">
          <div className="info">
            <h1>Транзакции</h1>
          </div>
          <DataTable
            slug="transactions"
            columns={columns}
            rows={transactions}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Single;
