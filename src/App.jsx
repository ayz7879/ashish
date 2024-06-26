import React from "react";
import PersonalDetails from "./components/PersonalDetails";
import ProductDetails from "./components/ProductDetails";
import AppointMent from "./components/AppointMent";
import PaymentInformation from "./components/PaymentInformation";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <PersonalDetails />
      <ProductDetails />
      <PaymentInformation />
      <AppointMent />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default App;
