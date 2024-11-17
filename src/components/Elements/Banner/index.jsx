const Banner = () => {
  return (
    <div
      className="w-full flex flex-col gap-4 p-10 rounded-md justify-center items-center"
      style={{
        backgroundImage: "url(../Banner_cta.png)",
        backgroundSize: "100%",
        backgroundRepeat: "stretch",
      }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="w-full text-sm text-white text-center">NEWSLETTER</p>
          <p className="w-full text-2xl font-bold text-white text-center">
            Mau Belajar Lebih Banyak?
          </p>
          <p className="w-full text-sm text-white text-center">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
        </div>
        <div className="flex p-3 gap-3 bg-white justify-between rounded-md">
          <input
            className="w-full"
            type="email"
            name="email_beranda"
            placeholder="Masukkan Emailmu"
          />
          <button className="font-bold bg-yellow-500 text-white rounded-md p-2 hidden md:block">
            Subscribe
          </button>
        </div>
        <button className="font-bold bg-yellow-500 text-white rounded-md p-2 md:hidden">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Banner;
