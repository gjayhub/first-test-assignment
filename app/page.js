"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import PageItem from "@/components/PageItem";
import Separator from "@/components/Separator";

const initialPagesList = [
  { title: "Page 1", isChecked: false, id: 1 },
  { title: "Page 2", isChecked: false, id: 2 },
  { title: "Page 3", isChecked: true, id: 3 },
  { title: "Page 4", isChecked: false, id: 4 },
];

export default function Home() {
  const [pagesList, setPagesList] = useState(initialPagesList);
  const [toggleAllChecked, setToggleAllChecked] = useState(false);

  const handleAllPagesChange = () => {
    setToggleAllChecked((prevAllChecked) => !prevAllChecked);
    setPagesList((prevPages) =>
      prevPages.map((page) => ({ ...page, isChecked: !toggleAllChecked }))
    );
  };

  const handlePageChange = (id, isChecked) => {
    setPagesList((prevPages) =>
      prevPages.map((page) => (page.id === id ? { ...page, isChecked } : page))
    );
  };

  return (
    <main className='max-w-[500px] mx-auto mt-20 p-5 card-shadow'>
      <PageItem
        pageTitle='All pages'
        isChecked={toggleAllChecked}
        onChange={handleAllPagesChange}
      />
      <Separator />
      <div>
        {pagesList.map((page) => (
          <PageItem
            key={page.id}
            pageTitle={page.title}
            isChecked={page.isChecked}
            onChange={(isChecked) => handlePageChange(page.id, isChecked)}
          />
        ))}
      </div>
      <Separator />
      <Button className='mt-4' buttonType='primary'>
        Done
      </Button>
    </main>
  );
}
