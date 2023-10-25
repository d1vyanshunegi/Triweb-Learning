function mergeSort(arr) {
    const temp = [];
  
    for (let i = 0; i < arr.length; i++) {
      temp.push([arr[i]]);
    }
  
    while (temp.length > 1) {
      const left = temp.pop();
      const right = temp.pop();
      temp.push(merge(left, right));
    }
  
    return temp[0];
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result;
  }

  
  const arr = [3, 8, 9, 0, 2, 1, 6];
  console.log(mergeSort(arr));