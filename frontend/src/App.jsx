import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
import { AuthenticationLayout } from "./components/layout/AuthenticationLayout";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Login/Signup";
import Home from "./Pages/Home";
import FAQ from "./Pages/common/FAQ";
import ViewStudents from "./Pages/common/ViewStudents";
import { AddStudent } from "./Pages/nurse/AddStudent";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";
import { DailyCount } from "./Pages/common/DailyCount";
import { UpdatePersonal } from "./Pages/common/UpdatePersonal";
import { SearchStudent } from "./Pages/common/SearchStudent";
import { Treatment } from "./Pages/doctor/Treatment";
import { RecomendMedical } from "./Pages/doctor/RecomendMedical";
import { IssueMedical } from "./Pages/doctor/IssueMedical";
import { ManageUsers } from "./Pages/admin/ManageUsers";
import { ViewUsers } from "./Pages/admin/ViewUsers";
import { Booking } from "./Pages/students/Booking";
import { History } from "./Pages/students/History";
import { Details } from "./Pages/common/Details";
import { DoctorAvailability } from "./Pages/students/DoctorAvailability";
import { ViewPatients } from "./Pages/receptionist/ViewPatients";
import { UpdateDoctorAvailability } from "./Pages/receptionist/UpdateDoctorAvailability";
import { ManageMedical } from "./Pages/studentaffairbranch/ManageMedical";
import { SearchMedical } from "./Pages/studentaffairbranch/SearchMedical";
import { SearchDrugs } from "./Pages/pharmacy/SearchDrugs";
import Calendar from "./Pages/FullCalendar";
import LandingPage from "./Pages/LandingPage/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<DashboardLayout />}>
          {/* Any userRole Routes */}
          <Route path="home" element={<Home />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="calendar" element={<Calendar />} />
          {/* Except students */}

          <Route
            element={
              <ProtectedRoute
                userRole={[
                  "admin",
                  "nurse",
                  "doctor",
                  "phi",
                  "receptionist",
                  "dentist",
                  "pharmacy",
                  "head",
                  "studentAffairBranch",
                ]}
                redirect={"/home"}
              />
            }
          >
            <Route path="viewstudents" element={<ViewStudents />} />
            <Route path="searchstudent" element={<SearchStudent />} />
          </Route>

          {/* Except  pharmacy, studentAffairBranch */}
          <Route
            element={
              <ProtectedRoute
                userRole={[
                  "admin",
                  "nurse",
                  "doctor",
                  "phi",
                  "receptionist",
                  "dentist",
                  "head",
                  "student",
                ]}
                redirect={"/home"}
              />
            }
          >
            <Route path="details" element={<Details />} />
          </Route>

          {/* Except student, pharmacy, studentAffairBranch */}
          <Route
            element={
              <ProtectedRoute
                userRole={[
                  "admin",
                  "nurse",
                  "doctor",
                  "phi",
                  "receptionist",
                  "dentist",
                  "head",
                ]}
                redirect={"/home"}
              />
            }
          >
            <Route path="updatepersonal" element={<UpdatePersonal />} />
          </Route>

          {/* ONLY admin, nurse, doctor, dentist */}
          <Route
            element={
              <ProtectedRoute
                userRole={["admin", "nurse", "doctor", "dentist"]}
                redirect={"/home"}
              />
            }
          >
            <Route path="dailycount" element={<DailyCount />} />
          </Route>

          {/* Doctor and Dentist only*/}
          <Route
            element={
              <ProtectedRoute
                userRole={["doctor", "dentist"]}
                redirect={"/home"}
              />
            }
          >
            <Route path="treatment" element={<Treatment />} />
            <Route path="recomendsmedical" element={<RecomendMedical />} />
            <Route path="issuemedical" element={<IssueMedical />} />
          </Route>

          {/* Doctor only */}
          <Route
            element={
              <ProtectedRoute userRole={["doctor"]} redirect={"/home"} />
            }
          ></Route>

          {/* Admin only */}
          <Route
            element={<ProtectedRoute userRole={["admin"]} redirect={"/home"} />}
          >
            <Route path="manageusers" element={<ManageUsers />} />
            <Route path="viewUsers" element={<ViewUsers />} />
          </Route>

          {/* Nurse only Routes */}
          <Route
            element={<ProtectedRoute userRole={["nurse"]} redirect={"/home"} />}
          >
            <Route path="addstudent" element={<AddStudent />} />
          </Route>

          {/* Student only Routes */}
          <Route
            element={
              <ProtectedRoute userRole={["student"]} redirect={"/home"} />
            }
          >
            <Route path="booking" element={<Booking />} />
            <Route path="history" element={<History />} />
            <Route path="availability" element={<DoctorAvailability />} />
          </Route>

          {/* Receptionist only Routes */}
          <Route
            element={
              <ProtectedRoute userRole={["receptionist"]} redirect={"/home"} />
            }
          >
            <Route path="viewpatients" element={<ViewPatients />} />
            <Route
              path="setavailability"
              element={<UpdateDoctorAvailability />}
            />
          </Route>

          {/* Student Affair Branch only Routes */}
          <Route
            element={
              <ProtectedRoute
                userRole={["studentAffairBranch"]}
                redirect={"/home"}
              />
            }
          >
            <Route path="managemedical" element={<ManageMedical />} />
            <Route path="searchmedical" element={<SearchMedical />} />
          </Route>

          {/* pharmacy only Routes */}
          <Route
            element={
              <ProtectedRoute userRole={["pharmacy"]} redirect={"/home"} />
            }
          >
            <Route path="searchdrugs" element={<SearchDrugs />} />
          </Route>
        </Route>
      </Route>

      {/* end of Protected routes */}

      {/* Authentication Layout */}
      <Route path="/auth" element={<AuthenticationLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/* General Routes */}
      <Route>
        <Route path="landingpage" element={<LandingPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
