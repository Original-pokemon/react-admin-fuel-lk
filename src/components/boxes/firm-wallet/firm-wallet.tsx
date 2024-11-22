import React, { useEffect } from 'react';
import { FuelWalletType } from '#root/types';
import InfoBox from '../info-box/info-box';
import { useAppDispatch, useAppSelector } from '#root/hooks/state';
import { getAppStatus, getNomenclatureInfo, fetchNomenclatureData } from '#root/store';
import { Spinner } from '#root/components/spinner/spinner';


const FirmWalletDisplay: React.FC<{ fuelWallet: FuelWalletType[] }> = ({ fuelWallet }) => {
  const dispatch = useAppDispatch();
  const nomenclature = useAppSelector(getNomenclatureInfo);
  const { isIdle } = useAppSelector(getAppStatus);

  useEffect(() => {
    if (!nomenclature && isIdle) {
      dispatch(fetchNomenclatureData())
    }
  }, [nomenclature, dispatch]);

  if (!nomenclature) {
    return <Spinner />;
  }

  const walletData = fuelWallet.map((wallet) => {
    const fuelNomenclature = nomenclature.find(nom => nom.fuelid === wallet.fuelid);

    return {
      [`${fuelNomenclature ? fuelNomenclature.fuelname : 'Неизвестное топливо'}`]: `${wallet.remain} литров`,
    };
  });

  return (
    <InfoBox
      title="Баланс топлива"
      data={walletData}
    />
  );
};

export default FirmWalletDisplay;
