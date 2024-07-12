"use client";
import Line from "@/components/Shared/Line";
import PocketBase from "pocketbase";
import Link from "next/link";

export default async function Catalog() {
  const pb = new PocketBase("https://api.pixem.org");
  const records = await pb.collection("ozkamci_katalog").getFullList({});
  console.log(records , "cans")
  
  return (
    <div className="flex flex-col gap-4">
      <Line title="Katalog" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {records.map((record) => (
          <div key={record.id} className="text-center">
            <Link href={`katalog/${record.id}`}>
              <img
                src={`https://api.pixem.org/api/files/${record.collectionId}/${record.id}/${record.image}`}
                alt={record.name}
                className="w-full h-auto cursor-pointer"
              />
            </Link>
            <p className="font-bold">{record.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
