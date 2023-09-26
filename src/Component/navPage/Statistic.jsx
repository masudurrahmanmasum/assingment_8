
import {  PieChart, Pie, ResponsiveContainer} from 'recharts';
const Statistic = () => {
    const data = [
        { name: 'Group A', value: 400, fill: '#00C49F' },
        { name: 'Group B', value: 300, fill: '#FF444A'}

      ];

      

    return (
        <div className='w-full flex justify-center'>

<div className='mt-10' style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <PieChart className='bg-[]'>
            <Pie dataKey="value" data={data} fill={data.fill} label />
          </PieChart>
        </ResponsiveContainer>
      </div>

        </div>
    );
};

export default Statistic;