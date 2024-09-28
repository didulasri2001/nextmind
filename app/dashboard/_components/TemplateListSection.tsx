import Templates from "@/app/(data)/Templates";
import React from "react";

function TemplateListSection() {
  return (
    <div>
      {Templates.map((template, index) => (
        <div
          key={index}
          className="p-3 bg-white rounded-lg shadow-sm mb-3 flex items-center gap-3"
        >
          <img
            src={template.icon}
            alt={template.name}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-lg font-bold">{template.name}</h2>
            <p className="text-sm text-gray-500">{template.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TemplateListSection;
