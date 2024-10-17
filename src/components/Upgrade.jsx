const Upgrade = () => {
  return (
    <section className="p-4 text-[#460E36] md:text-center">
      <h2 className="text-2xl font-bold">Mejora Tu Plan</h2>
      <p>
        Estas son algunas de las marcas que han confiado en mi trabajo. Anímate
        a formar parte y agenda tu consultoría gratuita
      </p>
      <div className="flex flex-col justify-center items-center p-4 gap-4 md:flex-wrap md:flex-row md:justify-center">
        <img src="horizon-logo.png" alt="" className="w-2/3 grayscale max-w-[200px]"/>
        <img src="wellpoint-logo.png" alt="" className="w-2/3 grayscale max-w-[200px]"/>
        <img src="wellcare-logo.png" alt="" className="w-2/3 grayscale max-w-[200px]"/>
        <img src="clover-health-logo.png" alt="" className="w-2/3 grayscale max-w-[200px]"/>
        <img src="./ambetter-logo.png" alt="" className="w-2/3 grayscale max-w-[200px]"/>
        <img src="humana-logo.png" alt="" className="w-2/3 max-w-[200px] grayscale"/>
        <img src="amerihealth-logo.png" alt="" className="w-2/3 grayscale max-w-[200px]"/>
        <img src="./aetna-logo.png" alt="" className="w-2/3 grayscale max-w-[200px]"/>
      </div>
    </section>
  );
};

export default Upgrade;
