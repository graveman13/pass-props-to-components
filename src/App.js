import ParentToChild from "./components/parent-to-child";
import ChildToParent from "./components/child-to-parent";
import ChildToChild from './components/child-to-child';
import PropsToGrandParent from "./components/props-to-grand-child";

function App() {
  return (
    <div>
      <ParentToChild />
      <ChildToParent />
      <ChildToChild />
      <PropsToGrandParent />
    </div>
  );
}

export default App;
