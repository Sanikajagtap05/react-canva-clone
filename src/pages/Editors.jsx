import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Canvas from "../components/Canvas";
import Properties from "../components/Properties";

function Editor() {
  return (
    <div className="editor-container">

      <Topbar />

      <div className="editor-body">

        <Sidebar />

        <Canvas />

        <Properties />

      </div>

    </div>
  );
}

export default Editor;