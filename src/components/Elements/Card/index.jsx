import Rating from "../Rating";

const products = [
  {
    image: "../Card_1.png",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    avatar: "../Avatar.png",
    fullname: "Jenna Ortega",
    position: "Senior Accountant ",
    company: "Gojek",
    rating: 3.5,
    reviews: 86,
    price: "300K",
  },
  {
    image: "../Card_1.png",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    avatar: "../Avatar.png",
    fullname: "Jenna Ortega",
    position: "Senior Accountant ",
    company: "Gojek",
    rating: 3.5,
    reviews: 86,
    price: "300K",
  },
  {
    image: "../Card_1.png",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    avatar: "../Avatar.png",
    fullname: "Jenna Ortega",
    position: "Senior Accountant ",
    company: "Gojek",
    rating: 3.5,
    reviews: 86,
    price: "300K",
  },
  {
    image: "../Card_1.png",
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    avatar: "../Avatar.png",
    fullname: "Jenna Ortega",
    position: "Senior Accountant ",
    company: "Gojek",
    rating: 3.5,
    reviews: 86,
    price: "300K",
  },
];

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {products.map((product, index) => (
        <div className="w-full flex flex-col gap-3 card bg-white rounded-md p-3">
          <div className="flex row gap-3 md:flex-col">
            <img
              className="rounded-md h-[80px] w-[80px] md:w-full md:h-full"
              src={product.image}
              alt="Not Found"
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-md font-bold">{product.title}</p>
                <p className="text-sm text-gray-400 hidden md:line-clamp-2">
                  {product.description}
                </p>
              </div>
              <div className="w-full flex gap-3 overflow-ellipsis">
                <img
                  className="h-[36px] w-[36px]"
                  src={product.avatar}
                  alt="Avatar Image"
                />
                <div>
                  <p className="w-full line-clamp-1 font-bold">
                    {product.fullname}
                  </p>
                  <p className="w-full line-clamp-1 text-sm text-gray-400">
                    {product.position}
                    <span className="font-bold">{product.company}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex gap-3 items-center">
              <Rating></Rating>
              <p class="underline underline-offset-1 text-gray-400">
                {product.rating} ({product.reviews})
              </p>
            </div>
            <p class="text-2xl text-green-500 font-bold">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
