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
          <div className=" flex flex-col items-center">
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
            <div className={`flex items-center gap-3 mt-5 ${item.color}`}>
              <img src={item.up} alt="imagen icono" className="h-2" />
              <p className="font-bold">{item.today}Today</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Redes;
