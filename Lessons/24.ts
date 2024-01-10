type Point = [number, number, number]

function isTheSamePoint(point1: Point, point2: Point) {
    if (point1[0] === point2[0] && point1[1] === point2[1] && point1[2] === point2[2]) {
        return true;
    } else {
        return false;
    }
}