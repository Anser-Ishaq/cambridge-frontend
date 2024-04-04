import {BsPencilSquare } from "react-icons/bs";
import {TiDocumentText} from "react-icons/ti";
import {AiTwotoneCalendar} from "react-icons/ai";

const cardsData = [
    {
        id:"1",
        cardImg:<BsPencilSquare size={45} style={{color:"white", rotate:"270deg"}}/>,
        cardTitle:"How is Ace Med For?",
        cardTag1:"Anyone who wishes to pursue a career in the medical field. ",
        cardTag2:"We cater to aspiring doctors, dentists, Veterinary and Pharmacists.",
        cardTag3:"We provide guidance on options to students seeking advice on making this dream a reality.",
        // cardTag4:"Teachers who want to travel and teach English",
    },
    {
        id:"2",

        cardImg:<TiDocumentText size={50} style={{color:"white"}}/>,
        cardTitle:"Why choose Ace Med?",
        cardTag1:"Seeing the outrageous prices and misleading information from agents, we decided to collaborate to offer an honest, transparent and superior service.",
        cardTag2:"With our application experience and contacts in universities, we will greatly improve your application giving you the best chance of admission.",
        cardTag3: ""
    },
    {
        id:"3",

        cardImg:<AiTwotoneCalendar size={53} style={{color:"white"}}/>,
        cardTitle:"Where the degrees recognised?",
        cardTag1:" Romania’s medical degrees are  are automatically accepted across the EU, Ireland, UK.",
        cardTag2:" They are also recognised around the rest of the world.",
        cardTag3:"Romania has multiple medical universities highly ranked by the Times Higher Education World University Rankings. ",
    },
]

export default cardsData;