import { useState } from "react";

export default function App() {
  const [userAction, setUserAction] = useState(0);
  const bookCheckout = 2;

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
            Favorite
          </button>
          <button className="border border-orange-400 bg-orange-600 rounded-lg p-2 text-white mx-5">
            Reserve
          </button>
          <button className="border border-green-400 bg-green-600 rounded-lg p-2 text-white">
            Checkout
          </button>
        </div>
        <p className="text-lg font-semibold text-red-800">
          คุณได้ทำการ: {userAction}
        </p>
        <p className="font-semibold mt-2">คุณเหลือสิทธิ์ในการยืมหนังสือ <span className="underline decoration-double text-sky-500">{bookCheckout}/5</span> เล่ม</p>
      </section>
    </main>
  );
}
