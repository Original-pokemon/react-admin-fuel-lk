import {
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { ReactElement } from "react";
import { DataListItemHeader, DataListItemHeaderProps } from "./data-list-item-header";


export type DataListItemProps = {
  id: number | string,
  header?: DataListItemHeaderProps,
  body: ReactElement,
};

const DataListItem = ({
  id,
  header,
  body
}: DataListItemProps) => {

  return (
    <Card key={id} sx={{ maxWidth: 300, margin: '0 auto' }}>
      {header && (
        <DataListItemHeader
          {...header}
        />)}

      <Divider />

      <CardContent>
        {body}
      </CardContent>
    </Card>
  );
};

export { DataListItem };
