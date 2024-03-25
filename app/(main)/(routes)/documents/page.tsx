"use client"

import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";

const DocumentsPage = () => {

  const onCreate = () => {
    // const promise = create({ title: "Untitled" })
    //   .then((documentId) => router.push(`/documents/${documentId}`))
    //
    // toast.promise(promise, {
    //   loading: "Creating a new note...",
    //   success: "New note created!",
    //   error: "Failed to create a new note."
    // });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;