/*  เมื่อกดปุ่ม favorite จะขึ้นข้อความว่า 'กดถูกใจหนังสือเล่มนี้'
    เมื่อกดปุ่ม Reserve จะขึ้นข้อความว่า 'จองหนังสือเล่มนี้'
    เมื่อกดปุ่ม Checkout จะขึ้นข้อความว่า 'ยืมหนังสือเล่มนี้' และจำนวนสิทธิ์ในการยืมหนังสือจะลดลง 1 สิทธิ์ 
    เช่น เดิมมีสิทธิ์ยืม 5 เล่ม จะเหลือยืมหนังสือเพิ่มได้อีกเพียง 4 เล่ม เนื่องจากถือว่ายืมเล่มนี้ไปแล้ว
    กรณีที่สิทธิ์ในการยืมหนังสือเหลือ 0/5 จะยืมหนังสือไม่ได้อีก และจะมีข้อความแจ้งเตือน 
*/

export default function App() {
  const [userAction, setUserAction] = useState([]);
  const bookCheckout = 5;

  const handleCheckOut = () => {
    if (bookCheckout) {
      
    } else {
      alert('คุณยืมหนังสือครบ 5 เล่มแล้ว ไม่สามารถยืมเพิ่มได้ หากมีข้อสงสัยกรุณาติดต่อเจ้าหน้าที่');
    }
  }

  return (
    <main>
      <section className="bg-sky-200 h-[60px]">
        <h1 className="font-bold text-4xl text-orange-700 p-2">Morty Library</h1>
      </section>
      <section className="pt-10 flex justify-center flex-col items-center">
        <img
          src={`https://picsum.photos/id/237/200/300`}
          alt="book-cover"
          className="w-[250px]"
        />
        <h1 className="font-bold text-2xl mt-4">
          The life of lovely black dog named Soli
        </h1>
        <div className="my-4">
          <button className="border border-pink-400 bg-pink-500 rounded-lg p-2 text-white">
            Favourite
          </button>
          <button className="border border-orange-400 bg-orange-600 rounded-lg p-2 text-white mx-5">
            Reserve
          </button>
          <button onClick={handleCheckOut} className="border border-green-400 bg-green-600 rounded-lg p-2 text-white">
            Checkout
          </button>
        </div>
        <p className="text-lg font-semibold text-red-800">
          คุณได้: 
        </p>
        <p className="font-semibold mt-2">คุณเหลือสิทธิ์ในการยืมหนังสือ <span className="underline decoration-double text-sky-500">{bookCheckout}/5</span> เล่ม</p>
      </section>
    </main>
  );
}
