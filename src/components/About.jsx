import React from "react";

const About = () => {
  return (
    <div className="bg-[#1313130D] m-4 pt-10 rounded-lg">
      <h1 className="text-3xl font-bold text-center text-black">About</h1>
      <div className="">
        <p className=" text-base font-normal text-gray-500 p-11 mx-10">
          This JSON data contains detailed information about a diverse
          collection of books, making it ideal for applications like book review
          websites, digital libraries, or educational platforms. Each book is
          described with attributes such as `bookId` (unique identifier),
          `bookName` (title), and `author` (writer's name). The dataset includes
          `image` URLs for book covers, enhancing visual engagement for users.
          While the reviews provide insights into the books’ themes and
          narratives, they are repetitive and should be customized for each
          title to improve the dataset’s value. Additional fields such as
          `totalPages` (length), `rating` (out of 5), and `category` (genre)
          help users make informed choices. Tags like "Romance," "Dystopian,"
          and "Adventure" further refine the classification, allowing for
          precise filtering. Publishing details, including `publisher` and
          `yearOfPublishing`, offer historical context and help track literary
          trends over time. This collection spans classics like *Pride and
          Prejudice* (1813) and modern works like *The Girl on the Train*
          (2015), showcasing a broad range of literature. While the dataset is
          well-structured, it requires corrections to the image URLs and unique
          reviews for each book. With these improvements, it can serve as a
          robust foundation for book-related applications.
        </p>
      </div>
    </div>
  );
};

export default About;
