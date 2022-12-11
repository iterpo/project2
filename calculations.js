/*
    1.Calculation of triangle area
*/
function areaTriangle(x, y, z) {
    let area;
    s = (x + y + z) / 2;
    area = 1 / 4 * Math.sqrt((x + y + z) * (-x + y + z) * (-y + x + z) * (-z + x + y));
    return area.toFixed(3);
}

/*
    2.Calculation of Quadrilateral area
*/
function areaQuadrilateral(side1, side2, side3, side4, theta1, theta2) {
    let s, area, theta;
    s = (side1 + side2 + side3 + side4) / 2;
    theta = theta1 + theta2
    area = Math.sqrt((s - side1) * (s - side2) * (s - side3) * (s - side4) - (side1 * side2 * side3 * side4) * Math.pow(Math.cos(theta / 2), 2));
    return area.toFixed(3);
}

/*
    3.Calculation of Circle surface
*/
function surfaceCircle(radius) {
    // TODO:isws problima h diname check
    area = Math.PI * radius ** 2;
    return area.toFixed(3);
}

/*
    4.Calculation of Area of a rectangular parallelogram
*/
function areaRecatangularParallelogram(x, y) {
    area = x * y;
    return area.toFixed(3);
}

/*
   5.Calculation of Triangle Rectangle Area
*/
function areaTriangleRecatangular(x, y) {
    area = (x * y) / 2;
    return area;
}

/*
    6.Calculation of Rhombus Area
*/
// function areaRhombus(height, side) {
//     area = side * height;
//     return area;
// }

// /*
//     7.Conversion of temperature measurement
//     units from Celsius - Kelvin - Fahrenheit ???
// */
// function temperatureCKF(celcius, kelvin, fahrenheit) {
//     if (celcius != 0) {
//         // find kelvin and fahrenheit
//         kelvin = celcius + 273.15;
//         fahrenheit = celcius * (9 / 5) + 32;
//         return kelvin, fahrenheit;

//     }
//     else if (kelvin != 0) {
//         // find celcius and fahrenheit
//         celcius = kelvin - 273.15;
//         fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
//         return celcius, fahrenheit;

//     } else {
//         // find kelvin and celcius given fahrenheit
//         kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;
//         celcius = (fahrenheit - 32) * (5 / 9);
//         return kelvin, celcius;
//     }
// }
// /*
//     8.Calculating the distance of two points in the
//     Cartesian plane (2 dimensions)
// */
// function distance2dimensions(x1, x2, y1, y2) {
//     distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//     return distance;
// }
// /*
// 9.Calculation of discriminant
// */
// function discriminant(a, b, c) {
//     delta = b ** 2 - 4 * a * c;
//     return delta;
// }


// /*
//     10.Speed unit conversions
// */
// function speedConvert(km, mile) {
//     // mile/hour -> km/hour
//     // km/hour -> mile/hour
//     if (km == 0) {
//         km = mile * 1.6093;
//         return km;
//     } else {
//         mile = km / 1.6093;
//         return mile;
//     }
// }
// /*
// 11.Calculation of Frequency from period and vice versa
// */
// function frequency_period(frequency, period) {
//     if (frequency != 0) {
//         period = 1 / frequency;
//         return period;
//     } else {
//         frequency = 1 / period;
//         return frequency;
//     }
// }
// // 12.Calculation of simple pendency period
// function simplePendulum(length, acceleration) {
//     pendulum = 2 * Math.PI * Math.sqrt(length / acceleration)
//     return pendulum;
// }
// // 13.Calculation of average speed
// function averageSpeed(distance, time) {
//     average_speed = distance / time;
//     return average_speed;
// }
// // 14.Calculation of speed in straight smooth motion
// function speedSSM(x1, x2, t1, t2) {
//     let speed, dt, dx = 0;
//     dt = t2 - t1;
//     dx = x2 - x1;
//     if (dt != 0) {
//         speed = dx / dt;
//     }
//     return speed;
// }
// // 15.Calculation of the volume of a parallelogram
// function volumeParallelogram(height, a, b, thetaaAB) {
//     volume = height * Math.abs(a), Math.abs(b) * Math.sin(thetaaAB);
//     return volume;
// }
// // 16.Calculation of liquid volume in a rectangular tank
// function volumeLiquidRectangularTank(wide, long, full_litres, percentage) {
//     total_volume = full_litres * (percentage / 100);
//     height = (total_volume * 1000) / (wide * long);
//     volume = long * wide * height;
//     return volume;
// }
// 17 Conversions of distance measurement units nm, μm, mm, cm, m, km etc.
// 18 Conversions of voltage and current measurement units
// 19 Calculation of interest and default interest
// 20 Calculation of elapsed time between two dates
// 21 Calculation of financial quantities of your choice
// 22 Calculation of percentages



