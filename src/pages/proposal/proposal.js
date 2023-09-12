import React, { useState} from "react";
import "./proposal.css";
// import Tabs from "../Component/Tab/tabs";

export const Proposal = () =>  {
  const tabs = [
    { id: 'tab-1', title: '제목'},
    { id: 'tab-2', title: '서론'},
    { id: 'tab-3', title: '기능'},
    { id: 'tab-4', title: '초안'},
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div class="tabs-body">
      <div className="tabs-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
          >
            Tab 1
          </div>
          <div
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Tab 2
          </div>
          <div
            className={`tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Tab 3
          </div>
          <div
            className={`tab ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            Tab 4
          </div>
        </div>
        <div className="tab-content">
          {activeTab === 0 && <div><img src="src/pages/proposal/img/웹_프로그래밍_기획서_0502 (2).png/report1.png"></img></div>}
          {activeTab === 1 && <div>Tab 2 Content</div>}
          {activeTab === 2 && <div>Tab 3 Content</div>}
          {activeTab === 3 && <div>Tab 4 Content</div>}
        </div>
      </div>
    </div>
  );
}


