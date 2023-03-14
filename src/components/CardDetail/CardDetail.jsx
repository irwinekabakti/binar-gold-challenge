import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";
import axios from "axios";
import BASE_API from "../../api/BASE_API";
import classes from "./CardDetail.module.css";
import "../../Accordion.css";
import { text_Include, text_Exclude, text_Details } from "./data";

const CardDetail = () => {
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState();
  const { id } = useParams();

  const cardCarDetail = async () => {
    setLoading(true);
    console.log(car);
    try {
      const config = {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTUxNjE1MH0.GWyuCrZVA5HuA3ODVAvgXj5GxoP82BnkUM_rJSuMi5A",
        },
      };

      const { data } = await axios.get(`${BASE_API}/admin/car/${id}`, config);
      console.log(data);
      setCar(data);

      // console.log(setCar);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    cardCarDetail();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : car ? (
        <section id="card-detail" className={`container ${classes.cardDetail}`}>
          <div className="row justify-content-center">
            <div className="col-lg-7 g-4">
              <div className="card">
                <h6 className="fw-bold mb-3 ms-4 mt-4">Tentang paket</h6>
                <h6 className="fw-bold ms-4 mt-4">
                  Include
                  <ul className="mb-2 mt-3">
                    {text_Include.map((item) => (
                      <li
                        className="mb-4"
                        id={`include-${item.id}`}
                        key={item.id}>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </h6>
                <h6 className="fw-bold ms-4 mt-4">
                  Exclude
                  <ul className="mb-2 mt-3">
                    {text_Exclude.map((item) => (
                      <li
                        className="mb-4"
                        id={`exclude-${item.id}`}
                        key={item.id}>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </h6>
                <h6 className="fw-bold ms-4 mt-4">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne">
                          Refund, Reschedule, Overtime
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <ul className="mb-2 mt-3">
                            {text_Details.map((item) => (
                              <li
                                className="mb-4"
                                id={`detail-${item.id}`}
                                key={item.id}>
                                {item.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </h6>
              </div>
            </div>
            <div className="col-lg-5 g-4">
              <div className="card">
                <div className={`align-self-center ${classes.wrapperImage}`}>
                  {car.image ? (
                    <div className="justify-content-center mb-3 mt-4">
                      <div className="align-self-center mt-4">
                        <img
                          src={car.image}
                          className="card-img-top rounded-1"
                          alt="..."
                        />
                      </div>
                    </div>
                  ) : (
                    <h3 className="justify-content-center d-flex">
                      Image Not found !
                    </h3>
                  )}
                </div>
                <div className="card-body mt-2 mb-2">
                  <h6 className="fw-bold">{car.name}</h6>
                  {car.category ? (
                    <div className="carInfo">
                      <i className="bi bi-people"></i>
                      <span className="text-secondary ms-2">
                        <small>
                          {car.category === "small" ? "2-4 orang" : null}
                          {car.category === "medium" ? "4-6 orang" : null}
                          {car.category === "large" ? "6-8 orang" : null}
                        </small>
                      </span>
                    </div>
                  ) : (
                    <h3 className="justify-content-start d-flex">
                      Category Error !
                    </h3>
                  )}
                </div>
                {car.price ? (
                  <div className="card-body d-flex justify-content-between">
                    <p className="fw-bold text-uppercase">Total :&nbsp;</p>
                    <p id="totalPrice" className="fw-bold totalPrice">
                      Rp {car.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                ) : (
                  <h3 className="justify-content-center">Price Error !</h3>
                )}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h3 className="justify-content-center d-flex">Mobil Tidak Ditemukan</h3>
      )}
    </Fragment>
  );
};

export default CardDetail;
