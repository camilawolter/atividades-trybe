def bigger(num, otherNum):
    if otherNum > num:
        return otherNum
    return num


print(bigger(10, 4))


def mean(num):
    total = 0
    for number in num:
        total += number
    return total / len(num)


print(mean([1, 2, 3]))


def find_biggest_name(names):
    big_name = names[0]
    for name in names:
        if len(name) > len(big_name):
            big_name = name
    return big_name


print(find_biggest_name(
    ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
