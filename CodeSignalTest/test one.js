You are given array of integers called blocks. Each of the values in this array represents the width of a block - the ith block has a height of 1 and a width of blocks[i] (i.e. it's a 1 x blocks[i] block).

You want to pack all the given blocks into a rectangular container of dimensions height x width, according to the following rules:

    Place blocks into the container row by row, starting with block 0.
    For each row, place the blocks into the container one by one, in the order they are given in the blocks array.
    If there is not enough space to put the current block in the current row, start filling the next row.

You are given the value height of the rectangular container. Your task is to find the minimal possible width of a rectangular container in which all blocks can fit. Find and return this minimal possible width value.

NOTE: The blocks cannot be rotated.

Example

    For blocks = [1, 3, 1, 3, 3] and height = 2, the output should be solution(blocks, height) = 6.

    Here's how the blocks should be packed in a container of size 2 x 6:

    Note that it wouldn't be possible to fit these blocks in a container that's any less wide than 6.

    For blocks = [2, 3, 1, 1, 1] and height = 2, the output should be solution(blocks, height) = 5.

    Here's how the blocks should be packed in container of size 2 x 5:

    It might seem like these blocks could be packed into a container of size 2 x 4, but since we must place them in the order they appear in the blocks array, the width must be at least 5.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.integer blocks

    An array of integers representing block widths.

    Guaranteed constraints:
    1 ≤ blocks.length ≤ 105,
    1 ≤ blocks[i] ≤ 104.

    [input] integer height

    An integer representing the height of the rectangular container.

    Guaranteed constraints:
    1 ≤ height ≤ 109.

    [output] integer

    The minimal possible width for the rectangular container to fit all the blocks, according to the specifications above.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
************************************************************************************************************************


Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.

Given an array of integers numbers, your task is to check all the triples of its consecutive elements for being a zigzag. More formally, your task is to construct an array of length numbers.length - 2, where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.

Example

    For numbers = [1, 2, 1, 3, 4], the output should be solution(numbers) = [1, 1, 0].
        (numbers[0], numbers[1], numbers[2]) = (1, 2, 1) is a zigzag, because 1 < 2 > 1;
        (numbers[1], numbers[2] , numbers[3]) = (2, 1, 3) is a zigzag, because 2 > 1 < 3;
        (numbers[2], numbers[3] , numbers[4]) = (1, 3, 4) is not a zigzag, because 1 < 3 < 4;

    For numbers = [1, 2, 3, 4], the output should be solution(numbers) = [0, 0];

    Since all the elements of numbers are increasing, there are no zigzags.

    For numbers = [1000000000, 1000000000, 1000000000], the output should be solution(numbers) = [0].

    Since all the elements of numbers are the same, there are no zigzags.

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.integer numbers

    An array of integers.

    Guaranteed constraints:
    3 ≤ numbers.length ≤ 100,
    1 ≤ numbers[i] ≤ 109.

    [output] array.integer

    Return an array, where the ith element equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

************************************************************************************************************************

You are given a string s. Consider the following algorithm applied to this string:

    Take all the prefixes of the string, and choose the longest palindrome between them.
    If this chosen prefix contains at least two characters, cut this prefix from s and go back to the first step with the updated string. Otherwise, end the algorithm with the current string s as a result.

Your task is to implement the above algorithm and return its result when applied to string s.

Note: you can click on the prefixes and palindrome words to see the definition of the terms if you're not familiar with them.

Example

    For s = "aaacodedoc", the output should be solution(s) = "".
        The initial string s = "aaacodedoc" contains only three prefixes which are also palindromes - "a", "aa", "aaa". The longest one between them is "aaa", so we cut if from s.
        Now we have string "codedoc". It contains two prefixes which are also palindromes - "c" and "codedoc". The longest one between them is "codedoc", so we cut if from the current string and obtain the empty string.
        Finally the algorithm ends on the empty string, so the answer is "".

    For s = "codesignal", the output should be solution(s) = "codesignal".
    The initial string s = "codesignal" contains the only prefix, which is also palindrome - "c". This prefix is the longest, but doesn't contain two characters, so the algorithm ends with string "codesignal" as a result.

    For s = "", the output should be solution(s) = "".

Input/Output

    [execution time limit] 4 seconds (js)

    [input] string s

    A string consisting of English lowercase letters.

    Guaranteed constraints:
    0 ≤ s.length ≤ 1000.

    [output] string

    The result of the described algorithm.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

************************************************************************************************************************

Given a matrix of integers, we'd like to consider the sum of the elements within the area of a 45° rotated rectangle. More formally, the area is bounded by two diagonals parallel to the main diagonal and two diagonals parallel to the secondary diagonal. The dimensions of the rotated rectangle are defined by the number of elements along the borders of the rectangle.

dimensions

Given integers a and b representing the dimensions of the rotated rectangle, and matrix (a matrix of integers), your task is to find the greatest sum of integers contained within an a x b rotated rectangle.

Note: The order of the dimensions is not important - consider all a x b and b x a rectangles.

Example

    For

    matrix = [[1, 2, 3, 4, 0],
              [5, 6, 7, 8, 1],
              [3, 2, 4, 1, 4],
              [4, 3, 5, 1, 6]]

    a = 2, and b = 3, the output should be solution(matrix, a, b) = 36.

    example 1

    For

    matrix = [[-2, 3, 5, -1],
              [4, 3, -10, 10]]

    a = 1, and b = 1, the output should be solution(matrix, a, b) = 10.

    example 2

    The rotated rectangle with dimensions 1x1 is just one element, so the answer is the maximal element in matrix.

    For

    matrix = [[-2, 3],
              [4, 3]]

    a = 1, and b = 2, the output should be solution(matrix, a, b) = 7.

    example 3

Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.array.integer matrix

    A matrix of integers.

    Guaranteed constraints:
    1 ≤ matrix.length, matrix[i].length ≤ 50,
    -103 ≤ matrix[i][j] ≤ 103.

    [input] integer a

    The first rotated rectangle dimension.

    Guaranteed constraints:
    1 ≤ a ≤ 25.

    [input] integer b

    The second rotated rectangle dimension.
    It's guaranteed that at least one rotated rectangle will fit in the given matrix.

    Guaranteed constraints:
    a ≤ b ≤ 25.

    [output] integer

    The maximal sum of elements of a rotated rectangle with dimensions a and b.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}



