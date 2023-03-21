PI = 3.14


def square(side):
    "Calculate area of square."
    return side * side


def rectangle(length, width):
    "Calcutate area of rectangle."
    return length * width


def circle(radius):
    "Calculate area of circle"
    return PI * radius * radius


if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do quadrado:", rectangle(2, 2))
    print("Área do quadrado:", circle(3))
