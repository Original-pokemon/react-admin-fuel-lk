import InfoBox from "../info-box/info-box";

const contactsBox = () => {
  return (
    <InfoBox
      title="Контакты"
      data={[{ "Ольга Иванова": "+7 (999) 999-99-99" }]}
    />
  );
};

export default contactsBox;
