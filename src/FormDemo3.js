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
        if (errors) alert("kayıt yapılamadı");
      });
  };
  return (
    <div>
      <h3>
        <br></br>
      </h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="col-md-6">
              <div className="form-group ">
                <label for="Tc">Tc:</label>
                <input
                  type="number"
                  name="Tc"
                  className="form-control"
                  placeholder="Tc kimlik numaranız"
                  ref={register({
                    required: true,
                    maxLength: 11,
                    minLength: 11,
                  })}
                ></input>
                {_.get("Tc.type", errors) === "required" && (
                  <p>boş bırakılamaz</p>
                )}
                {_.get("Tc.type", errors) === "maxLength" && (
                  <p style={{ color: "#A52A2A" }}>
                    tc kimlik numarası 11 haneden uzun olamaz
                  </p>
                )}
                {_.get("Tc.type", errors) === "minLength" && (
                  <p>tc kimlik numarası 11 haneden kısa olamaz</p>
                )}
              </div>
            </div>
            <div className="col md-6">
              <div className="form-group ">
                <label for="Name">Name:</label>
                <input
                  type="text"
                  name="Name"
                  className="form-control"
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
            </div>
          </div>
          <div className="form-group ">
            <label for="LastName">LastName:</label>
            <input
              type="text"
              name="LastName"
              className="form-control"
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
          <div className="form-group ">
            <label for="Age">Age:</label>
            <input
              type="number"
              name="Age"
              className="form-control"
              placeholder="Yaşınız"
              ref={register({
                min: 0,
                max: 100,
              })}
            ></input>
            {_.get("Age.type", errors) && <p>0 ile 100 arası değer giriniz</p>}
          </div>
          <div className="form-group ">
            <label for="No">No:</label>
            <input
              type="number"
              name="No"
              className="form-control"
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
          <div className="form-group ">
            <label for="Section">Section:</label>
            <select className="form-control" ref={register} name="Section">
              <option>Bil Mühendisliği</option>
              <option>Böte</option>
              <option>Türkçe</option>
            </select>
          </div>
          <div className="form-group ">
            <label for="City">City:</label>
            <select className="form-control" ref={register} name="City">
              <option value="0">------</option>
              <option value="1">Adana</option>
              <option value="2">Adıyaman</option>
              <option value="3">Afyonkarahisar</option>
              <option value="4">Ağrı</option>
              <option value="5">Amasya</option>
              <option value="6">Ankara</option>
              <option value="7">Antalya</option>
              <option value="8">Artvin</option>
              <option value="9">Aydın</option>
              <option value="10">Balıkesir</option>
              <option value="11">Bilecik</option>
              <option value="12">Bingöl</option>
              <option value="13">Bitlis</option>
              <option value="14">Bolu</option>
              <option value="15">Burdur</option>
              <option value="16">Bursa</option>
              <option value="17">Çanakkale</option>
              <option value="18">Çankırı</option>
              <option value="19">Çorum</option>
              <option value="20">Denizli</option>
              <option value="21">Diyarbakır</option>
              <option value="22">Edirne</option>
              <option value="23">Elazığ</option>
              <option value="24">Erzincan</option>
              <option value="25">Erzurum</option>
              <option value="26">Eskişehir</option>
              <option value="27">Gaziantep</option>
              <option value="28">Giresun</option>
              <option value="29">Gümüşhane</option>
              <option value="30">Hakkâri</option>
              <option value="31">Hatay</option>
              <option value="32">Isparta</option>
              <option value="33">Mersin</option>
              <option value="34">İstanbul</option>
              <option value="35">İzmir</option>
              <option value="36">Kars</option>
              <option value="37">Kastamonu</option>
              <option value="38">Kayseri</option>
              <option value="39">Kırklareli</option>
              <option value="40">Kırşehir</option>
              <option value="41">Kocaeli</option>
              <option value="42">Konya</option>
              <option value="43">Kütahya</option>
              <option value="44">Malatya</option>
              <option value="45">Manisa</option>
              <option value="46">Kahramanmaraş</option>
              <option value="47">Mardin</option>
              <option value="48">Muğla</option>
              <option value="49">Muş</option>
              <option value="50">Nevşehir</option>
              <option value="51">Niğde</option>
              <option value="52">Ordu</option>
              <option value="53">Rize</option>
              <option value="54">Sakarya</option>
              <option value="55">Samsun</option>
              <option value="56">Siirt</option>
              <option value="57">Sinop</option>
              <option value="58">Sivas</option>
              <option value="59">Tekirdağ</option>
              <option value="60">Tokat</option>
              <option value="61">Trabzon</option>
              <option value="62">Tunceli</option>
              <option value="63">Şanlıurfa</option>
              <option value="64">Uşak</option>
              <option value="65">Van</option>
              <option value="66">Yozgat</option>
              <option value="67">Zonguldak</option>
              <option value="68">Aksaray</option>
              <option value="69">Bayburt</option>
              <option value="70">Karaman</option>
              <option value="71">Kırıkkale</option>
              <option value="72">Batman</option>
              <option value="73">Şırnak</option>
              <option value="74">Bartın</option>
              <option value="75">Ardahan</option>
              <option value="76">Iğdır</option>
              <option value="77">Yalova</option>
              <option value="78">Karabük</option>
              <option value="79">Kilis</option>
              <option value="80">Osmaniye</option>
              <option value="81">Düzce</option>
            </select>
          </div>
          <div className="d-flex justify-content-end my-2">
            <button type="submit" className="btn btn-primary col-md-end">
              gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
