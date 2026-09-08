import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="text">
          <div className="slogan">
            <div className="title">
              {" "}
              <img
                src="/images/logo.webp"
                alt="Logomarca de Mestre da Arquitetura"
              />
              <h1>
                <span> Domine as ferramentas que vão te transformar em um</span>
                Mestre da <strong>Arquitetura</strong>
              </h1>
            </div>
            <p className="description">
              Aprenda AutoCAD, Revit, SolidWorks, Promob e outras ferramentas
              essenciasi para desenvolver seus projetos com mais conhecimento,
              precisão e confiança.
            </p>
            <div className="cursos-icones-hero"></div>
          </div>
        </div>
        <div className="img-container">
          <img
            src="/images/mestre-da-arquiteura-avatar.webp"
            alt="Avatar oficial de Mestre da Arquitetura"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
