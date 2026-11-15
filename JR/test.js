import fs from 'fs';
import { geoEquirectangular, geoPath } from 'd3-geo';

try {
  const rawData = fs.readFileSync('./src/assets/world-110m.json', 'utf8');
  const worldData = JSON.parse(rawData);
  
  console.log('Successfully parsed world-110m.json');
  console.log('Total features:', worldData.features.length);
  
  const projection = geoEquirectangular()
    .scale(150)
    .translate([485, 305]);
    
  const pathGenerator = geoPath().projection(projection);
  
  let validPaths = 0;
  for (let i = 0; i < worldData.features.length; i++) {
    const feature = worldData.features[i];
    const d = pathGenerator(feature);
    if (d) {
      validPaths++;
    }
  }
  
  console.log('Paths generated successfully:', validPaths, 'out of', worldData.features.length);
  
} catch (err) {
  console.error('Error running test:', err);
}
