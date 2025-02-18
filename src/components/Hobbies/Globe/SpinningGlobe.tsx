import { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { feature } from 'topojson-client';
import { TravelItems as goldCountries } from "../../../data/Hobbies/TravelItems.ts";

const SpinningGlobe = () => {
    const globeEl = useRef();
    const [countries, setCountries] = useState({ features: [] });

    // Load and convert TopoJSON data to GeoJSON
    useEffect(() => {
        fetch('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
            .then(res => res.json())
            .then(topology => {
                const geoJson = feature(topology, topology.objects.countries);
                setCountries(geoJson);
            })
            .catch(err => console.error('Error loading countries:', err));
    }, []);

    // Set the initial point of view to shift the globe to the left.
    useEffect(() => {
        if (globeEl.current) {
            globeEl.current.pointOfView({ lat: 10, lng: 0, altitude: 2 }, 0);
        }
    }, [countries]);

    // Enable auto-rotate via the globe's controls
    useEffect(() => {
        if (globeEl.current && globeEl.current.controls) {
            const controls = globeEl.current.controls();
            controls.autoRotate = true;
            controls.autoRotateSpeed = -1; // Adjust this value for slower or faster rotation
        }
    }, []);


    // Color countries: gold for specific ones, dark grey for the rest.
    const countryColor = (feat) =>
        goldCountries.includes(feat.properties.name)
            ? 'rgb(255, 209, 0)'  // gold color
            : 'rgb(51, 53, 51)';  // dark grey

    return (
        <div>
            <Globe
                ref={globeEl}
                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
                polygonsData={countries.features}
                polygonAltitude={0.01}
                polygonCapColor={countryColor}
                polygonSideColor={() => 'rgb(0, 0, 0)'}
                polygonStrokeColor={() => 'black'}
                polygonsTransitionDuration={300}
                // Show a tooltip with the country's name on hover.
                polygonLabel={({ properties: d }) => `<div style="text-align: center; font-size: 14px; color: white;"><b>${d.name}</b></div>`}
            />
        </div>
    );
};

export default SpinningGlobe;
