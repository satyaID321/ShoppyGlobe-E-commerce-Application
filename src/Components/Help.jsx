import React from "react";

function Help() {
  return (
    <div className="px-4 sm:px-8 lg:px-20 py-10 max-w-5xl mx-auto">      
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6"> Help Center </h1>

      {/* Intro */}
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10">
        Welcome to the <span className="font-semibold">ShoppyGlobe Help Center</span>!
        Here you can find answers to frequently asked questions, get support for your
        orders, and learn more about our services. If you need further assistance,
        please contact our customer support team.
      </p>

      {/* Support Section */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4"> Customer Support </h2>

        <h3 className="text-lg font-medium mb-3">24×7 Service Support </h3>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Contact:</span> 9967**1242
          </li>
          <li>
            <span className="font-semibold">Email:</span>{" "}
            <a href="#" className="text-cyan-600 hover:underline"> support@shoppyglobe.com </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
