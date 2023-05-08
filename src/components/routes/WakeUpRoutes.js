import { Routes, Route } from "react-router-dom";
import AboutUs from "../aboutUs/AboutUs";
import Catalog from "../catalog/Catalog";
import Contact from "../contact/Contact";
import Exchange from "../exchange/Exchange";
import PaymentAndDelivery from "../paymentANAdelivery/PaymentAndDelivery";
import Home from "../home/Home";
import BazovaBilizna from "../bazovaBilizna/BazovaBilizna";
import Swimsuit from "../swimsuit/Swimsuit";
import SummerSuits from "../summerSuits/SummerSuits";

export default function WakeUpRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/payment" element={<PaymentAndDelivery />} />
            <Route path="/bazovaBilizna" element={<BazovaBilizna />} />
            <Route path="/swimsuit" element={<Swimsuit />} />
            <Route path="/summerSuits" element={<SummerSuits />} />
        </Routes>
    );

}