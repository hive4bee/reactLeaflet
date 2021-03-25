import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {LatLng} from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const center = new LatLng(37.654324, 127.056374)


    return (
        <MapContainer style={{width:"500px", height:"500px"}}
            crs={L.CRS.EPSG3857} center={center} zoom={6}
            >


            <TileLayer  minZoom={6} maxZoom={10}
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {/*<TileLayer  minZoom={6} maxZoom={18}*/}
            {/*            url="https://mt{s}.google.com/vt/lyrs=m&hl&x={x}&y={y}&z={z}"/>*/}
            {/*<Marker position={[51.505, -0.09]}>*/}
            {/*    <Popup>*/}
            {/*        A pretty CSS3 popup. <br/> Easily customizable.*/}
            {/*    </Popup>*/}
            {/*</Marker>*/}
        </MapContainer>);
};

export default Map;