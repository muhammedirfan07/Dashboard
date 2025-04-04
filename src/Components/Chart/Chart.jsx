import React, { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const [showMetricsDropdown, setShowMetricsDropdown] = useState(false);
    const [showDayDropdown, setShowDayDropdown] = useState(false);
    const [addDropdown, setAddDropdown] = useState(false);

    const data = [
        { name: 'Mar 1 ', uv: 600, pv: 200 },
        { name: 'Mar 3', uv: 1000, pv: 498 },
        { name: 'Mar 16', uv: 2000, pv: 1000 },
        { name: 'Mar 20', uv: 800, pv: 1208 },
        { name: 'Mar 28', uv: 1890, pv: 200 },
        { name: 'Aprl 2', uv: 400, pv: 1000 },
        { name: 'Aprl 7', uv: 200, pv: 1800 },
    ];

    
    const formatYAxis = (tick) => {
        if (tick >= 1000) {
            return `${(tick/1000).toFixed(1)}k`;
        }
        return tick;
    };

    // Custom tooltip formatter
    const formatTooltip = (value, name) => {
        return [value.toLocaleString(), name === 'pv' ? 'Visitors' : 'Connections'];
    };

    return (
        <div className='flex flex-col h-full'>
            {/* dropdown controls */}
            <div className='flex flex-nowrap gap-1 md:gap-2'>
                <div className="relative">
                    <button
                        className="flex items-center bg-black px-3 py-1.5 rounded-lg text-sm border border-primary-300"
                        onClick={() => setShowMetricsDropdown(!showMetricsDropdown)}
                    >
                        <span>Visitors</span>
                        <ChevronDown className="ml-2 w-4 h-4" style={{ transform: showMetricsDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}  />
                        
                    </button>
                    {showMetricsDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-black border border-primary-300 rounded-lg w-30 md:w-40 z-10">
                            {['Visitors', 'Connections', 'Interactions', 'Impressions'].map((item) => (
                                <div key={item} className="py-1.5 px-3 hover:bg-primary-300 cursor-pointer">
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                <div className="relative">
                    <button
                        className="flex items-center bg-black px-3 py-1.5 rounded-lg text-sm border border-primary-300"
                        onClick={() => setShowDayDropdown(!showDayDropdown)}
                    >
                        <span className='text-nowrap'>Last 30 Days</span>
                        <ChevronDown className="ml-2 w-4 h-4" style={{ transform: showDayDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}  />
                    </button>
                    {showDayDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-black border border-primary-300 rounded-lg w-30 md:w-40 z-10">
                            {['Today', 'Yesterday', 'This Week', 'Last 7 days', 'Last 30 days'].map((item) => (
                                <div key={item} className="py-1.5 px-3 hover:bg-primary-300 cursor-pointer">
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                <div className="relative">
                    <button
                        className="flex items-center bg-black px-3 py-1.5 rounded-lg text-sm border border-primary-300  "
                        onClick={() => setAddDropdown(!addDropdown)}
                    >
                        <Plus  className="w-4 h-4 mr-1 transition-transform duration-300 ease-in-out"
                         style={{ transform: addDropdown ? 'rotate(360deg) ' : 'rotate(0deg)',
                         animation: addDropdown ? 'rotateClockwise 0.3s forwards' : 'rotateCounterClockwise 0.3s forwards'
                          }}  />
                        <span>Add</span>
                    </button>
                    {addDropdown && (
                        <div className="absolute right-0 mt-2 bg-black border border-primary-300 rounded-lg w-30 md:w-40 z-10 shadow-lg">
                            {['Visitors', 'Connections', 'Interactions', 'Impressions'].map((item) => (
                                <div key={item} className="py-1.5 px-3 hover:bg-primary-300 cursor-pointer">
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* metrics display */}
            <div className='flex flex-row  mb-4'>
                <div className='flex min-w-[150px] items-center flex-row p-3'>
                    <div className='flex md:me-3 me-1'>
                        <h1 className='md:text-3xl text-2xl text-white font-bold'>13.49k</h1>   
                    </div>
                    <div className='flex flex-col items-start mt-1  pe-2md:pe-5 md:border-r-2 border-primary-300'>
                        <div className='text-emerald-500 text-sm'>+469%</div>
                        <span className='text-gray-500 text-sm ml-2'>(897)</span>
                    </div>
                </div>
                
                <div className='flex min-w-[150px] flex-row p-3'>
                    <div className='flex items-center md:me-3 me-1'>
                        <span className='w-2 h-2 rounded-full bg-purple-500  mr-2 md:mr-2'></span>
                        <h1 className='md:text-3xl text-3xl  text-white font-bold'>3.49k</h1>
                    </div>
                    <div className='flex flex-col items-end mt-1'>
                        <div className='text-emerald-500 text-sm'>+180%</div>
                        <span className='text-gray-500 text-sm ml-2'>(497)</span>
                    </div>
                </div>
            </div>

            {/* chart container */}
            <div className=' flex-1  min-h-[220px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 2 }}  throttleDelay={100}>
                        <CartesianGrid 
                            strokeDasharray="1 1" 
                            horizontal={true} 
                            vertical={false} 
                            stroke="#2D3748"
                        />
                        <XAxis 
                            dataKey="name" 
                            axisLine={true}
                            tickLine={false}
                            tick={{ fontSize: 10 }}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => 
                                value >= 1000 ? `${value / 1000}k` : value
                            }
                            domain={[0, 2000]}
                            ticks={[ 200, 400, 800, 1200, 1600, 2000]}
                            tick={{ fontSize: 10 }}
                        />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: '#1A202C', 
                                borderColor: '#2D3748',
                                borderRadius: '6px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                            }}
                            itemStyle={{ 
                                color: '#E2E8F0',
                                fontSize: '12px',
                                padding: '2px 0'
                            }}
                            formatter={formatTooltip}
                            labelStyle={{ 
                                fontWeight: 'bold',
                                color: '#FFFFFF',
                                marginBottom: '4px'
                            }}
                        />
                        
                        <Line 
                            type="linear" 
                            dataKey="pv" 
                            stroke="#f4f4f4" 
                            strokeWidth={2}
                            activeDot={{ 
                                r: 4,
                                stroke: '#8884d8',
                                strokeWidth: 1,
                                fill: '#1A202C'
                            }}
                            dot={{ 
                                r: 3,
                                stroke: '#8884d8',
                                strokeWidth: 1,
                                fill: '#1A202C'
                            }}
                        />
                        <Line 
                            type="linear" 
                            dataKey="uv" 
                            stroke="#82ca9d" 
                            strokeWidth={2}
                            
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart