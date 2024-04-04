import { GrDocumentPdf} from "react-icons/gr";
import { MdImportantDevices } from "react-icons/md";
import {MdAttachMoney } from "react-icons/md";
import { FaHandshake} from "react-icons/fa";
import { FaUniversity} from "react-icons/fa";
import {MdOutlinePublishedWithChanges} from "react-icons/md";
import {GrDocumentText} from "react-icons/gr";

const ServiceDetailArr=[
    {
        id:"1",
        serviceStepIcon: <GrDocumentPdf   size={45} />,
        serviceStepTitle: "Step 1:",
        serviceStepPara:"Submit your initial documents for a free pre-evaluation and consultation so we will guide you to find a suitable university.",
      },
      {
        id:"2",
        serviceStepIcon: <FaHandshake  size={45} />,
        serviceStepTitle: "Step 2:",
        serviceStepPara:"After we agree the terms, we can register you on the Student Portal so you can upload all the necessary information and documentation.",
      },
      {
        id:"3",
        serviceStepIcon: <MdImportantDevices  size={45} />,
        serviceStepTitle: "Step 3:",
        serviceStepPara:"Once the Student Portal has been completed and submitted, we can begin legalising, translating, and notarising your application, then submitting documents on your behalf once the admission cycle begins.",
      },
      {
        id:"4",
        serviceStepIcon: <MdAttachMoney size={45} />,
        serviceStepTitle: "Step 4:",
        serviceStepPara:"At the same time we will send you the first invoice for our processing fee of €1000. We need this in order to pay for the translation, legalization, notarisation, university application and government verification fees.",
      },
      {
        id:"5",
        serviceStepIcon: <FaUniversity size={45} />,
        serviceStepTitle: "Step 5:",
        serviceStepPara:"Once we’ve received your documents, we will check them with the university, and we will make sure that everything is complete and correct.",
      },
      {
        id:"6",
        serviceStepIcon: <MdOutlinePublishedWithChanges  size={45} />,
        serviceStepTitle: "Step 6:",
        serviceStepPara:"Your application is then carefully prepared by us and sent to the respective university and the Ministry of Education. We guarantee that your application documents arrive quickly and correctly to the relevant authorities.",
      },
      {
        id:"7",
        serviceStepIcon: <GrDocumentText  size={45} />,
        serviceStepTitle: "Step 7:",
        serviceStepPara:"We will inform you immediately if you have been accepted by the university and we will organise the letter of acceptance for you.",
      },
      {
        id:"8",
        serviceStepIcon: <MdAttachMoney  size={45} />,
        serviceStepTitle: "Step 8:",
        serviceStepPara:"Only when you are accepted,will we send you a second invoice, for our final fee of €1000.We process the registration with the university after full payment of your fee to us, and the payment of the fee required by the university to secure your place. We then assist you with the final process and paperwork required to register you as a student.",
      },
 
]

export default ServiceDetailArr;