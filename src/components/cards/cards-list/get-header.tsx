import type { DataListItemHeaderPropertiesType } from '#root/components/layouts/data-layouts/data-list/data-list-item/data-list-item-header';
import type { CardType } from '#root/types';
import CardAvatar from '#root/components/card-avatar/card-avatar';
import CardDetailsButton from '../cards-table/cells/card-detail-button/card-detail-button';

const getCardHeaderProperties = ({
  cardnum,
}: CardType): DataListItemHeaderPropertiesType => ({
  avatar: <CardAvatar cardnum={cardnum} />,
  action: <CardDetailsButton cardnum={cardnum} iconSize="ж1.8rem" />,
});

export default getCardHeaderProperties;
