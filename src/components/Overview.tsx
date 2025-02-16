import DbToday from "../Data/DbToday";

interface OverviewProps {
  dark: boolean;
}

function Overview({ dark }: OverviewProps) {
  return (
    <section className="flex flex-col gap-5 mt-5 md:grid md:grid-cols-2 xl:grid-cols-4">
      {DbToday.map((item) => (
        <div
          key={item.name}
          className={`rounded-xl w-full p-8 flex justify-between duration-200 cursor-pointer ${
            dark
              ? "bg-LightGrayishBlue hover:bg-ToggleLight"
              : "bg-DarkDesaturatedBlueCB hover:bg-DarkGrayishBlue"
          }`}
        >
          <div className="flex flex-col gap-6">
            <p
              className={`font-bold ${
                dark ? "text-DarkGrayishBlue" : "text-DesaturatedBlueT"
              }`}
            >
              {item.name}
            </p>
            <p
              className={`font-bold text-4xl ${
                dark ? "text-DarkDesaturatedBlueCB" : "text-LightGrayishBlue"
              }`}
            >
              {item.number}
            </p>
          </div>
          <div className="flex flex-col items-end gap-8">
            <img src={item.image} alt="imagen redes" className="w-6" />
            <div className={`flex items-center gap-2 ${item.color}`}>
              <img src={item.up} alt="imagen up" className="h-2" />
              <p>{item.porcentaje}%</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Overview;
