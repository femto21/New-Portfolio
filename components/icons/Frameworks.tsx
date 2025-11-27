import React from "react";
import StackIcon from "tech-stack-icons";

const Frameworks = () => {
  return (
    <div className=" px-8 py-4 bg-white/10 rounded-xl">
      <p className="text-color1 text-shadow-subtle">Frameworks</p>
      <div className="text-sm mt-2 text-shadow-subtle grid grid-cols-2 md:grid-cols-4 gap-2">
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="nodejs" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <img src="Express.png" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="spring" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <img src="Next.js.png" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="netcore" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="vuejs" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <img src="Junit.png" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="pytorch" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <img src="TensorFlow.png" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <img src="Android Studio.png" />
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
