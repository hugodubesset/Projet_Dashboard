import React, { PureComponent } from 'react';
import './Widget.css';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
];

export default class Widget3 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/31s5e83y/';

    render() {
        return (
            <div className="widget">
            <BarChart
                width={600}
                height={400}
                data={data}
                margin={{
                    top: 20, right: 70, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
                <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
            </BarChart>
            </div>
        );
    }
}
