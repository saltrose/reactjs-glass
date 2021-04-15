import React, { Component } from "react";

class ShowRoomCar extends Component {
  state = {
    carImg: "./img/car/products/red-car.jpg",
  };

  // carImg = "./img/car/products/red-car.jpg"; // vì ko chạy lại render

  handleChoiceColor = (color) => {
    console.log(color);
    // dùng switch case
    switch (color) {
      case "black":
        // this.carImg = "./img/car/products/black-car.jpg";
        this.setState({
          carImg: "./img/car/products/black-car.jpg",
        });
        break;
      case "red":
        // this.carImg = "./img/car/products/red-car.jpg";
        this.setState({
          carImg: "./img/car/products/red-car.jpg",
        });
        break;
      case "silver":
        // this.carImg = "./img/car/products/silver-car.jpg";
        this.setState({
          carImg: "./img/car/products/silver-car.jpg",
        });
        break;
      default:
        // this.carImg = "./img/car/products/steel-car.jpg";
        this.setState({
          carImg: "./img/car/products/steel-car.jpg",
        });
        break;
    }

    console.log("this.carImg : ", this.carImg);
  };

  render() {
    console.log("run render");
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <button className="btn" onClick={() => this.handleChoiceColor("black")}>
              <img src="./img/car/icons/icon-black.jpg" alt="hinh" style={{ width: 50 }} />
            </button>
            <button className="btn" onClick={() => this.handleChoiceColor("red")}>
              <img src="./img/car/icons/icon-red.jpg" alt="hinh" style={{ width: 50 }} />
            </button>
            <button className="btn" onClick={() => this.handleChoiceColor("silver")}>
              <img src="./img/car/icons/icon-silver.jpg" alt="hinh" style={{ width: 50 }} />
            </button>
            <button className="btn" onClick={() => this.handleChoiceColor("steel")}>
              <img src="./img/car/icons/icon-steel.jpg" alt="hinh" style={{ width: 50 }} />
            </button>
          </div>
          <div className="car mt-2">
            <img className="img-thumbnail" src={this.state.carImg} alt="hinh" />
          </div>
        </div>
      </section>
    );
  }
}

export default ShowRoomCar;
