import React from "react"
const StatisticLine = ({ text, value }) => (
//   <p>{text} {value}</p>
// Each statistic line is now a table row
 <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

export default StatisticLine
