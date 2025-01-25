import React from "react";
import CategoryCard from "../utilities/CategoryCard";
import PopularCard from "../utilities/PopularCard";
import DealsOfTheDays from "../utilities/DealsOfTheDay";

function Home() {
  const popularCard = [
    {
      id: 1,
      image:
        "https://5.imimg.com/data5/XH/ED/TP/SELLER-42163470/full-sleeve-printed-t-shirt-500x500.jpg",
      category: "clothing",
      name: "Shirt",
      price: 2399,
    },
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.f0TxVuQRnOhEoQq9JCmlzwHaHa?rs=1&pid=ImgDetMain",
      category: "Electronics",
      name: "Iphone pro max",
      price: 112500,
    },
    {
      id: 1,
      image:
        "https://th.bing.com/th/id/OIP.m-NacJ6CXz-H2UA0Xx5_XgHaLH?rs=1&pid=ImgDetMain",
      category: "Womens Section",
      name: "Summer dress",
      price: 4199,
    },
    {
      id: 1,
      image:
        "https://i.pinimg.com/originals/b6/58/b2/b658b2df211baa8f11b2141375fa17ca.jpg",
      category: "Jewellery",
      name: "Necklace Set",
      price: 38999,
    },
  ];

  const images = [
    {
      id: 1,
      url: "https://cdn.dribbble.com/userupload/6352199/file/original-cbc5c7fe1792938c862242441db02789.jpg?resize=752x",
      disc: "Shirt",
    },
    {
      id: 2,
      url: "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688516.jpg",
      disc: "Electronics",
    },
    {
      id: 3,
      url: "https://media.istockphoto.com/id/1516524215/photo/beige-female-elegant-trench-coat-isolated-on-white.jpg?s=612x612&w=0&k=20&c=MNOqU92QJFHOC1hiNFURrUA8rYiD4xN4HX0rOKjIDqE=",
      disc: "Dress",
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTEcJUGY4qnPmb06UpLUmL8Iv0TTuqalGDg&s",
      disc: "Bobbi Brown",
    },
    {
      id: 5,
      url: "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688516.jpg",
      disc: "Electronics",
    },
  ];
  return (
    <div className="main w-[80%] m-auto mt-6 space-y-4">
      <div className="categories">
        <h3 className="text-3xl font-semibold">
          <span className="text-red-600">Browse </span>Ctaegories
        </h3>
        <div className="cards mt-4 flex justify-center items-center gap-x-8">
          {images.map((image) => {
            return <CategoryCard image={image.url} disc={image.disc} />;
          })}
        </div>
      </div>

      <div className="Most_popular mt-8">
        <h3 className="text-3xl font-semibold">
          <span className="text-red-500">Most</span> Popular
        </h3>
        <div className="cards">
          <div className="cards mt-4 flex justify-center items-center gap-x-5">
            {popularCard.map((card) => {
              return (
                <PopularCard
                  image={card.image}
                  category={card.category}
                  name={card.name}
                  price={card.price}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="dealsOfTheDays">
        <DealsOfTheDays/>
        <DealsOfTheDays/>
      </div>
    </div>
  );
}

export default Home;
