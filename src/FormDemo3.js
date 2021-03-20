import React from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function FormDemo3() {
  const { register, handleSubmit, errors } = useForm(); //oluşturulan form yapısını state oluşturup state e kaydediyor kolay form kullanımı için kullanılır

  const onSubmit = (event) => {
    console.log(event.Age);
    var params = {
      id: event.Tc,
      Name: event.Name,
      LastName: event.LastName,
      Age: event.Age,
      No: event.No,
      Section: event.Section,
      City: event.City,
    };
    axios
      .post("http://localhost:3000/studentinfo", params)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <div class="container ">
      <h3>
        <br></br>
      </h3>
      <div class="col-md-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group">
            <label for="Tc">Tc:</label>
            <input
              type="number"
              name="Tc"
              class="form-control"
              
              placeholder="Tc kimlik numaranız"
              ref={register({
                required: true,
                maxLength: 11,
                minLength: 11,
              })}
            ></input>
            {_.get("Tc.type", errors) === "required" && <p>boş bırakılamaz</p>}
            {_.get("Tc.type", errors) === "maxLength" && (
              <p style={{ color: "#A52A2A" }}>
                tc kimlik numarası 11 haneden uzun olamaz
              </p>
            )}
            {_.get("Tc.type", errors) === "minLength" && (
              <p>tc kimlik numarası 11 haneden kısa olamaz</p>
            )}
          </div>
          <div class="form-group">
            <label for="Name">Name:</label>
            <input
              type="text"
              name="Name"
              class="form-control"
              
              placeholder="Adınız"
              ref={register({
                required: true,
                pattern: /^[A-Za-z-şçİğüöı]+$/i,
              })}
            ></input>
            {_.get("Name.type", errors) === "required" && (
              <p>boş bırakılamaz</p>
            )}
            {_.get("Name.type", errors) === "pattern" && (
              <p>Sadece harf ile girdi yapınız</p>
            )}
          </div>
          <div class="form-group">
            <label for="LastName">LastName:</label>
            <input
              type="text"
              name="LastName"
              class="form-control"
              
              placeholder="Soyadınız"
              ref={register({
                required: true,
                pattern: /^[A-Za-z-şçİğüöı]+$/i,
              })}
            ></input>
            {_.get("LastName.type", errors) === "required" && (
              <p>Boş bırakılamaz</p>
            )}
            {_.get("LastName.type", errors) === "pattern" && (
              <p>Sadece harf ile girdi yapınız</p>
            )}
          </div>
          <div class="form-group">
            <label for="Age">Age:</label>
            <input
              type="number"
              name="Age"
              class="form-control"
              
              placeholder="Yaşınız"
              ref={register({
                min: 0,
                max: 100,
              })}
            ></input>
            {_.get("Age.type", errors) && <p>0 ile 100 arası değer giriniz</p>}
          </div>
          <div class="form-group">
            <label for="No">Okul No:</label>
            <input
              type="number"
              name="No"
              class="form-control"
              
              placeholder="Okul No"
              ref={register({
                required: true,
                maxLength: 9,
                minLength: 9,
              })}
            ></input>
            {_.get("No.type", errors) === "required" && <p>boş bırakılamaz</p>}
            {_.get("No.type", errors) === "maxLength" && (
              <p style={{ color: "#A52A2A" }}>
                Okul numarası 9 haneden uzun olamaz
              </p>
            )}
            {_.get("No.type", errors) === "minLength" && (
              <p>Okul numarası 9 haneden kısa olamaz</p>
            )}
          </div>
          <div class="form-group">
            <label for="Section">Bölüm:</label>
            <select
              
              class="form-control"
              ref={register}
              name="Section"
            >
              <option>Bil Mühendisliği</option>
              <option>Böte</option>
              <option>Türkçe</option>
            </select>
          </div>
          <div class="form-group">
            <label for="City">Şehir:</label>
            <select  class="form-control" ref={register} name="City">
              <option>niğde</option>
              <option>istanbul</option>
              <option>ankara</option>
            </select>
          </div>
          <div class="d-flex justify-content-end my-2">
            <button type="submit" class="btn btn-primary col-md-end">
              gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
