import React from "react";
import ReactDOM from "react-dom/client";
/*TODO:Sử dụng const để tạo biến name mang giá trị là “Your name”
*/
const name = "Xin chào các bạn tôi là Hải đây";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*TODO:    Import biến vừa tạo vào hàm ReactDOM.render() để render element ra UI
*/
/*TODO:    Khai báo biến root và khởi tạo với ReactDOM.createRoot()
*/
root.render(
    /*TODO:Sử dụng hàm React.createElement để khởi tạo element mang giá trị hiển thị tên của bạn*/
    React.createElement("h1", {style: {textAlign: "center"}}, name)
    /*TODO:    Truyền element ở Bước 4 vào hàm root.render()
*/
);