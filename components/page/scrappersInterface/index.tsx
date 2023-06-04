import { Button, Textarea } from "@/components";
import Dropzone from "react-dropzone";
import React from "react";
import Uploader from "./uploader";

const ScrappersInterface = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            {
              label: "Email",
              type: "email",
            },
            {
              label: "Phone",
              type: "phone",
            },
          ].map((item: any, index: number) => (
            <Uploader {...item} key={index} />
          ))}
          <div className="w-full bg-white rounded-lg shadow-box p-3">
            <h2 className="text-gray-700 font-semibold mb-0">Request new</h2>
            <p className="text-gray-600 text-sm">
              Let us know your need. Request a new Scrapper.
            </p>

            <div className="mt-5">
              <Textarea placeholder="Explain your need" value="" />
              <Button className="mt-2">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrappersInterface;
