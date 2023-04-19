import Card from "./Card";

const C = () => {
  const colorData = [
    { color: "bg-red-500" },
    { color: "bg-orange-500" },
    { color: "bg-yellow-500" },
    { color: "bg-green-500" },
    { color: "bg-blue-500" },
    { color: "bg-purple-500" },
  ];

  return (
    <>
      {colorData.map((v, i) => {
        return <Card color={v.color} />;
      })}
    </>
  );
};

export default C;
