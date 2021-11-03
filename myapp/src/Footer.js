import React from "react";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <>
      <footer className="w-100 bg-light text-center">
        <p>&copy;{Year} SumitKumar.All Right Reserved | Terms and Conditions</p>
      </footer>
    </>
  );
};

export default Footer;
