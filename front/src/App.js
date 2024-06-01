// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutUs";
import Services from "./pages/services";
import SignUp from "./pages/signup";
import FAQs from "./pages/FAQs";
import Setting from "./pages/setting";
import Forgot from "./pages/Forgot";
import Donationn from "./pages/donationn";
import Login from "./pages/Login";
import Email from "./pages/email";
import Change from "./pages/change";
import NotFound from "./pages/NotFound";
import DonationForm from "./pages/DonationForm";
import Testimonies from "./pages/Testimonies";
import Categories from "./pages/Categories"; // Named import for Categories
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import categoryRoutes from "./categoryRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/signup" component={SignUp} />
        <Route path="/FAQs" component={FAQs} />
        <Route path="/setting" component={Setting} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/donationn" component={Donationn} />
        <Route path="/login" component={Login} />
        <Route path="/email" component={Email} />
        <Route path="/change" component={Change} />
        <Route
          path="/donation-form"
          component={() => <DonationForm UserPfp="" />}
        />
        {categoryRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={() => (
              <Categories
                headerTitle={route.headerTitle}
                iconlink={route.iconlink}
                CanotParagraphe={route.CanotParagraphe}
                bimageUrl={route.bimageUrl}
                category={route.category}
              />
            )}
          />
        ))}
        <Route path="/reviews" component={Testimonies} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
