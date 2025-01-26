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
    <div className="main w-[95%] m-auto mt-6 space-y-4 pb-8 ">
      <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-Start mb-6">
        <span className="text-orange-600 text-start">Browse </span>Categories
      </h2>
      <div className="overflow-x-scroll md:overflow-x-visible ">
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 pb-4 md:pb-0 ">
          {images.map((category) => (
            <div key={category.name} className="flex-shrink-0 w-40 md:w-auto border-2 border-gray-400 px-2 py-3 pb-6 rounded-3xl">
              <div className="text-center">
                <img
                  src={category.url || "/placeholder.svg"}
                  alt={category.disc}
                  width={200}
                  height={200}
                  className="w-full md:h-60 h-40 object-cover rounded-lg"
                />
                <p className="mt-2 font-medium">{category.disc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="md:mt-8 p-4 md:p-8">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6">
        <span className="text-orange-500">Most</span> Popular
      </h3>
      <div className="overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCard.map((item, index) => (
            <PopularCard key={index} image={item.image} category={item.category} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </div>

      <div className="mt-8 font-sans overflow-hidden">
        <h3 className="text-4xl font-bold ">Exclusive!!</h3>
      <div className="dealsOfTheDays flex justify-center items-center md:gap-x-8 mt-4 flex-col md:flex-row gap-y-8">
        <DealsOfTheDays/>
        <DealsOfTheDays/>
      </div>
      </div>
    </div>
  );
}

export default Home;
