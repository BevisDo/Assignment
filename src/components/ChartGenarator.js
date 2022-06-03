import LineChart from "./LineChart"

const Chart = ({children, height , width}) =>(
    <svg
      viewBox = {`0 0 ${width} ${height}`}
      height = {height}
      width = {width}
    >
      {children}
    </svg>
  )
  
  const Bar = ({fill, x, y, height, width}) =>(
    <rect fill={fill} x={x} y={y} height={height} width={width}/>
  )

  const FakeData = ({data})=>{
    const lineData = []
    for(let x = 0;x<data.length;x++){
      const y = data[x]
      lineData.push({x,y})
    }
    return lineData
  }

  const ChartGenarator = ({mode, data, color })=>{
    if(typeof data ==="string"){
      data = data.split(',')
    }
    const barWidth = 20
    const barMargin = 0
    const width = data.length * (barWidth + barMargin)
    const height = Math.max(...data)
    return(
      <>
      {mode =="bars"&&(
      <Chart
      height={height}
      width={width}
      >
        {data.map((datum, index)=>(
          <Bar
          fill={color}
          key={index}
          x={index *(barWidth+barMargin)}
          y={height - datum}
          width={barWidth}
          height={datum}
          />
        ))}
      </Chart>)}
      {mode =="line"&&(
          // linechart code
        <LineChart 
        data = {FakeData({data})}
        color = {color}
        height ={height}
        width ={width}
        >
        </LineChart>
      )}    
      </>
    )
  }

  export default ChartGenarator
