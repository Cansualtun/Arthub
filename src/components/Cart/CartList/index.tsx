export default function CartList() {
  return (
    <div className="flex flex-col gap-6  w-[400px]">
      <div className="h-24 bg-primary-main rounded-md">
        <p className="text-3xl flex items-center justify-center h-full">
          ÜRÜNLERİNİZ
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-16 items-center m-4">
          <img src="/assets/images/alfa.svg" className="w-16 h-12" />
          <p>Duru</p>
          <p>1 Adet</p>
          <img src="/assets/icons/delete.svg" alt="delete" />
        </div>
      </div>
    </div>
  );
}
