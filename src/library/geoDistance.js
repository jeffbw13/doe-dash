//  convert two geolocations to distance using haversine formula
function geoDistance = (loc1, loc2, unit) {
  let R = 0;
  switch (unit) {
    case 'k':
      R = 6371; // kilometres;
      break;
    default:
      R = 3958.8;  // statute miles
  }
  const φ1 = loc1[0] * Math.PI/180; // φ, λ in radians
  const φ2 = loc2[0] * Math.PI/180;
  const Δφ = (loc2[0]-loc1[0]) * Math.PI/180;
  const Δλ = (loc2[1]-loc1[1]) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c; // in metres
};

export default geoDistance;