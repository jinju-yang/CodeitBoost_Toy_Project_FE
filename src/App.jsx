import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/Test";
import PublicGroupPage from "./pages/PublicGroupPage";
import PrivateGroupPage from "./pages/PrivateGroupPage";
import NoDataPage from "./pages/NoDataPage";
import CreateGroupPage from "./pages/CreateGroupPage";
import {
  GroupPasswordCheckPage,
  PrivatePassWordCheckPage,
} from "./pages/PasswordCheckPage";
import NewMemoryPage from "./pages/NewMemoryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/public" element={<PublicGroupPage />} />
        <Route path="/private" element={<PrivateGroupPage />} />
        <Route path="/nodata" element={<NoDataPage />} />
        <Route path="/newgroup" element={<CreateGroupPage />} />
        <Route path="/grouppw" element={<GroupPasswordCheckPage />} />
        <Route path="/privatepw" element={<PrivatePassWordCheckPage />} />
        <Route path="/newmemory" element={<NewMemoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
