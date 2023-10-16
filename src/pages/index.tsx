import React from "react";
import Layout from "@theme/Layout";
import "./Home.css";

function HomePage() {
  return (
    <Layout
      title="Ensemble Vocal de Neuilly"
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div className="container">
          <div className="left">
            <img
              src="https://github.com/RaEace/evn-docusaurus/blob/main/static/img/logo.jpg"
              alt="My Photo"
            />
          </div>
          <div className="right">
            <p className="subtitle">
              Médaille d’argent au 18ème Festival de l’Avent ‘Petr Eben’ de
              Prague
            </p>
            <a href="/concerts" className="btn">
              PROCHAIN CONCERT LE 16 JUIN 2022
            </a>
            <p className="title">Recrutement</p>
            <p className="description">
              L’EVN recherche des sopranos, des ténors et des basses &gt;&gt;
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default HomePage;
