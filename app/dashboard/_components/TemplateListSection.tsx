import Templates from "@/app/(data)/Templates";
import React from "react";

export interface TemplateListSection {
  name: string;
  icon: string;
  desc: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}
export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 ml-2">
      {Templates.map((template, index) => (
        <div
          key={index}
          className="p-3 bg-white rounded-lg shadow-md mb-3 flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all"
        >
          <div className="flex items-center gap-5">
            <img
              src={template.icon}
              alt={template.name}
              className="w-10 h-10 object-cover rounded-lg"
            />
            <h2 className="text-lg font-bold">{template.name}</h2>
          </div>

          <div>
            <p className="text-sm p-2 text-gray-500  line-clamp-3">
              {template.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TemplateListSection;
