// import from 'react';
import { useEffect, useState } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "10",
        uv: 400,
        pv: 400,
    },
    {
        name: "20",
        uv: 300,
        pv: 139,
    },
    {
        name: "30",
        uv: 200,
        pv: 980,
    },
    {
        name: "40",
        uv: 278,
        pv: 390,
    },
    {
        name: "50",
        uv: 189,
        pv: 480,
    },
    {
        name: "60",
        uv: 239,
        pv: 380,
    },
    {
        name: "70",
        uv: 349,
        pv: 430,
    },
];

const DashboardUserGraph = () => {
    const [windowSize, setWindowSize] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
            console.log(window.innerWidth);
        };
        handleResize()
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <AreaChart  width={windowSize>='992'?(windowSize/2)-200:windowSize>='780'?windowSize-250:windowSize-50}  height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    );
};

export default DashboardUserGraph;
