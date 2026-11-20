const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "NexuCare Odontologia",
  description:
    "Projeto de portfólio que demonstra uma landing page para uma clínica odontológica fictícia.",
  inLanguage: "pt-BR",
  about: {
    "@type": "Dentist",
    name: "NexuCare Odontologia",
    disambiguatingDescription:
      "Clínica fictícia criada para demonstração de desenvolvimento web.",
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
