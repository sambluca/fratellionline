import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/App.css";
import Header from "./Header";

const loremIpsum = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci
    felis. In dui ligula, aliquet quis magna ac, pulvinar dignissim justo.
    Aliquam vehicula commodo sem, fermentum porttitor lacus maximus id. Mauris
    vehicula commodo diam quis pharetra. Nunc et augue at nisi scelerisque
    placerat. Maecenas aliquam, eros vitae luctus maximus, nibh orci faucibus
    neque, a ornare nulla lorem a purus. Integer vulputate lorem eget nisi
    ullamcorper maximus. Sed et nisi ac velit facilisis congue. Maecenas mi
    nunc, aliquet a eros id, bibendum dignissim augue. Duis sed scelerisque
    risus. Etiam luctus, mi at fermentum mattis, mauris libero congue felis, id
    sodales elit mauris at sem. Sed in ante ac lorem tincidunt aliquam. Sed id
    vestibulum purus. Vivamus feugiat arcu at dui maximus vehicula. Aliquam
    pulvinar pulvinar neque in efficitur. Curabitur lectus risus, pellentesque
    tempor mattis tempor, dignissim non odio. Quisque quam risus, porttitor eget
    massa malesuada, posuere bibendum libero. In cursus ac velit non placerat.
    Etiam iaculis imperdiet dictum. Mauris vehicula lobortis enim quis
    consectetur. Vivamus sit amet congue tellus, non malesuada orci.
    Pellentesque eu est rhoncus, fermentum mi sed, elementum urna. Phasellus
    volutpat aliquam purus ut dapibus. Duis porttitor nisi sit amet rhoncus
    mattis. Sed ac molestie lorem, et vestibulum velit. Vivamus sit amet
    fermentum nibh. Mauris tempus sed nibh sit amet ornare. Integer vitae eros
    eros. Nullam aliquam tincidunt tortor in pulvinar. Aenean ac pulvinar dui.
    Pellentesque auctor est eleifend, euismod felis eget, imperdiet est. In id
    tortor non enim hendrerit congue sit amet eget dui. Suspendisse placerat sem
    sed dictum porta. Aenean purus magna, ornare sit amet libero et, bibendum
    aliquam eros. Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Nulla eu magna nec diam convallis laoreet
    at at sapien. Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Vivamus sed pellentesque lacus. Sed ut
    ligula lectus. Nunc rhoncus porttitor neque ac rutrum. Morbi tristique neque
    eu sapien semper, vel vulputate leo ullamcorper. Cras ultricies aliquet
    ligula quis eleifend. Duis facilisis nibh vel diam vehicula semper. Vivamus
    venenatis metus a tempor ultricies. Quisque lobortis ex vel nulla viverra
    pretium. Duis maximus mi eget lacinia tempor. Vestibulum ultrices eros nibh,
    vel tempus purus venenatis sed. Vivamus quis nunc lacinia, tempus dui ac,
    sagittis lectus. In fermentum ante ut tellus imperdiet tincidunt. Vivamus
    fringilla nunc ac sodales venenatis. Duis interdum suscipit dictum. Mauris
    id diam vel nulla mollis cursus. Suspendisse ullamcorper tempor mi, et
    tristique arcu congue eu. In ut mauris libero. Suspendisse ut erat blandit,
    rutrum nisl sit amet, pellentesque massa. Nullam vehicula feugiat diam,
    vitae tincidunt dolor ultrices scelerisque. Quisque lobortis blandit
    tincidunt. Vivamus arcu leo, tempus at nisi nec, dictum commodo dui.
  </p>
);
function Index(stuff) {
  return (
    <div>
      <h2>Home</h2>
      {loremIpsum()}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Us</h2>
      {loremIpsum()}
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}

function Products() {
  return (
    <div>
      <h2>Products</h2>
      {loremIpsum()}
    </div>
  );
}

function GiftSets() {
  return (
    <div>
      <h2>Gift Sets</h2>
      {loremIpsum()}
    </div>
  );
}

function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
      {loremIpsum()}
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app-container">
          <Header />
          <div className="fo-content-body">
            <Route path="/" exact component={Index} />
            <Route path="/about-us/" component={About} />
            <Route path="/products/" component={Products} />
            <Route path="/american-crew-gift-sets/" component={GiftSets} />
            <Route path="/contact-us/" component={ContactUs} />
          </div>
        </div>
      </Router>
    );
  }
}

// HOME ABOUT US BARBER SHOP PRODUCTS AMERICAN CREW GIFT SETS CONTACT US

export default App;
