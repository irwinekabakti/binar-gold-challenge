import React, { Fragment, useEffect, useState } from "react";
import classes from "./CardCar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import BASE_API from "../../api/BASE_API";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router";

const CardCar = () => {
  const [cars, setCars] = useState([]);
  const [filterCar, setFilterCar] = useState({});
  const [loading, setLoading] = useState(false);

  const BASE_URL = `${BASE_API}/admin/v2/car`;

  const handlerFilterCar = async () => {
    setLoading(true);
    try {
      // console.log(filterCar);
      const config = {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTUxNjE1MH0.GWyuCrZVA5HuA3ODVAvgXj5GxoP82BnkUM_rJSuMi5A",
        },
      };
      const { data } = await axios.get(BASE_URL, config);

      setCars(data.cars);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleSubmit = () => {
    // toResult();
    handlerFilterCar();
  };

  const navigate = useNavigate();

  const toDetail = (id) => {
    navigate("/detailCar/" + id);
  };

  useEffect(() => {
    console.log("run");
    setCars(cars);
    // handlerFilterCar();
  }, []);

  return (
    <Fragment>
      <SearchBar
        filterCar={filterCar}
        handleSubmit={handleSubmit}
        setFilterCar={setFilterCar}
      />

      <section id="card-car" className={`container ${classes.containerBottom}`}>
        <div className="row justify-content-evenly">
          {loading ? (
            <Loading />
          ) : (
            cars.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-12 g-4" key={item.id}>
                <div className={`card ${classes.cardBox}`}>
                  <div
                    className={`align-self-center mt-4 mb-3 ${classes.wrapperImage}`}>
                    <img
                      src={item.image}
                      className="card-img rounded-1"
                      alt={`images-${item.id}`}
                    />
                  </div>
                  <div className="card-body align-self-center mt-2 mb-2">
                    <h5 className="card-title ">{item.name}</h5>
                    <h5 className="card-title fw-bold">
                      Rp {item.price.toLocaleString("id-ID")} / Hari
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>

                    <button
                      onClick={() => {
                        toDetail(item.id);
                      }}
                      className={`w-100 ${classes.btnCard}`}>
                      Pilih Mobil
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default CardCar;
