import { useState } from "react";
import BreadCrumbs from "./BreadCrumbs";
import ImageAnnotationApp from "./ImageAnnotationApp";
import "./styles.css";

export default function App() {
  const [commentMode, setCommentMode] = useState(false);

  const onCommentMode = () => {
    setCommentMode(!commentMode);
  };

  return (
    <div className="App">
      <BreadCrumbs handleCommentMode={onCommentMode} />
      <ImageAnnotationApp commentMode={commentMode} />
    </div>
  );
}
