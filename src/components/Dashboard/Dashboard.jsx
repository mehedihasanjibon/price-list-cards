import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const marksArray = [
        { id: 1, name: "John", math: 80, physics: 75, chemistry: 70 },
        { id: 2, name: "Sara", math: 90, physics: 85, chemistry: 80 },
        { id: 3, name: "Mike", math: 85, physics: 90, chemistry: 95 },
        { id: 4, name: "Emily", math: 75, physics: 80, chemistry: 85 },
        { id: 5, name: "David", math: 95, physics: 90, chemistry: 85 },
        { id: 6, name: "Lisa", math: 85, physics: 80, chemistry: 75 },
        { id: 7, name: "Daniel", math: 90, physics: 95, chemistry: 90 },
        { id: 8, name: "Amy", math: 80, physics: 85, chemistry: 90 },
        { id: 9, name: "Tom", math: 70, physics: 75, chemistry: 80 },
        { id: 10, name: "Olivia", math: 85, physics: 90, chemistry: 95 },
        { id: 11, name: "George", math: 95, physics: 95, chemistry: 90 },
        { id: 12, name: "Ella", math: 80, physics: 85, chemistry: 75 },
    ];


    return (
        <div>
            <LineChart 
                width={1000}
                height={300}
                data={marksArray}
            >
                <Line dataKey='physics'></Line>
                <Line stroke="#8884d8" dataKey='math'></Line>
                <XAxis dataKey='name' />
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;