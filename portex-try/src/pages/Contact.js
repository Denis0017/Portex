import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const mapStyles = {
  height: "300px",
  width: "100%",
};

const defaultCenter = {
  lat: 28.7041,
  lng: 77.1025,
};

const Contact = () => (
  <div className="p-10">
    <h1 className="text-3xl font-bold">Contact Us</h1>
    <p>Email: info@portextry.com</p>
    <p>Phone: +91 12345 67890</p>
    <p>Follow us:
      <FaFacebook className="inline mx-2" />
      <FaTwitter className="inline mx-2" />
      <FaLinkedin className="inline mx-2" />
    </p>
    <div className="h-64 w-full mt-4">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={11}>
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  </div>
);

export default Contact;