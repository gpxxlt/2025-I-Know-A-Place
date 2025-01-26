import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { Dialog, DialogContent } from '@material-ui/core';

import styles from './StoryMapView.module.css';
import StorySubmit from '../StorySubmit/StorySubmit';

const markerIcon = L.icon({
    iconUrl: process.env.PUBLIC_URL + '/marker.svg',
    // shadowUrl: 'leaf-shadow.png',
    iconSize: [32, 32], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
});

const position = [40.442, -79.942];

function ClickComponent({ selectionMarker, setSelectionMarker, handleClickOpen }) {
    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setSelectionMarker({ lat, lng });
            setTimeout(() => {
                handleClickOpen(true);
            }, 300);
        },
    });

    if (selectionMarker) {
        return (
            <Marker position={selectionMarker} icon={markerIcon} />
        )
    }

    return null;
    }

    function StoryMapView() {
        const [allStories, setAllStories] = useState(null);
        const [selectionMarker, setSelectionMarker] = useState(null);
        const [open, setOpen] = useState(false);

        useEffect(() => {
            (async function () {
                // Mock dataset simulating Firestore documents
                const allData = [
                    {
                        id: "doc1",
                        data: ({
                            approved: true,
                            title: "A Day in the Park",
                            description: "An amazing story of friendship and adventure.",
                            latLong: { lat: 40.442, lng: -79.942 },
                        }),
                    },
                    {
                        id: "doc2",
                        data: ({
                            approved: false,
                            title: "An Unapproved Story",
                            description: "This story is not yet approved.",
                            latLong: { lat: 34.052235, lng: -118.243683 },
                        }),
                    },
                    {
                        id: "doc3",
                        data: ({
                            approved: true,
                            title: "The Mountain Adventure",
                            description: "Climbing the highest peaks.",
                            latLong: { lat: 46.852308, lng: -121.760323 },
                        }),
                    },
                    {
                        id: "doc4",
                        data: ({
                            approved: true,
                            title: "City Lights",
                            description: "A beautiful night in the city.",
                            latLong: { lat: 51.507351, lng: -0.127758 },
                        }),
                    },
                ];
        
                // Update state
                console.log("Transformed Stories:", allData); // Debugging step
                setAllStories(allData);
            })();
        }, []);
        
        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = (e) => {
            setOpen(false);
        };

        return (
            <div className={styles.container}>
                <MapContainer className={styles.map} center={position} zoom={16} scrollWheelZoom={true}>
                    <ClickComponent
                        selectionMarker={selectionMarker}
                        setSelectionMarker={setSelectionMarker}
                        handleClickOpen={handleClickOpen}
                    />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                    />
                    <MarkerClusterGroup>
                    {allStories?.map(({ data, id }) => (
                        <Marker key={id} position={data.latLong} icon={markerIcon}>
                            <Popup className={styles.popup}>
                                {data.title && data.title !== "" ? <b>{data.title}<br /></b> : ""}
                                <i>{prompt}</i>
                                <br />
                                {data.description}
                            </Popup>
                        </Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
                <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                        <StorySubmit latLong={selectionMarker} />
                    </DialogContent>
                </Dialog>
            </div>
        )
    }

    export default StoryMapView;
