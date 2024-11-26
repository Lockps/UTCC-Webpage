import React from "react";
import "./Qr.css";

const Qr = () => {
  return (
    <div className="Qr-Container">
      <div className="Qr-Border">
        <div className="Qr-Line1">การชำระเงิน</div>

        <div className="Qr-Line2">
          <span>งวดที่</span>
          <select defaultValue="">
            <option value="1">1</option>
          </select>
        </div>

        <div className="Qr-FirstTable">
          <table>
            <thead>
              <tr className="Qr-Step1">
                <th colSpan="3">STEP 1 : ตรวจสอบค่าใช้จ่าย</th>
              </tr>
              <tr>
                <th>ลำดับ</th>
                <th>รายการ</th>
                <th>จำนวนเงิน(฿)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>X</td>
                <td>_ _ _ _ _ _ _ _ _ _ ชื่อรายการ _ _ _ _ _ _ _ _ _ _</td>
                <td>XXX,XXX</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="Qr-FirstTable">
          <table>
            <thead>
              <tr className="Qr-Step1">
                <th>STEP 2 : เลือกวิธีการชำระเงิน</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="Qr-Line3">
          <div className="Qr-1">CLICK TO PRINT PAYINSLIP</div>
          <div className="Qr-1">
            <img src="" alt="QR Code 1" />
          </div>
          <div className="Qr-1">
            <img src="" alt="QR Code 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qr;
