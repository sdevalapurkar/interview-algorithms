function arrayHopper(input_arr) {
  let lReach = 0;
  let curReach = 0;
  let selIndex = 0;
  let hops = [];

  for (let i = 0; i < input_arr.length; i++) {
    if (i > curReach) {
      return 'failure';
    }

    if (i > lReach) {
      lReach = curReach;
      hops.push(selIndex.toString());
    }

    sum = i + input_arr[i];

    if (sum > curReach) {
      selIndex = i;
      curReach = Math.max(curReach, sum);

      if (curReach >= input_arr.length) {
        hops.push(selIndex.toString());
        hops_str = hops.join(', ');
        hops_str = hops_str + ', out';
        return hops_str;
      }
    }

    if ((i > lReach) && hops.length > 0 && parseInt(hops[hops.length - 1]) != selIndex) {
      hops.push(selIndex.toString());
    }

    if (lReach >= input_arr.length) {
      hops_str = hops.join(', ');
      hops_str = hops_str + ', out';
      return hops_str;
    }
  }
}

module.exports = arrayHopper;
