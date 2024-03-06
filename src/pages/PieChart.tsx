import React, { useEffect } from "react";

const PieChart: React.FC = () => {
  const data: number[] = [400, 500, 300, 300, 200, 700, 500];
  const colors: string[] = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
  ];

  useEffect(() => {
    drawPieChart();
  }, []);

  const drawPieChart = () => {
    const canvas = document.getElementById(
      "pieChartCanvas"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const total = data.reduce((acc, value) => acc + value, 0);
      let startAngle = 0;

      for (let i = 0; i < data.length; i++) {
        const slicePercentage = data[i] / total;
        const endAngle = startAngle + slicePercentage * 2 * Math.PI;

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          canvas.height / 3,
          startAngle,
          endAngle,
          false
        );
        ctx.fillStyle = colors[i];
        ctx.fill();

        startAngle = endAngle;
      }
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-9">Pie Chart</h1>
      <div className="flex justify-center items-center">
        <canvas id="pieChartCanvas" width={600} height={400}></canvas>
      </div>
    </div>
  );
};

export default PieChart;
