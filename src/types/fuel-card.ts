import { FuelTypeName } from "../const/fuel-card";

export type FuelCardType = {
  description: string;
  dt: string; // ДатаВремя события
  uidHex: string;
  serial: bigint; // Серийный номер изменения на карте со стороны чипа
  serialServer: bigint; // Серийный номер изменения на карте со стороны сервера
  version: number; // Версия формата карты
  small: boolean; // Размер карты
  cardNum: number; // Номер карты числом
  emitent: number; // Эмитент карты числом
  cardType: number; // Тип карты числом
  walletType: number; // Тип кошелька карты числом
  blocked: boolean; // Флаг блокировки карты
  cardOwner: string; // Владелец карты строка наименования
  firmId: number; // Фирма числом
  dateFirstOperation: string; // Дата первой операции по карте
  dateRelease: string; // Дата выпуска карты
  dateLastOperation: string; // Дата последней операции по карте
  dateDayLimit: string; // Дата ограничения дневного лимита
  colDayLimit: number; // Количество дней до блокировки
  monthLimit: number; // Месячный лимит установленный
  monthRemain: number; // Остаток месячного лимита
  dayLimit: number; // Дневной лимит установленный
  dayRemain: number; // Остаток дневного лимита
  data14: number; // Остаток 14
  data15: number;
  data16: number;
  data17: number;
  data18: number;
  data19: number;
  data20: number;
  data21: number;
  data22: number;
  data23: number;
  data24: number;
  data25: number;
  retAzs: number;
  retSmena: number;
  retFuel: number;
  retVolume: number;
  retPrice: number;
  longUpdate: bigint;
  specUpdCur: bigint;
  lastChanges: string;
  id: bigint;
};

export type FuelType = keyof typeof FuelTypeName;