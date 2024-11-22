// CardDetails.tsx
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/state";
import Single from "#root/components/single/single";
import TransactionsTable from "#root/components/transactions/transactions-table/transactions-table";
import { fetchFirmData, getFirmCardById } from "#root/store";
import { CardModal } from "#root/components/cards/card-modal/card-modal";

const CardDetails = () => {
  const { id: cardnum } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cardNumber = Number(cardnum);
  const card = useAppSelector((state) => getFirmCardById(state, cardNumber));

  useEffect(() => {
    if (!card) {
      dispatch(fetchFirmData());
    }
  }, [card, cardnum, dispatch]);


  if (!card) {
    return <div>Карта с номером {cardnum} не найдена</div>;
  }

  return <div> Детали карты</div>
};

export default CardDetails;
