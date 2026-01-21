import { useState } from "react";
import style from "./Tabs.module.css";

type TabItem = {
  label: string;
  children: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  defaultActiveTab?: number;
};

const Tabs = ({ tabs, defaultActiveTab = 0 }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <div className={style.tabsContainer}>
      {/* Tab Headings */}
      <div className={style.tabsHeading} role="tablist">
        {tabs.map((tab, index) => {
          const tabId = `tab${index + 1}`;
          return (
            <button
              key={tabId}
              id={tabId}
              className={`${style.tabHeadingLink} ${activeTab === index ? style.tabHeadingLinkActive : ""}`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`${tabId}-panel`}
              onClick={() => setActiveTab(index)}
            >
              <h2 className={style.tabHeadingTitle}>{tab.label}</h2>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className={style.tabsContent}>
        {tabs.map((tab, index) => {
          const tabId = `tab${index + 1}`;
          return (
            <div
              key={tabId}
              id={`${tabId}-panel`}
              className={`${style.tabPane} ${activeTab === index ? style.active : ""}`}
              role="tabpanel"
              aria-labelledby={tabId}
              style={{
                display: activeTab === index ? "block" : "none",
              }}
            >
              <div className={`${style.tabPaneHeading}`}>{tab.children}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
