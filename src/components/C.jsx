import Card from "./Card";

const C = () => {
  const colorData = [
    { color: "red" },
    { color: "orange" },
    { color: "bg-yellow-500" },
    { color: "bg-green-500" },
    { color: "bg-blue-500" },
    { color: "bg-purple-300" },
    { color: "bg-purple-500" },
  ];

  return (
    <>
      {colorData.map((v, i) => {
        return <Card key={i} color={v.color} />;
      })}
    </>
  );
};

export default C;
