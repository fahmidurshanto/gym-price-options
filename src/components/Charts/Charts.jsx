import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
  Treemap,
} from "recharts";
const Charts = () => {
  const studentsData = [
    {
      id: 1,
      student: "Alice",
      math_mark: 85,
      physics_mark: 78,
      chemistry_mark: 90,
    },
    {
      id: 2,
      student: "Bob",
      math_mark: 78,
      physics_mark: 82,
      chemistry_mark: 88,
    },
    {
      id: 3,
      student: "Charlie",
      math_mark: 92,
      physics_mark: 88,
      chemistry_mark: 94,
    },
    {
      id: 4,
      student: "David",
      math_mark: 70,
      physics_mark: 65,
      chemistry_mark: 72,
    },
    {
      id: 5,
      student: "Eve",
      math_mark: 88,
      physics_mark: 92,
      chemistry_mark: 86,
    },
    {
      id: 6,
      student: "Frank",
      math_mark: 76,
      physics_mark: 79,
      chemistry_mark: 85,
    },
    {
      id: 7,
      student: "Grace",
      math_mark: 95,
      physics_mark: 90,
      chemistry_mark: 96,
    },
    {
      id: 8,
      student: "Hannah",
      math_mark: 82,
      physics_mark: 75,
      chemistry_mark: 80,
    },
    {
      id: 9,
      student: "Ivy",
      math_mark: 89,
      physics_mark: 85,
      chemistry_mark: 91,
    },
    {
      id: 10,
      student: "Jack",
      math_mark: 73,
      physics_mark: 68,
      chemistry_mark: 74,
    },
  ];

  return (
    <div>
      <h3 className="text-3xl text-center">Line Chart of students marks</h3>
      {/* Line chart */}
      <div>
        <LChart
          className="mx-auto my-6"
          width={800}
          height={200}
          data={studentsData}
        >
          <Tooltip></Tooltip>
          <YAxis></YAxis>
          <XAxis dataKey={`student`}></XAxis>
          <Line dataKey="math_mark"></Line>
          <Line dataKey={`physics_mark`} stroke="blue"></Line>
          <Line dataKey={`chemistry_mark`} stroke="red"></Line>
        </LChart>
      </div>
      {/* Bar chart */}
      <h3 className="text-3xl text-center">Bar Chart of students marks</h3>
      <div>
        <BarChart
          className="mx-auto"
          width={800}
          height={300}
          data={studentsData}
        >
          <XAxis dataKey="student" />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Bar dataKey={`math_mark`} fill="skyblue"></Bar>
          <Bar dataKey={`physics_mark`} fill="yellowgreen"></Bar>
        </BarChart>
      </div>
      {/* Treemap chart */}
      <div className="p-5 my-12">
        <h3 className="text-3xl text-center">
          TreeMap of students physics marks
        </h3>
        <div></div>
        <Treemap
          className="mx-auto pt-5"
          width={730}
          height={250}
          data={studentsData}
          dataKey="physics_mark"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
        >
          <Tooltip></Tooltip>
        </Treemap>
      </div>
    </div>
  );
};

export default Charts;
