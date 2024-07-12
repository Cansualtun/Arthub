"use client";
import Line from "@/components/Shared/Line";
import PocketBase from "pocketbase";
import Link from "next/link";
import Image from "next/image";
export default async function Catalog() {
  const pb = new PocketBase("https://api.pixem.org");
  const records = await pb.collection("ozkamci_katalog").getFullList({});

  return (
    <div className="flex flex-col gap-4">
      <Line title="Katalog" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {records.map((record) => (
          <div key={record.id} className="text-center">
            <Link href={`katalog/${record.id}`}>
              <Image
                width={200}
                height={200}
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
