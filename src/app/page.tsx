import Image from "next/image";

export default function Home() {
  return (
    <div className="text-3xl text-red-700">
     <Image
     src='https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg'
     width={500}
     height={500}
     alt='lat mat 8'
     />
     <Image
     src={"/images/133846872862694527.jpg"}
     width={500}
     height={500}
      alt="hinh anh 1"
     />




    </div>
  );
}
