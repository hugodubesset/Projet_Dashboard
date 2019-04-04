import React, { PureComponent } from 'react';
import './Widget.css';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';


const data = [
    {
        name: 'Page A', uv: 590, pv: 800, amt: 1400,
    },
    {
        name: 'Page B', uv: 868, pv: 967, amt: 1506,
    },
    {
        name: 'Page C', uv: 1397, pv: 1098, amt: 989,
    },
    {
        name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
    },
];

export default class Widget4 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

    render() {
        return (
            <div className="widget">
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
            </div>
        );
    }
}
