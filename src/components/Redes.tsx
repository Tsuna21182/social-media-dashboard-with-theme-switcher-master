import DbRedes from "../Data/DbRedes";

interface RedesProps {
  dark: boolean;
}

function Redes({ dark }: RedesProps) {
  return (
    <section className="flex flex-col gap-5 mt-10 md:grid md:grid-cols-2 xl:grid-cols-4">
      {DbRedes.map((item, index) => (
        <div
          key={index}
          className={`rounded-xl w-full text-center p-8 ${
            dark ? "bg-LightGrayishBlue" : "bg-DarkDesaturatedBlueCB"
          }`}
        >
          <div>
            <div className="flex gap-3 justify-center">
              <img src={item.image} alt="imagen redes" />
              <p
                className={`font-bold ${
                  dark ? "text-VeryDarkBlueTG" : "text-DesaturatedBlueT"
                }`}
              >
                {item.name}
              </p>
            </div>
            <p
              className={`font-bold text-5xl mt-5 ${
                dark ? "text-VeryDarkBlueTG" : "text-LightGrayishBlue"
              }`}
            >
              {item.total}
            </p>
            <p className="text-DesaturatedBlueT uppercase">followers</p>
            <p className="font-bold mt-5">{item.today}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Redes;
