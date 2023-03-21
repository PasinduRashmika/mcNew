import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
export const navigationData = {
    data : {
        admin: 
            [
            {
                title:"Home",
                to:"/home",
                icon:HomeOutlinedIcon,
            }, 
            {
                title: "Manage Users",
                to: "/manageusers",
                icon: ManageAccountsOutlinedIcon,
            },{
                title: "View Users",
                to: "/viewusers",
                icon: PersonOutlinedIcon,
            }, {
                title: "View Students",
                to: "/viewstudents",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "Search Student",
                to: "/searchstudent",
                icon: ManageSearchOutlinedIcon,
            },  {
                title: "Update Personal Details",
                to: "/updatepersonal",
                icon: CreateOutlinedIcon,
            }, {
                title: "daily count",
                to: "/dailycount",
                icon: SyncOutlinedIcon,
            }, 
        ]
        ,
        student: [
            {
                title:"Home",
                to:"/home",
                icon:HomeOutlinedIcon,
            },
            {
                title: "Book Appointment",
                to: "/booking",
                icon: BookOnlineOutlinedIcon,
            },
            {
                title: "Doctor Availability",
                to: "/availability",
                icon: MedicationOutlinedIcon,
            },
            {
                title: "View History",
                to: "/history",
                icon: HistoryOutlinedIcon,
            },
            {
                title: "View Personal Details",
                to: "/details",
                icon: DetailsOutlinedIcon,
            },


        ],
        phi : [
            {
                title:"Home",
                to:"/home",
                icon:HomeOutlinedIcon,
            },
            {
                title: "View Students",
                to: "/viewstudents",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "Search Student",
                to: "/searchstudent",
                icon: ManageSearchOutlinedIcon,
            },
            {
                title: "Update Personal Details",
                to: "/updatepersonal",
                icon: CreateOutlinedIcon,
            },



        ],
        receptionist: [
            {
                title:"Home",
                to:"/home",
                icon:HomeOutlinedIcon,
            },
            {
                title: "View Students",
                to: "/viewstudents",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "Search Student",
                to: "/searchstudent",
                icon: ManageSearchOutlinedIcon,
            },
            {
                title: "View Admited Students",
                to: "/viewpatients",
                icon: RemoveRedEyeOutlinedIcon,
            },
            {
                title: "Update Doctor Availability",
                to: "/setavailability",
                icon: MedicationOutlinedIcon,
            },
            {
                title: "Update Personal Details",
                to: "/updatepersonal",
                icon: CreateOutlinedIcon,
            },


        ],
        nurse  : [
            {
                title:"Home",
                to:"/home",
                icon:HomeOutlinedIcon,
            },
            {
                title: "View Students",
                to: "/viewstudents",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "Search Student",
                to: "/searchstudent",
                icon: ManageSearchOutlinedIcon,
            },
            {
                title: "Add Student",
                to: "/addstudent",
                icon: PersonAddOutlinedIcon,
            },
            {
                title: "daily count",
                to: "/dailycount",
                icon: SyncOutlinedIcon,
            },
            {
                title: "Update Personal Details",
                to: "/updatepersonal",
                icon: CreateOutlinedIcon,
            },

        ],
        head: [
            {
                title: "View Students",
                to: "/viewstudents",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "Search Student",
                to: "/searchstudent",
                icon: ManageSearchOutlinedIcon,
            },
            {
                title: "Update Personal Details",
                to: "/updatepersonal",
                icon: CreateOutlinedIcon,
            },
            
        ],
        doctor: [
            {
                title:"Home",
                to:"/home",
                icon:HomeOutlinedIcon,
            },
            {
                title: "View Students",
                to: "/viewstudents",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "Search Students",
                to: "/searchstudent",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "View Daily count",
                to: "/dailycount",
                icon: SyncOutlinedIcon,
            }, 
            {
                title: "Student Treatment",
                to: "/treatment",
                icon: VaccinesOutlinedIcon,
            },
            {
                title: "Update Personal Details",
                to: "/updatepersonal",
                icon: CreateOutlinedIcon,
            },
            {
                title: "Recommends Medical Report",
                to: "/recomendsmedical",
                icon: MedicalInformationOutlinedIcon
            },
            {
                title: "Issue Medical",
                to: "/issuemedical",
                icon: NoteAltOutlinedIcon
            },

        ],
        dentist : [
            {
                title:"Home",
                to:"/home",
                icon:HomeOutlinedIcon,
            },
            {
                title: "View Students",
                to: "/viewstudents",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "Search Students",
                to: "/searchstudent",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "View Daily count",
                to: "/dailycount",
                icon: SyncOutlinedIcon,
            }, 
            {
                title: "Student Treatment",
                to: "/treatment",
                icon: VaccinesOutlinedIcon,
            },
            {
                title: "Update Personal Details",
                to: "/updatepersonal",
                icon: CreateOutlinedIcon,
            },
            {
                title: "Recommends Medical Report",
                to: "/recomendsmedical",
                icon: MedicalInformationOutlinedIcon
            },
            {
                title: "Issue Medical",
                to: "/issuemedical",
                icon: NoteAltOutlinedIcon
            },

        ],
        pharmacy : [
            {
                title:"Home",
                to:"/home",
                icon:HomeOutlinedIcon,
            },
            {
                title: "View Students",
                to: "/viewstudents",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "Search Student",
                to: "/searchstudent",
                icon: ManageSearchOutlinedIcon,

            },
            {
                title: "Search Student Drugs",
                to: "/searchdrugs",
                icon: ManageSearchOutlinedIcon,

            },
        ],
        studentAffairBranch:[
            {
                title:"Home",
                to:"/home",
                icon:HomeOutlinedIcon,
            },
            {
                title: "View Students",
                to: "/viewstudents",
                icon: PeopleOutlinedIcon,
            },
            {
                title: "Search Student",
                to: "/searchstudent",
                icon: ManageSearchOutlinedIcon,

            },
            {
                title: "Manage Medical Report",
                to: "/managemedical",
                icon: MedicalServicesOutlinedIcon,

            },
            {
                title: "Search Medical Report",
                to: "/searchmedical",
                icon: MedicalInformationOutlinedIcon,

            },

        ]
    }
}