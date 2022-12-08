// Área de um quadrado
export function getSquareArea(side: number): number {
  return side ** 2;
}

// Área de um retângulo
export function getRectangleArea(base:number, height: number): number {
  return base * height;
}

// Área de um triângulo
export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

// Perímetro de um polígono
export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0)
}

// Checar se é um triângulo
export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number,
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB+ sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA+ sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA+ sideB);
   return checkSideA && checkSideB && checkSideC
}