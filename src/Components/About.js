const About = () => {
  return (
    <>
      <div className="w-screen  bg-blue-300 h-screen">
        <div className=" w-1/2 m-auto bg-blue-400 shadow-lg  rounded-md h-5/6 text-white">
          <h1 className=" text-center text-3xl  ">About Us</h1>
          <div className="m-4 bg-green-300 p-4 text-black">
            <p>
              Welcome to Foodie Express, your one-stop solution for all your
              culinary cravings! At Foodie Haven, we believe that food is more
              than just sustenance—it's an experience, a way to bring people
              together, and a celebration of flavors from around the world.
            </p>
          </div>
          <div className="m-4 bg-yellow-300 text-gray-700 p-4">
            <p>
              Our mission is to revolutionize the way you enjoy food. We aim to
              provide a seamless, convenient, and enjoyable food ordering
              experience, making it easier for you to discover and indulge in
              your favorite dishes.
            </p>
          </div>
          <div className="m-4 bg-red-300 p-4 text-black ">
            <p>
              Partnering with top restaurants to ensure you get only the best.
              Offering a diverse menu that caters to every taste and dietary
              preference. Simplifying the ordering process with an intuitive and
              user-friendly app. Providing exceptional service and support to
              ensure a delightful experience every time you order.
            </p>
          </div>
          <div className="m-4 my-10 bg-violet-400 p-4 ">
            <p>
              Thank you for choosing Foodie Express. We are excited to serve you
              and bring the world of flavors to your doorstep!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
