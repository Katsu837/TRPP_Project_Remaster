import React from "react";
import Day from "./Day";

const GridOfWeek = function(props)
{
    let date = new Date()
    date.setMonth(props.month)
    date.setFullYear(props.year)
    date.setDate(0)

    console.log(date.getDay(), date.getFullYear(), date.getMonth(), date.getDate())
    function checkYear(year)
    {
        if(year % 4 != 0) return false
        if(year % 100 == 0 && year % 400 == 0) return true
        if(year % 100 == 0 && year % 400 != 0) return false
        return true
    }
    function getMonthDayCount(checkMonth)
    {

        if([0,2,4,6,7,9,11].includes(checkMonth)) return 31
        if([3,5,8,10].includes(checkMonth)) return 30
        if(checkMonth == 1 && checkYear(date.getFullYear())) return 29
        return 28
    }
    let gridMonth = [[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],
        [0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],
        [0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "],[0," "]]
    let numOfWeekDay = date.getDay()
    let countMonthDay = getMonthDayCount(props.month)
    let countPreviousMonthDay = getMonthDayCount((props.month == 0) ? 11 : props.month - 1)
    let countNextMonthDay = getMonthDayCount((props.month == 0) ? 11 : props.month - 1)

    for (let i = numOfWeekDay, k=1; i < countMonthDay + numOfWeekDay;k++, i++)
    {
        gridMonth[i][0] = k
        gridMonth[i][1] = "t"
    }
    for (let i = numOfWeekDay-1, k = countPreviousMonthDay; i >= 0; k--, i--)
    {
        gridMonth[i][0] = k
        gridMonth[i][1] = "p"
    }
    for (let i = countMonthDay + numOfWeekDay, k = 1; i < 42; k++, i++)
    {
        gridMonth[i][0] = k
        gridMonth[i][1] = "n"
    }
    return(
        <div className="gridOfMonth">
            <Day numDay = {gridMonth[0][0]} monthFlag = {gridMonth[0][1]}/>
            <Day numDay = {gridMonth[1][0]} monthFlag = {gridMonth[1][1]}/>
            <Day numDay = {gridMonth[2][0]} monthFlag = {gridMonth[2][1]}/>
            <Day numDay = {gridMonth[3][0]} monthFlag = {gridMonth[3][1]}/>
            <Day numDay = {gridMonth[4][0]} monthFlag = {gridMonth[4][1]}/>
            <Day numDay = {gridMonth[5][0]} monthFlag = {gridMonth[5][1]}/>
            <Day numDay = {gridMonth[6][0]} monthFlag = {gridMonth[6][1]}/>
            <Day numDay = {gridMonth[7][0]} monthFlag = {gridMonth[7][1]}/>
            <Day numDay = {gridMonth[8][0]} monthFlag = {gridMonth[8][1]}/>
            <Day numDay = {gridMonth[9][0]} monthFlag = {gridMonth[9][1]}/>
            <Day numDay = {gridMonth[10][0]} monthFlag = {gridMonth[10][1]}/>
            <Day numDay = {gridMonth[11][0]} monthFlag = {gridMonth[11][1]}/>
            <Day numDay = {gridMonth[12][0]} monthFlag = {gridMonth[12][1]}/>
            <Day numDay = {gridMonth[13][0]} monthFlag = {gridMonth[13][1]}/>
            <Day numDay = {gridMonth[14][0]} monthFlag = {gridMonth[14][1]}/>
            <Day numDay = {gridMonth[15][0]} monthFlag = {gridMonth[15][1]}/>
            <Day numDay = {gridMonth[16][0]} monthFlag = {gridMonth[16][1]}/>
            <Day numDay = {gridMonth[17][0]} monthFlag = {gridMonth[17][1]}/>
            <Day numDay = {gridMonth[18][0]} monthFlag = {gridMonth[18][1]}/>
            <Day numDay = {gridMonth[19][0]} monthFlag = {gridMonth[19][1]}/>
            <Day numDay = {gridMonth[20][0]} monthFlag = {gridMonth[20][1]}/>
            <Day numDay = {gridMonth[21][0]} monthFlag = {gridMonth[21][1]}/>
            <Day numDay = {gridMonth[22][0]} monthFlag = {gridMonth[22][1]}/>
            <Day numDay = {gridMonth[23][0]} monthFlag = {gridMonth[23][1]}/>
            <Day numDay = {gridMonth[24][0]} monthFlag = {gridMonth[24][1]}/>
            <Day numDay = {gridMonth[25][0]} monthFlag = {gridMonth[25][1]}/>
            <Day numDay = {gridMonth[26][0]} monthFlag = {gridMonth[26][1]}/>
            <Day numDay = {gridMonth[27][0]} monthFlag = {gridMonth[27][1]}/>
            <Day numDay = {gridMonth[28][0]} monthFlag = {gridMonth[28][1]}/>
            <Day numDay = {gridMonth[29][0]} monthFlag = {gridMonth[29][1]}/>
            <Day numDay = {gridMonth[30][0]} monthFlag = {gridMonth[30][1]}/>
            <Day numDay = {gridMonth[31][0]} monthFlag = {gridMonth[31][1]}/>
            <Day numDay = {gridMonth[32][0]} monthFlag = {gridMonth[32][1]}/>
            <Day numDay = {gridMonth[33][0]} monthFlag = {gridMonth[33][1]}/>
            <Day numDay = {gridMonth[34][0]} monthFlag = {gridMonth[34][1]}/>
            <Day numDay = {gridMonth[35][0]} monthFlag = {gridMonth[35][1]}/>
            <Day numDay = {gridMonth[36][0]} monthFlag = {gridMonth[36][1]}/>
            <Day numDay = {gridMonth[37][0]} monthFlag = {gridMonth[37][1]}/>
            <Day numDay = {gridMonth[38][0]} monthFlag = {gridMonth[38][1]}/>
            <Day numDay = {gridMonth[39][0]} monthFlag = {gridMonth[39][1]}/>
            <Day numDay = {gridMonth[40][0]} monthFlag = {gridMonth[40][1]}/>
            <Day numDay = {gridMonth[41][0]} monthFlag = {gridMonth[41][1]}/>
        </div>
    )
}

export default GridOfWeek;