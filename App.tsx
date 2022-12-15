// eslint-disable-next-line react/jsx-no-undef
import React, { useState } from "react";
import Login from "./component/LoggedOut/pages/Authentication/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,

} from "react-router-dom";
import AuthRoute from "./component/AuthRoute";
import LandingPage from "./component/LoggedOut/LandingPage";
import AdminDashboard from "./component/LoggedIn/AdminView/AdminDashboard";
import { AppApi } from "./Shared/Apis/AppApi";
import AppStore from "./Shared/stores/AppStore";
import { AppContext, useAppContext } from "./component/Context";
import Banner from "./component/LoggedIn/AdminView/Banner/Banner";
import { AnimatePresence } from "framer-motion";
import PurchaseSummary from "./component/LoggedIn/AdminView/Manage/PurchaseSummary/PurchaseSummary";
import PurchaseSuccessful from "./component/LoggedIn/ClientView/Cart/PurchaseSuccessful";
import Account from "./component/LoggedIn/ClientView/ClientProfile/Account";
import Product from "./component/LoggedIn/ClientView/ProductPurchaseOperations/Product";
import Promotion from "./component/LoggedIn/ClientView/Promotion/Promotion";
import Carpet from "./component/LoggedIn/ClientView/Services/ServiceComponents/Carpet/Carpet";
import Indoor from "./component/LoggedIn/ClientView/Services/ServiceComponents/Indoor/Indoor";
import Laundry from "./component/LoggedIn/ClientView/Services/ServiceComponents/Laundry/Laundry";
import Mattress from "./component/LoggedIn/ClientView/Services/ServiceComponents/Mattress/Mattress";
import Outdoor from "./component/LoggedIn/ClientView/Services/ServiceComponents/Outdoors/Outdoor";
import Services from "./component/LoggedIn/ClientView/Services/Services";
import ServiceSuccess from "./component/LoggedIn/ClientView/Services/ServiceSuccess";
import { SubscriptionPlan } from "./component/LoggedIn/ClientView/Services/SubscribtionPlans";
import { Form250 } from "./component/LoggedIn/ClientView/Services/SubscriptionForm/Form250";
import About from "./component/LoggedOut/Kosha/About";
import ResetPassword from "./component/LoggedOut/pages/Authentication/ResetPassword";
import SignUp from "./component/LoggedOut/pages/Authentication/SignUp";
import Ironing from "./component/LoggedIn/ClientView/Services/ServiceComponents/Ironing/Ironing";
import Sofa from "./component/LoggedIn/ClientView/Services/ServiceComponents/Sofa/Sofa";
import Store from "./component/LoggedIn/AdminView/Store/Store";
import Service from "./component/LoggedIn/AdminView/Services/Service";
import Manage from "./component/LoggedIn/AdminView/Manage/Manage";
import { Dashboard } from "./component/LoggedIn/AdminView/dasboard";
import StoreCategory from "./component/LoggedIn/AdminView/Store/Categories/Store";
import Indoors from "./component/LoggedIn/AdminView/Services/ServiceType/Indoors/Indoors";
import Outdoors from "./component/LoggedIn/AdminView/Services/ServiceType/Outdoor/Outdoors";
import Sofas from "./component/LoggedIn/AdminView/Services/ServiceType/Sofa/Sofas";
import Mattresses from "./component/LoggedIn/AdminView/Services/ServiceType/Mattress/Mattresses";
import Laundries from "./component/LoggedIn/AdminView/Services/ServiceType/Laundry/Laundries";
import Irons from "./component/LoggedIn/AdminView/Services/ServiceType/Ironing/Irons";
import Carpets from "./component/LoggedIn/AdminView/Services/ServiceType/Carpet/Carpeta";



const store = new AppStore();
const api = new AppApi(store);

function App() {

  return (
    <AppContext.Provider value={{ store, api }}>
      <Router>
        <Routes>
          <Route path="a" element={
            <AuthRoute>
              <AdminDashboard />
            </AuthRoute>
          } >
            <Route path="*" element={<Dashboard />} />
            <Route path="manage" element={<Manage />} />
            <Route path="banner" element={<Banner />} />
            <Route path="store" element={<Store />} />
            {/* <Route path="calender" element={<Calender />} /> */}
            <Route path="store-category" element={<StoreCategory />} />
            <Route path="a-services" element={<Service />} />
            <Route path="a-indoor" element={<Indoors />} />
            <Route path="a-outdoor" element={<Outdoors />} />
            <Route path="a-sofa" element={<Sofas />} />
            <Route path="a-mattress" element={<Mattresses />} />
            <Route path="a-laundry" element={<Laundries />} />
            <Route path="a-ironing" element={<Irons />} />
            <Route path="a-carpet" element={<Carpets />} />

          </Route>

          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>

    </AppContext.Provider>

  );
}

export default App;


export const Routing = () => {
  const { api, store } = useAppContext();
  const location = useLocation();
  return (

    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/client-profile" element={
          <Account />
        } />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/carpet" element={<Carpet />} />
        <Route path="/indoor" element={<Indoor />} />
        <Route path="/ironing" element={<Ironing />} />
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/mattress" element={<Mattress />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/sofa" element={<Sofa />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/success" element={<PurchaseSuccessful />} />
        <Route path="/success-service" element={<ServiceSuccess />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<SubscriptionPlan />} />
        <Route path="/purchase-summary" element={<PurchaseSummary />} />

        {/* <Route path="/banner" element={<Banner />} /> */}
        <Route path="/*" element={<Services />} />
        <Route path="/success-subscription" element={<Form250 />} />
      </Routes>
    </AnimatePresence>
  )




}

export const AdminRouting = () => {

  return (
    <Routes>
      <Route path="/a" element={
        <AuthRoute>
          <AdminDashboard />
        </AuthRoute>
      } />
      <Route path="*" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* <Route path="calender" element={<Calender />} /> */}
      <Route path="manage" element={<Manage />} />
      <Route path="banner" element={<Banner />} />
      <Route path="store" element={<Store />} />
      <Route path="store-category" element={<StoreCategory />} />
      <Route path="a-services" element={<Service />} />
      <Route path="a-services/a-indoor" element={<Indoors />} />
      <Route path="a-services/a-outdoor" element={<Outdoors />} />
      <Route path="a-services/a-sofa" element={<Sofas />} />
      <Route path="a-services/a-mattress" element={<Mattresses />} />
      <Route path="a-services/a-laundry" element={<Laundries />} />
      <Route path="a-services/a-ironing" element={<Irons />} />
      <Route path="a-services/a-carpet" element={<Carpets />} />
    </Routes>
  )


}



















