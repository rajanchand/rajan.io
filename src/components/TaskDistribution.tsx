
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface Criterion {
  id: number;
  title: string;
  marks: number;
  content: string;
  subtasks?: {
    title: string;
    marks: number;
  }[];
}

const criteria: Criterion[] = [
  {
    id: 1,
    title: "Project Overview Statement",
    marks: 20,
    content: "Include the project brief and initiation, covering background, purpose, scope, objectives, stakeholders, cost and time estimations, risks, and assumptions.",
    subtasks: [
      { title: "Project Brief", marks: 10 },
      { title: "Project Initiation", marks: 10 }
    ]
  },
  {
    id: 2,
    title: "Work Breakdown Structure",
    marks: 10,
    content: "Develop a Work Breakdown Structure (WBS) using an indented list or other formats, along with a WBS dictionary. Include task effort estimates and deliverables."
  },
  {
    id: 3,
    title: "Risk Register",
    marks: 10,
    content: "Compile a risk register for at least five tasks, including fields like containment/contingency plans. Prioritize actionable, project-specific risks."
  },
  {
    id: 4,
    title: "Network Analysis",
    marks: 15,
    content: "Create a Gantt chart and network diagram, ensuring consistency with the WBS. Include resources, milestones, task interdependencies, and costs. Submit a ProjectLibre or Microsoft Project file."
  },
  {
    id: 5,
    title: "Monitoring Plan",
    marks: 20,
    content: "Includes monitoring plan, highlight report, and project operation and control aspects.",
    subtasks: [
      { title: "Monitoring Plan", marks: 8 },
      { title: "Highlight Report", marks: 5 },
      { title: "Project Operation and Control", marks: 7 }
    ]
  },
  {
    id: 6,
    title: "Overall Management",
    marks: 15,
    content: "Project management, lessons learned report, and overall presentation.",
    subtasks: [
      { title: "Project Management", marks: 5 },
      { title: "Lesson Learned Report", marks: 5 },
      { title: "Overall Presentation", marks: 5 }
    ]
  },
  {
    id: 7,
    title: "Individual Reflective Report",
    marks: 10,
    content: "Each group member must submit a reflective report evaluating their involvement, tasks, and project outcomes."
  }
];

const teammates = [
  { id: 1, name: "Emma Johnson", avatar: "EJ", assigned: [] },
  { id: 2, name: "Liam Parker", avatar: "LP", assigned: [] },
  { id: 3, name: "Sophia Chen", avatar: "SC", assigned: [] },
  { id: 4, name: "Noah Williams", avatar: "NW", assigned: [] }
];

const TaskDistribution = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [assignments, setAssignments] = useState<{[key: number]: number[]}>({});

  const toggleExpand = (id: number) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };
  
  const assignTask = (criterionId: number, teammateId: number) => {
    setAssignments(prev => {
      const newAssignments = { ...prev };
      
      if (!newAssignments[criterionId]) {
        newAssignments[criterionId] = [];
      }
      
      if (newAssignments[criterionId].includes(teammateId)) {
        // Remove assignment
        newAssignments[criterionId] = newAssignments[criterionId].filter(id => id !== teammateId);
      } else {
        // Add assignment
        newAssignments[criterionId] = [...newAssignments[criterionId], teammateId];
      }
      
      return newAssignments;
    });
  };
  
  const isAssigned = (criterionId: number, teammateId: number) => {
    return assignments[criterionId]?.includes(teammateId) || false;
  };

  return (
    <section id="distribution" className="py-24 px-6 bg-secondary/50">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            Task Allocation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Distribute project criteria
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Assign team members to each criterion based on their skills and availability.
            Track progress and ensure balanced workloads for everyone.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-sm text-muted-foreground">Criteria & Tasks</div>
          <div className="flex space-x-1 md:space-x-4">
            {teammates.map(teammate => (
              <div key={teammate.id} className="flex flex-col items-center w-12 md:w-auto">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                  {teammate.avatar}
                </div>
                <span className="text-xs whitespace-nowrap hidden md:block mt-1">{teammate.name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {criteria.map((criterion, index) => (
            <motion.div
              key={criterion.id}
              className="glass-panel rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div 
                className="p-4 flex items-center cursor-pointer bg-white/80"
                onClick={() => toggleExpand(criterion.id)}
              >
                <div className="flex-1 grid grid-cols-2 items-center">
                  <div>
                    <h3 className="font-medium">
                      <span className="text-primary mr-2">{criterion.id}.</span>
                      {criterion.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">{criterion.marks} marks</div>
                  </div>
                  <div className="flex space-x-1 md:space-x-4">
                    {teammates.map(teammate => (
                      <div 
                        key={teammate.id} 
                        className={`flex items-center justify-center w-8 h-8 rounded-full border ${
                          isAssigned(criterion.id, teammate.id) 
                            ? 'bg-primary text-white border-primary' 
                            : 'bg-transparent border-gray-200'
                        } transition-colors duration-200`}
                        onClick={(e) => {
                          e.stopPropagation();
                          assignTask(criterion.id, teammate.id);
                        }}
                      >
                        {isAssigned(criterion.id, teammate.id) ? <UserCheck className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ml-2">
                  {expanded === criterion.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
              
              {expanded === criterion.id && (
                <motion.div 
                  className="p-4 text-sm border-t border-border/50 bg-white/50"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-muted-foreground mb-4">{criterion.content}</p>
                  
                  {criterion.subtasks && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Subtasks:</h4>
                      <ul className="space-y-2">
                        {criterion.subtasks.map((subtask, idx) => (
                          <li key={idx} className="flex justify-between border-b border-border/30 pb-2">
                            <span>{subtask.title}</span>
                            <span className="text-primary">{subtask.marks} marks</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Responsibility:</h4>
                    <p className="text-muted-foreground">
                      Assign members to research and compile information for each subsection.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="apple-button bg-primary text-white">
            Save Distribution
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TaskDistribution;
