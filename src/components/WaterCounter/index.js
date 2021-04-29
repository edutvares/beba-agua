import { useEffect, useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

function WhaterCounter() {
  let history = useHistory();

  const [data, setData] = useState({
    desiredLevel: 0,
    currentLevel: 0,
    percentage: 0,
  });

  useEffect(() => {
    if (
      localStorage.getItem("desired-level") == null ||
      localStorage.getItem("current-level") == null
    )
      history.replace("/config");

    const now = new Date();
    const date = {
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    };
    console.log(date, localStorage.getItem("date"));

    if (localStorage.getItem("date") !== JSON.stringify(date)) {
      localStorage.setItem("date", JSON.stringify(date));
      localStorage.setItem("current-level", 0);
    }

    const desiredLevel = parseInt(localStorage.getItem("desired-level"));
    const currentLevel = parseInt(localStorage.getItem("current-level"));
    const percentage = Math.round((currentLevel / desiredLevel) * 100);

    setData({
      desiredLevel,
      currentLevel,
      percentage,
    });
  }, []);

  return (
    <S.Container percentage={data.percentage}>
      <S.Percentage>{data.percentage}%</S.Percentage>
      <span>
        {data.currentLevel} de {data.desiredLevel}
      </span>
      <S.Link to="/addwater">Beber</S.Link>
    </S.Container>
  );
}

export default WhaterCounter;
