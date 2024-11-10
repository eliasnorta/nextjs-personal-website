import React, { useEffect } from "react";
import style from "./loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <main className={style.container}>
      <div className={style.image_wrapper}>
        <Image src="/eliasnorta_icon.svg" alt="Logo" width={50} height={55} />
        {/* <h1>loading......</h1> */}
      </div>
    </main>
  );
}
