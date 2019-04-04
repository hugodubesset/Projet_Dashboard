import React, { PureComponent } from 'react';
import './Widget.css';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
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

export default class Widget2 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

    render() {
        return (
            <div className="widget">
            <AreaChart
                width={1200}
                height={800}
                data={data}
                margin={{
                    top: 100, right: 70, left: 0, bottom: 100,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
            </div>
        );
    }
}
