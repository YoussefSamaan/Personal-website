import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Timeline } from './components/TimeLineSection/Timeline.tsx';
import { WorkExperience } from './components/Experience/WorkExperience';
import { Home } from './components/Home';
import { Hobbies } from "./components/Hobbies/Hobbies";
import { ResumeSection } from "./components/ResumeSection/ResumeSection";
import { timelineItems } from './data/timelineItems';
import { navItems } from './data/navItems';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <div className="min-h-screen bg-slate-50">
        <Navigation
            navItems={navItems}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
        />

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timeline" element={<Timeline items={timelineItems} />} />
              <Route path="/resume/" element={<ResumeSection timelineItems={timelineItems} />} >
                  <Route path=":section" element={<ResumeSection timelineItems={timelineItems} />} />
              </Route>
              <Route path="/experience/" element={
                  <WorkExperience
                      workItems={timelineItems.filter(item => item.type === 'work')}
                      educationItems={timelineItems.filter(item => item.type === 'education')}
                      projectItems={timelineItems.filter(item => item.type === 'project')}
                  />}
              >
                  <Route path=":tab" element={
                      <WorkExperience
                          workItems={timelineItems.filter(item => item.type === 'work')}
                          educationItems={timelineItems.filter(item => item.type === 'education')}
                          projectItems={timelineItems.filter(item => item.type === 'project')}
                      />}
                  />
              </Route>
              <Route path="/hobbies/" element={<Hobbies />}>
                  <Route path=":hobby" element={<Hobbies />} />
              </Route>
            </Routes>
          </div>
        </main>
      </div>
  );
}

export default App;
