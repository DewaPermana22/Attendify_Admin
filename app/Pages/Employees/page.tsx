import React, { useState } from "react";
import TableUI from "../../components/ui/Table";
import Pagination from "../../components/ui/Pagination";
import HeaderContent from "@/app/components/Atoms/HeaderContent";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <div>
        <HeaderContent title="Employees" subtitle="Directory & Personnel Records" />
        <TableUI />
        <div className="flex justify-end p-5">
          <div></div>
          <Pagination />
        </div>
      </div>
  );
};

export default Page;
