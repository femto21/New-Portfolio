import React from "react";
import StackIcon from "tech-stack-icons";

const Libraries = () => {
  return (
    <div className="px-8 py-4 bg-white/10 rounded-xl">
      <p className="text-color1 text-shadow-subtle">Libraries</p>
      <div className="text-sm mt-2 text-shadow-subtle grid grid-cols-4 gap-2">
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="react" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <img src="openai.webp" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="vuejs" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="threejs" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="tailwindcss" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="shadcnui" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="materialui" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="huggingface" />
        </div>
      </div>
    </div>
  );
};

export default Libraries;
