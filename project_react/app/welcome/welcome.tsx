import React from "react";
import { Navbar } from "../Components/main/Navbar";
import { Header } from "../Components/main/Header";
import { Services } from "../content/home/Services";
import { Contact } from "../content/home/Contact";
import { Footer } from "../Components/main/Footer";

export function Welcome() {
  return (
    <>
      <Navbar />
      <Header />
      
      <main>
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
