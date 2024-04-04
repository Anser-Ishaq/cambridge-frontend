import { MdOutlineAssignmentInd } from "react-icons/md";
import { SlDocs } from "react-icons/sl";
import { FaUniversity } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

const RefcardArr = [
  {
    RefcardTitle: "Step 1:",
    RefcardIcon: <MdOutlineAssignmentInd size={45} />,
    RefcardDetail:
      "Sign up and give details of yourself and the person you are referring",
  },
  {
    RefcardTitle: "Step 2:",
    RefcardIcon: <SlDocs size={45} />,
    RefcardDetail: "Referred person completes application",
  },
  {
    RefcardTitle: "Step 3:",
    RefcardIcon: <FaUniversity size={45} />,
    RefcardDetail:
      "The referred applicant successfully is admitted to university",
  },
  {
    RefcardTitle: "Step 4:",
    RefcardIcon: <MdAttachMoney size={45} />,
    RefcardDetail: "Money",
  },
];
export default RefcardArr;
