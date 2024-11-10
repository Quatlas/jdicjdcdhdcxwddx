import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footbar';

const About = () => {
  // const tech = [['Sohel Bagawan', 'CAED Lead', 'https://www.linkedin.com/in/sohel-bagban-758406214', '/images/team/sohel.jpg'], ['Arjun V', 'CAED', 'https://www.linkedin.com/in/arjun-v-pac?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '/images/team/arjun.jpg'], ['Utkarsh Goel', 'CAED', 'https://www.linkedin.com/in/cosplayinghuman/', '/images/team/'], ['Abhay Maheshwari', 'CAED', 'https://www.linkedin.com/in/abhay-maheshwari-9235522a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '/images/team/abhay.jpg'], ['Tushar PR', 'CAED', '', '/images/team/tushar.jpg'], ['Vignesh Iyer', 'CAED', '', '/images/team/vignesh.jpg'], ['Aditya Prakash', 'CAED', '', '/images/team/']];
  // const conceptual = [['Adhiraj Singh', 'Conceptual Subsystem', '', '/images/team/adhiraj.jpg'], ['Aditya Srivatsava', 'Conceptual Subsystem', '', '/images/team/aditya srivatsava.jpg'],];
  // const nonTech = [['Pavan A', 'Non Tech Lead', '', '/images/team/pavan.jpg'], ['Farheen Akhtar', 'Non Tech', '', '/images/team/farheen.jpg'], ['Surabi G M', 'Non Tech', 'https://www.linkedin.com/in/surabi-maya-413782287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '/images/team/surabi.jpg']];
  const [cvc, setCvc] = useState([]);
  const [tech, setTech] = useState([]);
  const [conceptual, setConceptual] = useState([]);
  const [nonTech, setNontech] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        setLoad(true)
        const url = process.env.REACT_APP_ENDPOINT01;
        const addedResponse = await fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json"
          }
        });
        const addedData = await addedResponse.json();
        setCvc(addedData[addedData.length - 1].teamInfo[0].details);
        setTech(addedData[addedData.length - 1].teamInfo[1].details);
        setConceptual(addedData[addedData.length - 1].teamInfo[2].details);
        setNontech(addedData[addedData.length - 1].teamInfo[3].details)
      } catch (error) {

      }
      finally {
        setLoad(false)
      }
    }
    get()
  }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <div class="quatlas-ab">
          <h1 class="quatlas-hg">About Us</h1>
        </div>
        <div class="quatlas-info">
          <div class="quatlas-info-01">
            <p class="quatlas-p-01">Allow me to introduce Quatlas, the official aeromodelling team of MSRIT (M S Ramaiah
              Institute of Technology), a source of immense pride and a testament to innovative spirit. We as a club that
              knows no boundaries, reaching across geographical limits to showcase our engineering creativity on the global
              competition stage. Within our institution, we stand alone as a group dedicated to aeronautical pursuits,
              designing aircraft that elegantly navigate the skies.</p>
            <p class="quatlas-p-02">We compete in the prestigious SAE Aero Design Competition, a proving ground for our
              expertise in Aerodynamics. We're not just participants; we're torchbearers, representing the spirit of our
              college and the nation as a whole.</p>
            <p class="quatlas-p-03">Quatlas, hailing from the esteemed M S Ramaiah Institute of Technology, stands as a
              beacon of innovation and accomplishment in the realm of aeromodelling. Rooted within the academic tapestry of
              the institution, Quatlas represents a dynamic collective of passionate individuals dedicated to pushing the
              boundaries of engineering and aviation.</p>
            <p class="quatlas-p-04">Throughout its journey, Quatlas has carved a distinguished path, adorned with notable
              achievements that showcase their exceptional prowess. With a commitment to engineering excellence, the team
              has consistently demonstrated their mettle on the global stage of aeromodelling competitions. Their creations,
              crafted with precision and ingenuity, have taken flight to embody the very essence of innovation, often
              capturing top honors and accolades.</p>
          </div>
        </div>
        <div class="our-team">
          <img src="/images/group image.jpg" alt="" class="team" />
        </div>
      </section>
      <section>
        <div class="quatlas-ss" id="team">
          <h2 class="quatlas-ss-hd">Our Team</h2>
          <p class="quatlas-ss-info"></p>
        </div>

        <div className="card-container">
          {load ? (
            <div className="loading">
              <div className="loading-wide">
                <div className="l1 color"></div>
                <div className="l2 color"></div>
                <div className="e1 color animation-effect-light"></div>
                <div className="e2 color animation-effect-light-d"></div>
                <div className="e3 animation-effect-rot">X</div>
                <div className="e4 color animation-effect-light"></div>
                <div className="e5 color animation-effect-light-d"></div>
                <div className="e6 animation-effect-scale">*</div>
                <div className="e7 color"></div>
                <div className="e8 color"></div>
              </div>
            </div>
          ) : (
            cvc.map((team) =>
              <>
                <div class="quatlas-card">
                  <img src={team.img} alt="Image description" />

                  <div class="quatlas-card-content">
                    <h2 className='quatlas-c-hd'>{team.name}</h2>
                    <p className='quatlas-role'>{team.role}</p>
                    <a href={team.linkedin} className="linkedin">
                      <button
                        href="#"
                        class="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-#1c2237/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                        style={{ backgroundColor: "#1c2237" }}>
                        <span
                          class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                        ></span>
                        <div class="flex items-center">
                          <span class="ml-1 text-white">LinkedIn</span>
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </>
            )
          )}

        </div>
      </section>
      <div class="quatlas-t-hd">
        <h2 class="quatlas-hd-01">Technical Members</h2>
      </div>
      <div className="card-container">
        {load ? (
          <div className="loading">
            <div className="loading-wide">
              <div className="l1 color"></div>
              <div className="l2 color"></div>
              <div className="e1 color animation-effect-light"></div>
              <div className="e2 color animation-effect-light-d"></div>
              <div className="e3 animation-effect-rot">X</div>
              <div className="e4 color animation-effect-light"></div>
              <div className="e5 color animation-effect-light-d"></div>
              <div className="e6 animation-effect-scale">*</div>
              <div className="e7 color"></div>
              <div className="e8 color"></div>
            </div>
          </div>
        ) : (
          tech.map((team) =>
            <>
              <div class="quatlas-card">
                <img src={team.img} alt={team.name} />
                <div class="quatlas-card-content">
                  <h2 className='quatlas-c-hd'>{team.name}</h2>
                  <p className='quatlas-role'>{team.role}</p>
                  <a href={team.linkedin} className="linkedin">
                    <button
                      href="#"
                      class="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-#1c2237/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                      style={{ backgroundColor: "#1c2237" }}>
                      <span
                        class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                      ></span>
                      <div class="flex items-center">
                        <span class="ml-1 text-white">LinkedIn</span>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </>
          ))}
      </div>
      <div class="quatlas-t-hd">
        <h2 class="quatlas-hd-01">Conceptual Subsystem Members</h2>
      </div>
      <div className="card-container">
        {load ? (
          <div className="loading">
            <div className="loading-wide">
              <div className="l1 color"></div>
              <div className="l2 color"></div>
              <div className="e1 color animation-effect-light"></div>
              <div className="e2 color animation-effect-light-d"></div>
              <div className="e3 animation-effect-rot">X</div>
              <div className="e4 color animation-effect-light"></div>
              <div className="e5 color animation-effect-light-d"></div>
              <div className="e6 animation-effect-scale">*</div>
              <div className="e7 color"></div>
              <div className="e8 color"></div>
            </div>
          </div>
        ) : (
          conceptual.map((team) =>
            <>
              <div class="quatlas-card">
                <img src={team.img} alt={team.name} />
                <div class="quatlas-card-content">
                  <h2 className='quatlas-c-hd'>{team.name}</h2>
                  <p className='quatlas-role'>{team.role}</p>
                  <a href={team.linkedin} className="linkedin">
                    <button
                      href="#"
                      class="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-#1c2237/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                      style={{ backgroundColor: "#1c2237" }}>
                      <span
                        class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                      ></span>
                      <div class="flex items-center">
                        <span class="ml-1 text-white">LinkedIn</span>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </>
          ))}
      </div>
      <div class="quatlas-t-hd">
        <h2 class="quatlas-hd-01">Non Technical Members</h2>
      </div>
      <div className="card-container">
        {load ? (
          <div className="loading">
            <div className="loading-wide">
              <div className="l1 color"></div>
              <div className="l2 color"></div>
              <div className="e1 color animation-effect-light"></div>
              <div className="e2 color animation-effect-light-d"></div>
              <div className="e3 animation-effect-rot">X</div>
              <div className="e4 color animation-effect-light"></div>
              <div className="e5 color animation-effect-light-d"></div>
              <div className="e6 animation-effect-scale">*</div>
              <div className="e7 color"></div>
              <div className="e8 color"></div>
            </div>
          </div>
        ) : (
          nonTech.map((team) =>
            <>
              <div class="quatlas-card">
                <img src={team.img} alt={team.name} />
                <div class="quatlas-card-content">
                  <h2 className='quatlas-c-hd'>{team.name}</h2>
                  <p className='quatlas-role'>{team.role}</p>
                  <a href={team.link} className="linkedin">
                    <button
                      href="#"
                      class="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-#1c2237/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
                      style={{ backgroundColor: "#1c2237" }}>
                      <span
                        class="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                      ></span>
                      <div class="flex items-center">
                        <span class="ml-1 text-white">LinkedIn</span>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </>
          ))}
      </div>
      <Footer />
    </>
  )
}

export default About
