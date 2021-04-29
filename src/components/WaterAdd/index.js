import { useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

function WaterAdd() {
  let history = useHistory();

  const [value, setValue] = useState(100);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.water.value);

    const currentLevel = parseInt(localStorage.getItem("current-level"));

    localStorage.setItem(
      "current-level",
      currentLevel + parseInt(event.target.water.value)
    );

    history.replace("/");
  };

  return (
    <S.Container>
      <S.Percentage>{value}ml</S.Percentage>

      <S.Form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "50px" }}>
          <S.Range
            type="range"
            min="100"
            max="1000"
            step="50"
            name="water"
            onInput={(e) => setValue(e.target.value)}
          />
        </div>
        <S.Button to="/addwater">Beber</S.Button>
      </S.Form>
    </S.Container>
  );
}

export default WaterAdd;
