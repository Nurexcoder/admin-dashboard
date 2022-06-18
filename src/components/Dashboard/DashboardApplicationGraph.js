import {useState,useEffect} from "react";
import { Pie, PieChart, Cell } from "recharts";

const DashboardApplicationGraph = () => {
    // const { height, width } = useWindowDimensions()
    // console.log(height,width);
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
    const data01 = [
        {
            name: "Group A",
            value: 400,
        },
        {
            name: "Group B",
            value: 400,
        },
        {
            name: "Group C",
            value: 400,
        },
    ];
    const COLORS = ["#FFB1C1", "#FFE7AB", "#9AD0F6"];
    return (
        <PieChart className=' my-2'  width={windowSize>='992'?(windowSize/2)-200:windowSize>='780'?windowSize-250:windowSize-50}   height={200}>
            <Pie
                data={data01}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                outerRadius={100}
                innerRadius={50}
                fill='#8884d8'>
                {data01.map((entry, index) => (
                    <Cell fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
};

export default DashboardApplicationGraph;
