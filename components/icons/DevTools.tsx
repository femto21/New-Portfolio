import React from "react";
import StackIcon from "tech-stack-icons";

const DevTools = () => {
  return (
    <div className=" px-8 py-4 bg-white/10 rounded-xl">
      <p className="text-color1 text-shadow-subtle">Dev Tools</p>
      <div className="text-sm mt-2 text-shadow-subtle grid grid-cols-2 md:grid-cols-4 gap-2">
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="github" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="gitlab" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="aws" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <img src="Azure.png" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="gcloud" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="firebase" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <img src="supabase-logo-icon.png" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="docker" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="postman" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="mongodb" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <StackIcon name="n8n" />
        </div>
        <div style={{ height: 40, width: 40 }}>
          <img src="Jira.png" />
        </div>
      </div>
    </div>
  );
};

export default DevTools;
