/*
    ให้แก้ไข code เพื่อให้ application ทำงานได้ถูกต้อง 
    1.เมื่อ user (พนักงานแคชเชียร์) กดปุ่ม 5% ราคาที่ลูกค้าจะต้องชำระจะลดจาก 1000 บาท เหลือ 950 บาท 
    โดย UI จะต้องแสดงราคาเต็ม 1000 บาทในบรรทัดแรก ในบรรทัด Discount % ต้องแสดง 5% และในบรรทัดที่สามต้องแสดงราคาหลักหักส่วนลดคือ 950 
    2. สำหรับปุ่มอื่นๆ หลักการทำงานเดียวกัน ต่างแค่ % ที่ลูกค้าได้รับส่วนลด 
 */

export default function App() {
  const discount = 0;
  const priceAfterDiscount = 2000;

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col">
      <main className="border-4 border-solid border-green-800 rounded-xl w-[550px] h-[340px]">
        <section className="bg-green-600 p-6">
          <h1 className="font-extrabold text-4xl text-white text-center">
            Simple Price Discount
          </h1>
        </section>
        <section className="pl-8 text-2xl font-semibold mt-5">
          <div className="flex pl-8 justify-start">
            <p className="pr-[100px]">Price without Discount</p>
            <p>1000</p>
          </div>
          <div className="flex pl-8 justify-start">
            <p className="pr-[248px]">Discount % : </p>
            <p>{discount}</p>
          </div>
          <div className="flex pl-8 justify-start">
            <p className="pr-[163px]">Price after Discount: </p>
            <p>{priceAfterDiscount}</p>
          </div>
        </section>
        <section className="flex gap-8 justify-center mt-7 font-semibold text-lg">
          <button className="p-2 bg-yellow-400 rounded-md w-[65px]">5%</button>
          <button className="p-2 bg-green-400 rounded-md w-[65px]">10%</button>
          <button className="p-2 bg-orange-400 rounded-md w-[65px]">20%</button>
          <button className="p-2 bg-purple-400 rounded-md w-[65px]">50%</button>
        </section>
      </main>
    </div>
  );
}
