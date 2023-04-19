import axios from "axios";
import { useState, useEffect } from "react";

function Dogs() {
  const [data, setData] = useState(null);

  const getWord = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error(error);
      alert("불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    getWord();
  }, []);

  return <div>{data ? data.value : "로딩 중..."}</div>;
}

export default Dogs;
