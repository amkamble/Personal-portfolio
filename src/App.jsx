import Intro from "./components/intro/Intro";
import Projects from "./components/Project/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {
  return (
    <>
      <WhatsAppButton 
          phoneNumber="+917410749200" 
          message="Hello !"
        />
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
