import { infoBoxStyle } from "./info-box.style";

type InfoItem = {
  [key: string]: string | number;
};

type InfoBoxProperties = {
  title: string;
  data: InfoItem[];
};

const InfoBox = ({ title, data }: InfoBoxProperties) => {
  return (
    <div className="infoBox" css={infoBoxStyle}>
      <h1>{title}</h1>
      <div className="list">
        {data.map((item, index) => (
          <div className="listItem" key={index}>
            {Object.entries(item).map(([key, value]) => (
              <>
                <span className="name">{key}</span>
                <span className="value">{value}</span>
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBox;
