import * as S from "./styled";
import { useHistory } from "react-router-dom";

const ConfigInput = () => {
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const weight = event.target.weight.value;

    const water = weight * 35;

    localStorage.setItem("desired-level", water);
    localStorage.setItem("current-level", 0);
    history.replace("/");
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <label for="weight">Qual o seu peso?</label>
        <S.Input type="number" name="weight" min="0" />
        <S.Button type="submit">Confirmar</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default ConfigInput;
