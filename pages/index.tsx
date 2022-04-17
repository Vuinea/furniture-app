import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BaseApp from "../components/BaseApp";
import CurrentSales from "../components/index/CurrentSales";


const Home: NextPage = () => {
  return (
    <BaseApp>
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          The Oasis in the Sahara of Furniture
        </h1>
        <p className="mt-6 text-lg text-slate-500 text-center max-w-3xl mx-auto">
          Furniture can all look the same with unclear quality. That's why we're
          here to give you{" "}
          <span className="text-primary-300 font-medium">high quality, unique</span>{" "}
          furniture to suit your needs.
        </p>
      </div>
      <CurrentSales />
    </BaseApp>
  );
};

export default Home;
