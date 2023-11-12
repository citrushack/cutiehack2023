import Title from "../../Title";

const committees = {
  "UI/UX": ["Josalyn Chow", "Tenzin Zomkee", "Garman Zhen", "Kaitlin Ching"],
  Operations: ["Allison Pham", "Akanksh Divyananda"],
  Sponsorship: ["Brian Uong", "David Ranai"],
  "Software Engineering": [
    "Fardin Zaman",
    "Sean Quiambao",
    "Val Wong",
    "Jonathan Trujillo",
    "Fuyuki Malahom",
    "Isabelle Celo",
    "Anjaline Singh",
  ],
};

const Committees = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Title title="Committees" />
      <div className="grid grid-cols-1 md:grid-cols-4">
        {Object.entries(committees).map(([key, values], index) => (
          <div className="text-white text-center" key={index}>
            <p className="text-xl font-bold">{key}</p>
            {values.map((name, index) => (
              <p key={index} className="">
                {name}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
