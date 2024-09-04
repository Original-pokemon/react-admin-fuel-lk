import { useSelector } from "react-redux";
import Single from "../../components/single/single";
import { getCards } from "../../store/selectors";
import generateRandomTransaction from "../../mock/card-transaction";
import DataTable from "../../components/dataTable/data-table";
import { GridColDef } from "@mui/x-data-grid";
import FuelBox from "../../components/boxes/fuel-box/fuel-box";

const transactions = Array.from({ length: 50 }, generateRandomTransaction);
const columns: GridColDef[] = [
  { field: "dt", headerName: "Дата", width: 250 },
  {
    field: "card",
    headerName: "Карта",
    width: 250,
  },
  {
    field: "azs",
    type: "string",
    headerName: "АЗС",
    width: 150,
  },
  {
    field: "fuel",
    type: "string",
    headerName: "Вид топлива",
    width: 110,
  },
  {
    field: "volume",
    type: "number",
    headerName: "Объем",
    width: 90,
  },
  {
    field: "price",
    type: "number",
    headerName: "Цена",
    width: 90,
  },
];

function Card() {
  const cards = useSelector(getCards);

  if (!cards) return null;

  const { id, cardNum, blocked, dateRelease, cardType, cardOwner } = cards[0];
  // Fetch data and send to Single Component
  const cardInfo = {
    id,
    title: `Номер карты: ${cardNum.toString()}`,
    details: {
      "Тип карты": cardType.toString(),
      "Владелец карты": cardOwner,
      "Дата выдачи карты": dateRelease,
      "Статус карты": blocked.toString(),
    },
    otherDetails: [
      <div className="balance">
        <FuelBox />
      </div>,
    ],
    dataGrid: (
      <div className="transactions">
        <div className="info">
          <h1>Транзакции</h1>
        </div>
        <DataTable slug="transactions" columns={columns} rows={transactions} />
      </div>
    ),
  };

  return (
    <div className="user">
      <Single {...cardInfo} />
    </div>
  );
}

export default Card;
