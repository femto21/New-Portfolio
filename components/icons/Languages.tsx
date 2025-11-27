import React from "react";
import StackIcon from "tech-stack-icons";

const Languages = () => {
  return (
    <div className=" px-8 py-4 bg-white/10 rounded-xl">
      <p className="text-color1 text-shadow-subtle">Languages</p>
      <div className="text-sm mt-2 text-shadow-subtle grid grid-cols-2 md:grid-cols-4 gap-2">
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="java" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="python" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="html5" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="css3" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="js" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="typescript" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="c#" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="c++" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="go" />
        </div>

        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="php" />
        </div>
      </div>
    </div>
  );
};

export default Languages;
