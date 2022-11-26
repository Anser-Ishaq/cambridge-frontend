import {BsPencilSquare } from "react-icons/bs";
import {TiDocumentText} from "react-icons/ti";
import {AiTwotoneCalendar} from "react-icons/ai";

const cardsData = [
    {
        cardImg:<BsPencilSquare size={45} style={{color:"white", rotate:"270deg"}}/>,
        cardTitle:"Who is CELTA for?",
        cardTag1:"New teachers starting their career   ",
        cardTag2:"First-language English speakers and non-first-language speakers",
        cardTag3:"Teachers with some experience who want to develop their skills",
        cardTag4:"Teachers who want to travel and teach English",
    },
    {
        cardImg:<TiDocumentText size={50} style={{color:"white"}}/>,
        cardTitle:"Accreditation",
        cardtag:"  The CELTA is accredited by Cambridge English Language Assessment, part of the University of Cambridge, which makes it prestigious and schools looking to employ you know you have been trained to a high standard.  "
    },
    {
        cardImg:<AiTwotoneCalendar size={53} style={{color:"white"}}/>,
        cardTitle:"Recognition",
        cardtag:"The CELTA is the teaching qualification asked for by 9 out of 10 English language teacher employers in Europe and 7 out of 10 worldwide (source: Cambridge English).  "
    },
]

export default cardsData;