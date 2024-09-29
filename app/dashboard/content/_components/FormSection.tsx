"use client";
import React, { useState } from "react";
import { TemplateListSection } from "../../_components/TemplateListSection";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
interface PROPS {
  selectedTemplate?: TemplateListSection;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>();
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };
  return (
    <div className="p-5 shadow-md border rounded-lg">
      <div className="flex items-center gap-3">
        <img
          src={selectedTemplate?.icon}
          alt={selectedTemplate?.name}
          className="w-10 h-10 object-cover rounded-lg"
        />
        <h2 className="font-bold text-2xl mb-2 text-primary">
          {selectedTemplate?.name}
        </h2>
      </div>

      <p className="mt-2">{selectedTemplate?.desc}</p>
      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((form, index) => (
          <div key={index} className="mt-3">
            <label htmlFor={form.field} className="text-sm text-gray-500">
              {form.label}
            </label>
            <input
              type="text"
              id={form.field}
              name={form.name}
              required={form.required}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>
        ))}
        <Button
          type="submit"
          className="bg-primary text-white p-2 mt-5 rounded-md w-full"
          disabled={loading}
        >
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
