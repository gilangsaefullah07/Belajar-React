import Card from "../components/Elements/Card";
import TabBar from "../components/Elements/Tab";
import Header from "../components/Fragments/Header";
import HomeLayouts from "../components/Layouts/HomeLayouts";
import Hero from "../components/Elements/Hero";
import Banner from "../components/Elements/Banner";
import Footer from "../components/Fragments/Footer";

const Homepage = () => {
  return (
    <HomeLayouts>
      <Header></Header>
      <main>
        <div className="flex flex-col gap-4 p-4">
          <Hero
            title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
            subtitle="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
          ></Hero>
          <div className="w-full flex flex-col gap-2">
            <p className="w-full text-2xl font-bold">
              Koleksi Video Pembelajaran Unggulan
            </p>
            <p className="w-full text-sm">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
          <TabBar></TabBar>
          <Card></Card>
          <Banner></Banner>
        </div>
      </main>
      <Footer></Footer>
    </HomeLayouts>
  );
};

export default Homepage;
