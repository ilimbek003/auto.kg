import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../api";

const Mark = () => {
  const [mark, setMark] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    axios.get(get + `/cars/cars/?search=${name}`).then((response) => {
      setMark(response.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="box-work">
        {mark.map((el) => (
          <div>
            <img className="imgage" src={el.images} alt="" />
            <p className="prise">{el.prise}</p>
            <p className="dec">{el.mark?.name}</p>
            <p className="nwee">Год: {el.manufacturing_year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mark;
