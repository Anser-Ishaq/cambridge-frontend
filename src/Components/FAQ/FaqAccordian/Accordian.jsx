import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { BsArrowRight } from "react-icons/bs";
import waves from "./../../Images/stepsImg.png"
import "./Accordian.css";
function Faqaccordian() {
  return (
    <>
    <div id='Accordian' className="accordian-wave">
        <img className="accordian-wave--inner" src={waves} alt="" />
    </div>
      <div className="accordian-container">
        <div className="accordian-title">Common Questions</div>
        <div className="accordian-main">
          <div className="accordian-left">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Why Ace Med Admission?</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      We are current international students who have
                      successfully applied, gained admission, and are studying
                      medicine in Romania. We have up to date and personal
                      knowledge of the universities, application process,
                      educational system, and everything else involved in
                      getting set up as a student.
                    </li>
                    <li>
                      We are here on the ground to get the paperwork done
                      professionally, not via unknown third parties.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Can you guarantee acceptance into a medical university?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Nobody can guarantee admission, any claims made by others
                      stating this are misleading.
                    </li>
                    <li>
                      That said, the level of grades required, and competition
                      for places is often significantly lower, again depending
                      on the university you wish to apply for.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Why Romania?</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Admission is extremely competitive and difficult in our
                      own home countries. The barriers to entry here are
                      significantly lower, offering you a chance to achieve your
                      ambition to be admitted to medical school and become a
                      future doctor, at an affordable price.
                    </li>

                    <li>
                      Furthermore the cost of living is cheaper than nearly
                      every other European country.
                    </li>
                    <li>
                      Romania’s medical degrees are automatically accepted
                      across the Eu, Ireland, UK and recognised around the rest
                      of the world.
                    </li>
                    <li>
                      People in Romania have a high level of English
                      proficiency, particularly compared to other Eastern
                      European countries.
                    </li>
                    <li>
                      The Romanian language is a romance language, uses the
                      Latin alphabet, and predominantly Latin derived
                      vocabulary, as opposed to Slavic languages (e.g. Poland,
                      Bulgaria, Croatia, Serbia, Macedonia, etc.. with some,
                      having a completely different alphabet).
                    </li>
                    <li>
                      There is also a heavy influence of Latin and French in
                      English, so a basic course in Romanian will enable you to
                      engage with patients in the hospital, and locals alike.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  When is the deadline for application?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Studying in Romania is becoming more popular for students
                      from all over the world.
                    </li>
                    <li>
                      The time for evaluation of documents by universities
                      varies greatly, as does the length of time it can take to
                      get your file prepared.
                    </li>
                    <li>
                      To facilitate you having the best chance possible, we
                      recommend you provide your documents to us as soon as you
                      have them available to you, as this can greatly increase
                      the likelihood of your application being successful, and
                      you being admitted.
                    </li>
                    <li>
                      The earlier you submit your application and file to us the
                      better the chance you have.
                    </li>
                    <li>It’s that simple!</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Can graduates apply?</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Yes. Science and health related degrees add to your
                      application, however we recommend you talk to us, as this
                      varies by the university you wish to apply to.
                    </li>
                    <li>
                      Is there an entrance Exam/ University application
                      Interview? This depends on the university you wish to
                      apply to. Some do, some don’t. Unless you are from a
                      country where English is the official language, and the
                      language of your education, you will be required to sit an
                      English language admission test, or provide certification
                      results as part of your application. You may also need to
                      complete a separate English language proficiency exam
                      prior to admission.
                    </li>
                    <li>Talk to us for further details.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  I don't know the local language. Should I still apply?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Absolutely!</li>
                    <li>
                      English is the language of instruction and will be the
                      common language among all the international students.
                    </li>
                    <li>
                      Almost all applicants don’t speak Romanian. Students from
                      all over the world apply and get accepted and learn any
                      required linguistic skills after arrival. Quite often
                      patients speak English, however, not all do, especially
                      older patients. These patient interactions are translated
                      to you into English by the doctor or professor who is
                      teaching you.
                    </li>
                    <li>
                      As part of your studies, you will learn enough of the
                      basics to be able to interact with the patients on a basic
                      level with minimal effort, however, the better you know
                      the language the more independent patient interaction you
                      can have.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>
                  Will I need to learn the local language?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Learning the local language will be beneficial to you.
                      However, having only a basic command of the language will
                      not be a barrier to passing
                    </li>
                    <li>
                      All Staff, lessons and instruction is in English, exams
                      will be in English. All ancillary staff have a high level
                      of English.
                    </li>
                    <li>
                      Learning Romanian after admission will be beneficial as
                      not all patients speak English.
                    </li>
                    <li>
                      To maximise your practical experience in hospital, and to
                      enjoy life here it is recommended to engage with your
                      Romanian language classes fully. You will not be expected
                      to be proficient in the language and many students get by
                      with minimal local language skills.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="accordian-right">
            <Accordion>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  What is the language used in clinical practice?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      A lot of young people know English, but the older people
                      are generally not fluent.
                    </li>
                    <li>
                      You will have classes in the basics of the local language
                      for the first two or three years of your degree to meet
                      the basic level of proficiency.
                    </li>
                    <li>
                      In addition to this, your professor or assistant will be
                      helping you by translating what the patient says into
                      English, so you’ll fully understand what’s going on.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Do I need visa to Study in Romania?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      EU students do not need a visa to travel to study in EU
                      countries.
                    </li>
                    <li>
                      Students From outside the EU will need a visa to travel to
                      EU countries, we will assist you with your visa
                      application.
                    </li>
                    <li>
                      For non-EU students visas are conditional on full
                      acceptance from the university.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  How can I find somewhere to live?
                </Accordion.Header>
                <Accordion.Body>
                  We can support you with finding private accommodation or you
                  can liase with the international students department to
                  arrange accommodation upon acceptance.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  Where will my degree be accepted?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Your degree will be automatically recognised across the
                      Eu!
                    </li>
                    <li>
                      For other countries we recommend you check with the
                      medical licencing authority of your own country.
                    </li>
                    <li>
                      The schools we recommend are fully recognised and
                      accredited by the Romanian ministry of education and are
                      recognised by the World Directory of medical schools.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  Can I transfer to an EU / Romanian University from outside the
                  EU or another European university?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Yes. This is possible.</li>
                    <li>
                      The application procedure to transfer is a similar process
                      to general admission and Romanian universities accept
                      transfer students from outside the country, so we can help
                      you with this.
                    </li>
                    <li>
                      Depending on your stage of studies transfer may be
                      possible.
                    </li>
                    <li>Contact us for further details.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  Is there an entrance Exam/ University application Interview?
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      This depends on the university you wish to apply to. Some
                      do, some don’t. Unless you are from a country where
                      English is the official language, and the language of your
                      education, you will be required to sit an English language
                      admission test, or provide certification results as part
                      of your application. You may also need to complete a
                      separate English language proficiency exam prior to
                      admission.
                    </li>
                    <li>Talk to us for further details.</li>
                  </ul>
                  
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqaccordian;
