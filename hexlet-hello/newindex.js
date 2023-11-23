const getIntersectionOfSortedArrays = (array1, array2) => {
    if (array1.length === 0 || array2.length === 0) {
      return [];
    }
    const general = [];
    let i = 0;
    while (i < array1.length) {
      for (let j = 0; j < array2.length; j += 1) {
        if (array2[j] === array1[i]) {
          general.push(array1[i]);
        }
        if (j === array2.length - 1) {
          i += 1;
        }
      }
    }
    const generalnew = new Set(general);
    return Array.from(generalnew);
  };
  console.log(getIntersectionOfSortedArrays([1, 25, 77, 30, 46], [3, 98, 1, 34, 46, 55, 77]));