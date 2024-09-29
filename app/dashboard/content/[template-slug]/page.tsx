"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TemplateListSection } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TemplateListSection | undefined = Templates?.find(
    (Templates) => Templates.slug === props.params["template-slug"]
  );
  const GenerateAIContent = (formData: any) => {};
  return (
    <div>
      <Link href={"/dashboard"}>
        <Button className="mt-3 ml-5">
          <ArrowLeft />
          Back
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={(v: any) => GenerateAIContent(v)}
          />
          <div className="col-span-2">
            <OutputSection />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CreateNewContent;
