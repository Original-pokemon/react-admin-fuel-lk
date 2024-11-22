import { Stack, } from '@mui/material';
import { DataListItem, DataListItemProps } from './data-list-item/data-list-item';
import { Spinner } from '#root/components/spinner/spinner';

type DataListProps = {
  items: DataListItemProps[],
  isLoading?: boolean;
};


const DataList = ({ items, isLoading = false }: DataListProps) => {
  return (
    <Stack spacing={2} alignItems={'center'}>
      {isLoading ? <Spinner /> : items.map(({ id, header, body }) => (
        <DataListItem id={id} header={header} body={body} />
      ))}
    </Stack >
  );
};

export { DataList };
