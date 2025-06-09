import React from "react";

export default function Navbar(props) {
  const {
        sopraText = "Home > Sevizi aggiuntivi",
        titleText = "Privacy",
        Text = "Privacy",
        Text2 = "INFORMATIVA PRIVACY GENERALE",
        Text3 = "PRIVACY POLICY",
        Text4 = "COOKIE POLICY",
  } = props;

  return(
    <div className="bg-white p-10 md:p-20">
      <div className="flex flex-col md:flex-row justify-between items-start">

        <div className="text-center mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-black text-sm font-light mt-1 md:mt-2">
                {sopraText}
          </h1>
          <h1 className="text-black text-4xl font-bold mt-1 md:mt-2">
                {titleText}
          </h1>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-black text-4xl font-normal mt-1 md:mt-2">
                {Text}
          </h1>
          <h1 className="text-black text-sm font-normal mt-1 md:mt-2">
                {Text2}
          </h1>
          <h1 className="text-black text-sm font-normal mt-1 md:mt-2">
                {Text3}
          </h1>
          <h1 className="text-black text-sm font-normal mt-1 md:mt-2">
                {Text4}
          </h1>
        </div>
      </div>
    </div>
  );
}