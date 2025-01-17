"use client";
import Form from "next/form";
import FormInput from "./form-input";
import FormButton from "./form-button";
import FormSearchExamples from "./form-search-examples";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [searchInput, setSearchInput] = useState<string>("");
  const router = useRouter();

  const handleSearchInput = (data: string): void => {
    setSearchInput(data);
  };

  const handleSubmit = () => {
    if (searchInput) {
      router.push(`/pokemon/${searchInput}`);
    }
  };

  return (
    <div className="w-full">
      <Form className="w-full flex gap-5 py-5" action={handleSubmit}>
        <FormInput onChange={handleSearchInput} />
        <FormButton />
      </Form>
      <FormSearchExamples />
    </div>
  );
}
