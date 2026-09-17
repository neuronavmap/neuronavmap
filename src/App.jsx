import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import './App.css'


export default function App() {
  return (
    <div>
      <Header />

      <Navbar />

      <main id="about">
        <div>
          <p className="about-header">PROJECT INFORMATION</p>
          <p>
            What does it actually feel like to find your way through a university campus?
            <br />
            <br />
            NeuroNav explores how neurodivergent students experience navigation through their senses, bodies, and emotions. As you move through a space, you’re constantly taking in information (sounds, smells, textures, lighting, people, signs, changes in the environment), and using that information to figure out where to go next.
            <br />
            <br />
            For this study, students navigated York University’s Keele campus while sharing what they noticed, where their attention was drawn, what felt comfortable or uncomfortable, and moments when they felt confident, uncertain, or stuck. Eye-tracking and other biometric data were also used alongside these personal observations to capture aspects of the experience that might otherwise be difficult to see.
            <br />
            <br />
            The map you’re looking at brings these different layers together. Rather than showing navigation as simply a path from A to B, it reveals some of the sensory, emotional, and physical experiences that shape how someone moves through a space.
            <br />
            <br />
            Take a look around the map and explore the moments, places, and experiences that emerged along the way. Allow yourself to be immersed in the multi-sensorial experience of navigation, feel free to try out different layers and combinations and see what interesting things you might notice!
            <br />
            <br />
            <i>Please note, this website is primarily optimized for desktop use. Map visibility may be decreased on mobile devices.</i>
          </p>
        </div>
        <div>
          <p className="about-header">ACKNOWLEDGEMENTS</p>
          <p>
            This work was undertaken thanks in part to funding from the Connected Minds program, supported by the Canada First Research Excellence Fund, grant #CFREF-2022-00010.
            <br />
            <br />
            We acknowledge the support of the Natural Sciences and Engineering Research Council of Canada (NSERC) / Nous remercions le Conseil de recherches en sciences naturelles et en génie du Canada (CRSNG) de son soutien.
            <br />
            <br />
            Support was provided in part by a Tier 2 York Research Chair in Accessible Interaction Design. 
          </p>
          <p className="about-header">CONTACT</p>
          <p>
            If you have any questions or want more information about the project, reach out to me (RJ) at rjremesa@yorku.ca :) 
          </p>
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  );
}
  