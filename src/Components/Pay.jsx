import React, { useContext } from "react";
import "./Pay.css";
import { ComponentContext } from "../context/ComponentContext";

const Pay = () => {
  const { componentState, setComponentState } = useContext(ComponentContext);

  return (
    <div className="Pay-Container">
      <div className="Pay-Border">
        <div className="Pay-firstline">
          <div className="Pay-Group1">
            <span>ปีการศึกษา</span>
            <select name="" id="">
              <option value="">YYYY</option>
              <option value="">2024</option>
              <option value="">2023</option>
            </select>
          </div>
          <div className="Pay-Group1">
            <span>ภาคเรียนที่</span>
            <select name="" id="">
              <option value="">X</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <button
            onClick={() => {
              setComponentState(6);
            }}
          >
            ชำระเงิน
          </button>
          <button>คู่มือการชำระเงิน</button>
          <button>พิมพ์ใบเสร็จรับเงินออนไลน์</button>
          <button>ขอผ่อนผันออนไลน์</button>
        </div>
        <div className="Pay-secline">
          ภาระค่าใช้จ่ายสำหรับนักศึกษารายงวดตลอดหลักสูตร
        </div>
        <div className="Pay-table">
          <table>
            <tr>
              <th>ค่าเล่าเรียนเหมาจ่ายตลอดหลักสูตร</th>
              <th>ส่วนลดจากการเทียบโอน</th>
              <th>ค่าเล่าเรียนเหมาจ่ายตลอดหลักสูตรหลังหักส่วนลดเทียบโอน</th>
            </tr>
            <tr>
              <td>XXX,XXX ฿</td>
              <td>XXX,XXX ฿</td>
              <td>XXX,XXX ฿</td>
            </tr>
          </table>
        </div>
        <div className="Pay-thline">
          * หลังจากการเทียบโอนเสร็จเรียบร้อยแล้ว
          นักศึกษาจะได้รับส่วนลดในงวดสุดท้าย ของการชำระเงินค่าเล่าเรียนเหมาจ่าย
          (งวดที่ 10)
        </div>
        <div className="Pay-table2">
          <table>
            <tr>
              <th className="Pay-th" colSpan="8">
                ภาคเรียนที่ X ปีการศึกษา YYYY
              </th>
            </tr>
            <tr>
              <th>วันที่</th>
              <th>เวลา</th>
              <th>รายการ</th>
              <th>จำนวน(฿)</th>
              <th>ค้างชำระ(฿)</th>
              <th>เลขที่ใบเสร็จรับเงิน</th>
              <th>วันที่ผ่อนชำระ</th>
              <th>หมายเหตุ</th>
            </tr>
            <tr className="Pay-tabletran">
              <th>DD/MM/YYYY</th>
              <th>XX:XX น.</th>
              <th>_ _ _ _ _ _ _ ชื่ อ ร า ย ก า ร _ _ _ _ _ _ _</th>
              <th>XXX,XXX</th>
              <th>XXX,XXX</th>
              <th>XXXXXXXXXX</th>
              <th>DD/MM/YYYY</th>
              <th>TTTTT</th>
            </tr>
            <tr className="Pay-tabletran">
              <th>DD/MM/YYYY</th>
              <th>XX:XX น.</th>
              <th>_ _ _ _ _ _ _ ชื่ อ ร า ย ก า ร _ _ _ _ _ _ _</th>
              <th>XXX,XXX</th>
              <th>XXX,XXX</th>
              <th>XXXXXXXXXX</th>
              <th>DD/MM/YYYY</th>
              <th>TTTTT</th>
            </tr>
          </table>
        </div>
        <div className="Pay-amount">
          <table>
            <tr>
              <th>รวมค่าใช้จ่าย</th>
              <th>XXX,XXX ฿</th>
            </tr>
            <tr>
              <th>รวมค้างชำระ</th>
              <th>XXX,XXX ฿</th>
            </tr>
          </table>
        </div>
        <div className="Pay-term">
          <pre>
            {`
          กำหนดการชำระเงิน : โปรดชำระเงินภายในวันที่กำหนด มิฉะนั้นจะเสียค่าปรับ ดังนี้ \n
                    • นักศึกษาปริญญาตรี ตั้งแต่รหัส 21 ลงไป เสียค่าปรับวันละ 100 บาท สูงสุดไม่เกิน 1,000 บาท \n
                    • นักศึกษาปริญญาตรี ตั้งแต่รหัส 22 ขึ้นไป เสียค่าปรับวันละ 100 บาท สูงสุดไม่เกิน 500 บาทต่องวด \n
                    • นักศึกษาปริญญาโทและปริญญาเอก เสียค่าปรับวันละ 100 บาท สูงสุดไม่เกิน 3,000 บาท \n
                    • วันชำระเงินค่าลงทะเบียนปกติ เงินสด : MobileApp./ธนาคาร/CounterService, CreditCard : online/การเงิน 5/8/2567 - 2/12/2567 \n
                    • วันที่ชำระเงินส่วนต่างของนักศึกษาเงินกู้กองทุน กยศ. และ กรอ. 9/12/2567 - 15/12/2567`}
          </pre>
        </div>
        <div className="Pay-fund">
          <table>
            <tr>
              <th>ภาคเรียนที่</th>
              <th>ทุนการศึกษา</th>
              <th>จำนวน(฿)</th>
              <th>รับ (฿)</th>
              <th>คงเหลือ (฿)</th>
              <th>ประเภท</th>
              <th>ผู้ให้ทุน</th>
            </tr>
            <tr className="Pay-tabletran">
              <th>X/YYYY</th>
              <th>รายการทุน</th>
              <th>XXX,XXX</th>
              <th>XXX,XXX</th>
              <th>XXX,XXX</th>
              <th>TT</th>
              <th>--------------</th>
            </tr>
            <tr className="Pay-tabletran">
              <th>X/YYYY</th>
              <th>รายการทุน</th>
              <th>XXX,XXX</th>
              <th>XXX,XXX</th>
              <th>XXX,XXX</th>
              <th>TT</th>
              <th>--------------</th>
            </tr>
          </table>
        </div>
        <div className="Pay-sym">
          <li>D : ทุนที่ตัดรายการโดยการลดหนี้</li>
          <li>E : ต้องชำระเงิน- ไม่คืนส่วนที่เหลือ ( ภายนอก )</li>
          <li>N : ไม่ต้องชำระเงิน- ไม่คืนส่วนที่เหลือ ( ภายใน )</li>
          <li>P : คิดแบบสัดส่วน (%)</li>
          <li>R : ไม่ต้องชำระเงิน- คืนส่วนที่เหลือ ( ทบวง )</li>
          <li>S : ส่งเสริมการขาย</li>
        </div>
      </div>
    </div>
  );
};

export default Pay;
