import React from "react";
import "./News.css";
import capy from "../assets/CAPYBARA.jpg";

const News = () => {
  return (
    <div className="New-Container">
      <div className="New-Line">
        <div className="New-Circle">
          <div className="New-Circle1"></div>
        </div>
        <div className="New-Line1"></div>
      </div>
      <div className="New-Content">
        <div className="New-Header">
          <h2>ข่าวประกาศ</h2>
        </div>
        <div className="New-Name">
          <h4>ชื่อเรื่องประกาศ (ด่วนมาก)</h4>
        </div>
        <div className="New-author">
          <h4>ประกาศโดย ชื่อหน่วยงาน</h4>
        </div>
        <div className="New-Day">
          <h4>วันที่ประกาศ DD/MM/YYYY</h4>
        </div>
        <div className="New-Context">
          <h4>เนื้อหาข่าวประกาศ</h4>
        </div>
        <div className="New-img">
          <img src={capy} />
        </div>
      </div>
    </div>
  );
};

export default News;
