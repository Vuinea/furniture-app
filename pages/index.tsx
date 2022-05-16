import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import BaseApp from "../components/BaseApp";
import CurrentSales from "../components/home/CurrentSales";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <BaseApp>
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          The Oasis in the Sahara of Furniture
        </h1>

        <div className="mt-6 text-lg text-center max-w-3xl mx-auto">
          <p className="text-slate-500">
            Furniture can all look the same with unclear quality. That's why
            we're here to give you <br />
            <span className="text-primary-300 font-medium">
              high quality, unique, and practical
            </span>{" "}
            furniture to suit your needs.
          </p>
          <Link passHref href="/products">
            <a className="btn btn-primary mt-3 capitalize">see our products</a>
          </Link>
        </div>
      </div>
      <CurrentSales />
    </BaseApp>
  );
};

export default Home;
