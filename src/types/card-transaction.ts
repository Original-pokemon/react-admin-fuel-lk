export type CardTransactionType = {
  description: string;
  id: string; // GUID транзакции
  dt: string; // Дата время транзакции
  firm: number; // Фирма
  card: bigint; // Номер карты
  uidhex: string; // UID карты строкой
  op: -1 | 1; // Операция -1 списание, 1 пополнение
  ot?: number; // Тип операции (не используется)
  wt: number; // Тип кошелька
  fuel: number; // Номер топлива
  volume: number; // Объем топлива
  price: number; // Цена
  azsprice: number; // Цена по прайсу
  azs: number; // Номер АЗС
  smena: number; // Номер смены
  smenadt: string; // Дата время начала смены
};
