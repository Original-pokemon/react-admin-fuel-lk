import { DataListItemHeaderProps } from "#root/components/layouts/data-layouts/data-list/data-list-item/data-list-item-header";
import { CardType } from "#root/types";
import CardDetailsButton from "../cards-table/cells/card-detail-button/card-detail-button";
import CardAvatar from "#root/components/card-avatar/card-avatar";

const getCardHeaderProps = ({ cardnum }: CardType): DataListItemHeaderProps => ({
  avatar: <CardAvatar cardnum={cardnum} />,
  action: <CardDetailsButton cardnum={cardnum} iconSize={'1.8rem'} />,
})

export default getCardHeaderProps