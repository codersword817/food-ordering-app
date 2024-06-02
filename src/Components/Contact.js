import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
const Contact = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <div className="bg-blue-300 h-screen w-screen">
        <div className=" bg-blue-400 w-1/2 m-auto text-center h-4/6 rounded-lg">
          <div>
            <h1 className=" text-3xl text-white">Reach Out Us on....</h1>
            <div className="m-4 my-10 rounded-md flex justify-around">
              {/* <h1 className="text-xl">Reach us Out on</h1> */}
              <div
                className=" cursor-pointer bg-white rounded-lg"
                onClick={() => openInNewTab("https://linkedin.com")}
              >
                <FaLinkedin className=" text-blue-800 text-6xl my-2"></FaLinkedin>
              </div>
              <div
                className=" cursor-pointer bg-white rounded-lg p-1 "
                onClick={() => openInNewTab("https://facebook.com")}
              >
                <FaFacebook className=" text-blue-900 text-6xl "></FaFacebook>
              </div>
              <div
                className=" cursor-pointer bg-white rounded-lg p-1"
                onClick={() => openInNewTab("https://instagram.com")}
              >
                <FaInstagram className=" text-pink-600 text-6xl"></FaInstagram>
              </div>
              <div
                className=" cursor-pointer bg-white rounded-lg p-1"
                onClick={() => openInNewTab("https://youtube.com")}
              >
                <FaYoutube className=" text-red-600 text-6xl "></FaYoutube>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
