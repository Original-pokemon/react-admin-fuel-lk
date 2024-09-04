import { useSelector } from "react-redux";
import Single from "../../components/single/single";
import InfoBox from "../../components/boxes/info-box/info-box";
import { getContracts, getFirm } from "../../store/selectors";
import calculateBalance from "../../utils/balance";
import BalanceBox from "../../components/boxes/balance-box/balance-box";

function Profile() {
  const profile = useSelector(getFirm);

  const { code, fullname, inn } = profile;
  // Fetch data and send to Single Component
  const profileInfo = {
    id: code,
    title: `Название: ${fullname}`,
    details: {
      ИНН: inn.toString(),
    },
    otherDetails: [<BalanceBox key={1} />],
  };

  return (
    <div className="user">
      <Single
        id={code}
        title={profileInfo.title}
        details={profileInfo.details}
        otherDetails={profileInfo.otherDetails}
      />
    </div>
  );
}

export default Profile;
